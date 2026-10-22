import Link from "next/link";
import styles from "./PageHero.module.css";

export default function PageHero({ title, subtitle }) {
  return (
    <section className={styles.hero} dir="rtl">
      <span className={styles.bubbleA} />
      <span className={styles.bubbleB} />
      <span className={styles.bubbleC} />
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
      <svg className={styles.wave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40C240 80 480 0 720 30s480 50 720 10V80H0z" fill="#fff" />
      </svg>
    </section>
  );
}
