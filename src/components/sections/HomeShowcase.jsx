import Image from "next/image";
import Link from "next/link";
import styles from "./HomeShowcase.module.css";

const ITEMS = [
  { img: "wet_wipes_product_hero_sample.webp", title: "مناديل مبللة" },
  { img: "rasty_product_hero.webp", title: "منظف راستي" },
  { img: "felce_azzurra_product_hero.webp", title: "فيلشي أزورا" },
  { img: "dove_deodorant_product_hero.webp", title: "مزيل عرق دوف" },
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
