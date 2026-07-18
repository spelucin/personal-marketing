#!/usr/bin/env node

/**
 * LinkedIn Carousel Exporter
 * 
 * Exports carousel HTML to multi-page PDF using Playwright.
 * 
 * Usage:
 *   node export.js <input.html> [output.pdf]
 * 
 * Examples:
 *   node export.js my-carousel.html
 *   node export.js my-carousel.html my-output.pdf
 * 
 * If no output path is provided, uses the input filename with .pdf extension.
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function exportCarousel(inputPath, outputPath) {
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: File not found: ${inputPath}`);
    process.exit(1);
  }

  const absoluteInput = path.resolve(inputPath);
  const absoluteOutput = path.resolve(outputPath);

  console.log(`Exporting carousel...`);
  console.log(`  Input:  ${absoluteInput}`);
  console.log(`  Output: ${absoluteOutput}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('file://' + absoluteInput, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Extra wait for rendering
  await page.waitForTimeout(500);

  await page.pdf({
    path: absoluteOutput,
    width: '1080px',
    height: '1350px',
    printBackground: true,
    preferCSSPageSize: false,
  });

  await browser.close();

  const stats = fs.statSync(absoluteOutput);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`Done. Output: ${absoluteOutput} (${sizeKB} KB)`);
}

// Parse CLI args
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node export.js <input.html> [output.pdf]');
  console.log('Example: node export.js my-carousel.html');
  process.exit(0);
}

const input = args[0];
const output = args[1] || input.replace(/\.html$/i, '.pdf');

exportCarousel(input, output).catch(err => {
  console.error('Export failed:', err.message);
  process.exit(1);
});
