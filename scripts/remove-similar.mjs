import fs from "fs";
import path from "path";
import sharp from "sharp";

const dir = "public/images/gallery";
const trash = "gallery-removed"; // برّه public، ممكن ترجّع منه أي صورة
const listFile = "src/data/gallery.js";

const apply = process.argv.includes("--apply");
const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || "").slice(k.length + 3) || d;
const T = Number(arg("t", "50"));            // كل ما زاد الرقم، حذف أكتر
const manual = arg("rm", "").split(",").filter(Boolean); // حذف بالاسم

fs.mkdirSync(trash, { recursive: true });

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".webp")).sort();

// بصمة الصورة (dHash 256 بت)
async function hash(f) {
  const px = await sharp(path.join(dir, f)).resize(17, 16, { fit: "fill" }).greyscale().raw().toBuffer();
  const bits = [];
  for (let y = 0; y < 16; y++)
    for (let x = 0; x < 16; x++) bits.push(px[y * 17 + x] > px[y * 17 + x + 1] ? 1 : 0);
  return bits;
}
const dist = (a, b) => a.reduce((s, v, i) => s + (v !== b[i]), 0);

const hs = {};
for (const f of files) hs[f] = await hash(f);

const remove = new Set(manual);
const pairs = [];
for (let i = 0; i < files.length; i++)
  for (let j = i + 1; j < files.length; j++) {
    const d = dist(hs[files[i]], hs[files[j]]);
    if (d <= T) pairs.push([files[i], files[j], d]);
  }

pairs.sort((a, b) => a[2] - b[2]);
console.log(pairs.length ? "الصور المتشابهة (كل ما الرقم أقل، التشابه أكتر):" : "مفيش صور متشابهة عند الحد ده");
for (const [a, b, d] of pairs) {
  console.log(`  ${String(d).padStart(3)} | ${a}  ~  ${b}`);
  if (!remove.has(a)) remove.add(b); // نسيب الأولى ونشيل التانية
}

if (!apply) {
  console.log("\nده عرض بس. هتتشال:", [...remove].join(", ") || "لا شيء");
  console.log("للتنفيذ ضيف --apply");
  process.exit(0);
}

for (const f of remove) {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) { fs.renameSync(p, path.join(trash, f)); console.log("اتشالت:", f); }
}

const left = fs.readdirSync(dir).filter((f) => f.endsWith(".webp"));
let list = fs.existsSync(listFile)
  ? [...fs.readFileSync(listFile, "utf8").matchAll(/"([^"]+)"/g)].map((m) => m[1])
  : [];
list = list.filter((n) => left.includes(n));
for (const f of left.sort()) if (!list.includes(f)) list.push(f);

fs.writeFileSync(listFile, "export const GALLERY = [\n" + list.map((n) => `  "${n}",`).join("\n") + "\n];\n");
console.log("الباقي:", list.length);
