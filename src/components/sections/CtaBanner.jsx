import Image from "next/image";
import Link from "next/link";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.wrap}>
      <div className={styles.box} dir="rtl">
        <Image
          src="/images/banners/cleaning-supplies-service.webp"
          alt="مستلزمات تنظيف"
          fill
          sizes="95vw"
          className={styles.img}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2>هل تبحث عن مورد موثوق لمحلك؟</h2>
          <p>تواصل معنا اليوم واحصل على عرض سعر خاص بك.</p>
          <Link href="/تواصل-معنا" className={styles.btn}>تواصل معنا</Link>
        </div>
      </div>
    </section>
  );
}
