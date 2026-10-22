import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner} dir="rtl">
        <div className={styles.frame}>
          <Image
            src="/images/banners/cleaning-buying-guide-img-1-Photoroom.webp"
            alt="منتجات تنظيف"
            fill
            sizes="(max-width:900px) 100vw, 45vw"
            className={styles.img}
          />
        </div>

        <div className={styles.text}>
          <h2>كل ما تحتاجه لنظافة أفضل</h2>
          <p>
            منتجات تنظيف وأدوات عالية الجودة، نوفرها لك بأسعار مناسبة وخدمة
            موثوقة وسريعة.
          </p>
          <Link href="/المنتجات" className={styles.btn}>
            تصفح المنتجات
          </Link>
        </div>
      </div>
    </section>
  );
}
