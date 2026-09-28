// Install the generated PNGs into src/assets/projects/ as webp.
//
//   node scripts/project-art/to-webp.js
//
// Codex hands back ~1.3 MB PNGs at whatever size the model chose. The repo
// keeps 1600x900 webp instead: Astro re-encodes to responsive webp on build
// anyway, so committing the originals would only bloat git history.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, "out");
const dst = path.join(here, "..", "..", "src", "assets", "projects");

fs.mkdirSync(dst, { recursive: true });
const files = fs.readdirSync(src).filter((f) => f.endsWith(".png"));

for (const f of files) {
  const out = path.join(dst, f.replace(/\.png$/, ".webp"));
  await sharp(path.join(src, f))
    // The prompt asks for 16:9 with generous margins, so a centre crop to an
    // exact 16:9 never clips the subject and keeps every card the same shape.
    .resize(1600, 900, { fit: "cover", position: "centre" })
    .webp({ quality: 82 })
    .toFile(out);
  console.log(`${f.padEnd(28)} -> ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
}

console.log(`${files.length} images installed in src/assets/projects/`);
