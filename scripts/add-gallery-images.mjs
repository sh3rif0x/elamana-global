import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

const dir = "public/images/gallery";
const bak = "gallery-backup";
const listFile = "src/data/gallery.js";
const hashFile = "scripts/.gallery-hashes.json";

fs.mkdirSync(bak, { recursive: true });

// القائمة الحالية بترتيبها
let list = [];
if (fs.existsSync(listFile)) {
  list = [...fs.readFileSync(listFile, "utf8").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}
list = list.filter((n) => fs.existsSync(path.join(dir, n)));

// هاشات الصور اللي اتضافت قبل كده (لمنع التكرار)
let hashes = fs.existsSync(hashFile) ? JSON.parse(fs.readFileSync(hashFile, "utf8")) : {};

const incoming = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();
let added = 0;

for (const f of incoming) {
  const p = path.join(dir, f);
  const buf = fs.readFileSync(p);
  const hash = crypto.createHash("md5").update(buf).digest("hex");
  fs.renameSync(p, path.join(bak, f));

  if (hashes[hash]) { console.log("مكررة، اتشالت:", f); continue; }

  let name = f.toLowerCase().replace(/\s+/g, "-").replace(/\.[^.]+$/, "") + ".webp";
  if (fs.existsSync(path.join(dir, name))) name = name.replace(".webp", `-${Date.now()}.webp`);

  await sharp(buf).rotate().resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 78 }).toFile(path.join(dir, name));

  hashes[hash] = name;
  list.push(name);
  added++;
  console.log("اتضافت:", name);
}

// أي webp في المجلد وش في القائمة، ضيفه في الآخر
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".webp")).sort()) {
  if (!list.includes(f)) list.push(f);
}

fs.writeFileSync(hashFile, JSON.stringify(hashes, null, 2));
fs.writeFileSync(listFile, "export const GALLERY = [\n" + list.map((n) => `  "${n}",`).join("\n") + "\n];\n");
console.log(`الجديد: ${added} | الإجمالي: ${list.length}`);
