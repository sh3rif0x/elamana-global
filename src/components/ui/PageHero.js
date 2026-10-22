import Link from "next/link";
import styles from "./PageHero.module.css";

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero} dir="rtl">
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
