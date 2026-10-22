import Image from "next/image";
import { COMPANY } from "@/data/company";
import styles from "./Products.module.css";

// TODO: عدّل الأسماء والأوصاف والصور لمنتجاتك الحقيقية
const PRODUCTS = [
  { name: "منظف أرضيات", text: "منظف قوي ورائحة منعشة", img: "product1.webp" },
  { name: "منظف زجاج", text: "لمعان بدون آثار", img: "product2.webp" },
  { name: "سائل جلي", text: "يزيل الدهون بسهولة", img: "product3.webp" },
  { name: "معطر جو", text: "عطر يدوم طويلاً", img: "product4.webp" },
  { name: "مبيض ملابس", text: "نصاعة وحماية للألوان", img: "product5.webp" },
  { name: "منظف حمامات", text: "تعقيم وإزالة الجير", img: "product6.webp" },
  { name: "مناديل ورقية", text: "نعومة وجودة عالية", img: "product7.webp" },
  { name: "إسفنج وفرش", text: "أدوات تنظيف متينة", img: "product8.webp" },
];

export default function Products({ limit }) {
  const list = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  return (
    <section className={styles.wrap} id="products">
      <div className={styles.head} dir="rtl">
        <span>منتجاتنا</span>
        <h2>اختر من تشكيلتنا الواسعة</h2>
      </div>

      <div className={styles.grid} dir="rtl">
        {list.map((p) => (
          <article key={p.name} className={styles.card}>
            <div className={styles.imgBox}>
              <Image src={`/images/productss/${p.img}`} alt={p.name} fill
                sizes="(max-width:700px) 50vw, 25vw" className={styles.img} />
            </div>
            <div className={styles.body}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن: " + p.name)}`}
                target="_blank" rel="noreferrer"
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
