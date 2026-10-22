import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero} dir="rtl">
      <Image
        src="/images/textures/hero-texture.webp"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className={styles.img}
      />
      <div className={styles.content}>
        <nav className={styles.crumbs}>
          <Link href="/">الرئيسية</Link>
          <span>/</span>
          <b>{title}</b>
        </nav>
        <h1>{title}</h1>
        <i className={styles.line} />
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
