import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

const dir = "public/images/gallery";
const bak = "gallery-backup";
fs.mkdirSync(bak, { recursive: true });

const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();
const seen = new Set();
const out = [];

for (const f of files) {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  const hash = crypto.createHash("md5").update(buf).digest("hex");
  fs.renameSync(p, path.join(bak, f));

  if (seen.has(hash)) { console.log("duplicate removed:", f); continue; }
  seen.add(hash);

  let name = f.toLowerCase().replace(/\s+/g, "-").replace(/\.[^.]+$/, "") + ".webp";
  if (out.includes(name)) name = name.replace(".webp", `-${out.length}.webp`);

  await sharp(buf).rotate().resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(path.join(dir, name));
  out.push(name);
}

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync(
  "src/data/gallery.js",
  "export const GALLERY = [\n" + out.map((n) => `  "${n}",`).join("\n") + "\n];\n"
);
console.log("unique images:", out.length);
