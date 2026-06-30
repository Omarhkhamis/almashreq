/* global console, process */

import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const partnersDir = path.join(process.cwd(), "public", "partners");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

const files = await readdir(partnersDir, { withFileTypes: true });
const images = files
  .filter((file) => file.isFile())
  .map((file) => file.name)
  .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()));
const baseNameCounts = images.reduce((counts, fileName) => {
  const baseName = path.parse(fileName).name;
  counts.set(baseName, (counts.get(baseName) || 0) + 1);
  return counts;
}, new Map());

if (images.length === 0) {
  console.log("No PNG/JPG partner images found to convert.");
  process.exit(0);
}

await Promise.all(
  images.map(async (fileName) => {
    const parsed = path.parse(fileName);
    const extensionName = parsed.ext.slice(1).toLowerCase();
    const safeBaseName = parsed.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
    const outputName = baseNameCounts.get(parsed.name) > 1 ? `${safeBaseName}-${extensionName}.webp` : `${safeBaseName}.webp`;
    const source = path.join(partnersDir, fileName);
    const output = path.join(partnersDir, outputName);

    await sharp(source)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(output);

    console.log(`Converted ${fileName} -> ${path.basename(output)}`);
  })
);
