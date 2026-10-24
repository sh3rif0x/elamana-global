import fs from "fs";
import path from "path";
import Image from "next/image";
import styles from "./ProductsGallery.module.css";

// غيّر الرقم (صيغة دولية بدون + ولا أصفار)
const WHATSAPP_NUMBER = "201000000000";

function getImages() {
  try {
    const dir = path.join(process.cwd(), "public/images/products");
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

// limit = عدد الصور المعروضة (0 = الكل)
export default function ProductsGallery({ limit = 0 }) {
  const all = getImages();
  const items = limit > 0 ? all.slice(0, limit) : all;

  return (
    <section className={styles.wrap}>
      <div className={styles.head} dir="rtl">
        <span className={styles.eyebrow}>منتجاتنا</span>
        <h2>منتجات تنظيف عالية الجودة</h2>
        <i className={styles.line} />
      </div>

      <div className={styles.grid} dir="rtl">
        {items.map((img, i) => (
          <article className={`${styles.card} ${i % 3 === 0 ? styles.hideSm : ""}`} key={img}>
            <div className={styles.frame}>
              <Image
                src={`/images/products/${img}`}
                alt={`منتج ${i + 1}`}
                fill
                unoptimized
                sizes="(max-width:700px) 100vw, 33vw"
                className={styles.img}
              />
            </div>
            <div className={styles.body}>
              <h3>منتج {i + 1}</h3>
              <a
                className={styles.btn}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مهتم بالمنتج رقم ${i + 1}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                اطلب الآن
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
