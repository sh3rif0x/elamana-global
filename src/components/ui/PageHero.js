import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className={styles.hero} dir="rtl">
      {image && (
        <Image src={image} alt="" fill priority unoptimized sizes="100vw" className={styles.img} />
      )}
      <div className={image ? styles.overlay : styles.plain} />
      <div className={styles.content}>
        <nav className={styles.crumbs}>
          <Link href="/">الرئيسية</Link> / {title}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
