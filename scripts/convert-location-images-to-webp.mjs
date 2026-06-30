/* global console, process */

import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const galleryDirs = ["sudos", "Mansoria", "alsly"];
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

function safeName(fileName) {
  return path.parse(fileName).name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
}

for (const dirName of galleryDirs) {
  const galleryDir = path.join(publicDir, dirName);
  const files = await readdir(galleryDir, { withFileTypes: true });
  const images = files
    .filter((file) => file.isFile())
    .map((file) => file.name)
    .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()));

  if (images.length === 0) {
    console.log(`No source images found in ${dirName}.`);
    continue;
  }

  await Promise.all(
    images.map(async (fileName) => {
      const source = path.join(galleryDir, fileName);
      const output = path.join(galleryDir, `${safeName(fileName)}.webp`);

      await sharp(source)
        .resize({ width: 1400, withoutEnlargement: true })
        .webp({ quality: 84 })
        .toFile(output);

      console.log(`Converted ${dirName}/${fileName} -> ${dirName}/${path.basename(output)}`);
    })
  );
}
