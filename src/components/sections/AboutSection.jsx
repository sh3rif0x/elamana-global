import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";

const POINTS = [
  "حلول نظافة متكاملة وآمنة",
  "منتجات عالية الجودة وموثوقة",
  "شراكات طويلة الأمد مع عملائنا",
];

export default function AboutSection() {
  return (
    <section className={styles.wrap} dir="rtl">
      <div className={styles.media}>
        <Image
          src="/images/about/cleaning-2.webp"
          alt="شركة الأمانة العالمية المميزة"
          fill
          sizes="(max-width:900px) 100vw, 50vw"
          className={styles.img}
        />
      </div>

      <div className={styles.text}>
        <span className={styles.eyebrow}>من نحن</span>
        <h2>شركة الأمانة العالمية المميزة</h2>
        <p>
          شركة ليبية رائدة في استيراد وتوريد مواد ومنتجات التنظيف عالية الجودة إلى السوق المحلي. نحن ملتزمون بتقديم حلول نظافة متكاملة، موثوقة، وآمنة، لتلبية احتياجات المنازل، المؤسسات، والقطاع الصناعي والتجاري.
        </p>
        <p>
          نركز على تنوع استراتيجي للمنتجات المستوردة مع الالتزام بأعلى معايير الجودة، لضمان رضا العملاء واستدامة الشراكات طويلة الأمد.
        </p>
        <p>
          من خلال شراكات استراتيجية مع العلامات التجارية العالمية المرموقة لكي نضمن لعملائنا منتجات تنظيف فائقة الجودة تلبي أعلى معايير السلامة البيئية والصحية.
        </p>
        <ul className={styles.list}>
          {POINTS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Link href="/تواصل-معنا" className={styles.btn}>تواصل معنا</Link>
      </div>
    </section>
  );
}
