import Image from "next/image";
import Link from "next/link";
import styles from "./HomeShowcase.module.css";

const ITEMS = [
  { img: "banner-1.webp", title: "مكانس وجاروف" },
  { img: "banner-2.webp", title: "مناديل مبللة" },
  { img: "banner-3.webp", title: "مكانس سيما" },
  { img: "banner-4.webp", title: "ممسحة سيما" },
];

export default function HomeShowcase() {
  return (
    <section className={styles.wrap}>
      <div className={styles.head} dir="rtl">
        <h2>أفضل منتجاتنا</h2>
        <i className={styles.line} />
      </div>

      <div className={styles.grid} dir="rtl">
        {ITEMS.map((it) => (
          <div className={styles.item} key={it.img}>
            <Image
              src={`/images/products/banner/${it.img}`}
              alt={it.title}
              fill
              unoptimized
              sizes="25vw"
              className={styles.img}
            />
            <div className={styles.layer}>
              <strong>{it.title}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.more}>
        <Link href="/products" className={styles.btn}>عرض كل المنتجات</Link>
      </div>
    </section>
  );
}
