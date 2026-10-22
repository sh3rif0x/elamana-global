import Image from "next/image";
import { COMPANY } from "@/data/company";
import styles from "./Services.module.css";

const ICONS = {
  bottle: (<><path d="M8 2h6l2 3H8z"/><rect x="6" y="8" width="10" height="14" rx="2"/></>),
  tissue: (<><rect x="3" y="9" width="18" height="11" rx="2"/><path d="M7 9c0-3 3-5 5-5s5 2 5 5"/></>),
  broom: (<><path d="M14 3l-4 8"/><path d="M6 11h10l2 10H4z"/></>),
  boxes: (<><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></>),
  truck: (<><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></>),
  headset: (<><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/></>),
};

// TODO: غيّر مسارات الصور لما تجهز صور الخدمات الحقيقية
const SERVICES = [
  { icon: "bottle", img: "/images/productss/product1.webp", title: "استيراد مواد التنظيف",
    text: "منتجات تنظيف عالية الجودة من موردين موثوقين لتلبية احتياجات المحلات والمؤسسات." },
  { icon: "tissue", img: "/images/productss/product2.webp", title: "مناديل ومواد ورقية",
    text: "نوفر المناديل الورقية ومواد الاستخدام اليومي بجودة عالية وأسعار مناسبة." },
  { icon: "broom", img: "/images/productss/product3.webp", title: "توريد أدوات النظافة",
    text: "نوفر المكانس والفرش والجرف وأدوات المسح والتنظيف بجودة جيدة وأسعار مناسبة." },
  { icon: "boxes", img: "/images/productss/product4.webp", title: "التوزيع بالجملة",
    text: "نورد للمحلات والأسواق في جميع أنحاء ليبيا بكميات تناسب احتياجك." },
  { icon: "truck", img: "/images/productss/product5.webp", title: "توصيل سريع",
    text: "نوصل طلباتك في الموعد المحدد إلى محلك أو مخزنك." },
  { icon: "headset", img: "/images/productss/product6.webp", title: "دعم بعد البيع",
    text: "نتابع معك حتى استلام الطلب ورضاك الكامل عنه." },
];

export default function Services() {
  return (
    <section className={styles.wrap} id="services">
      <div className={styles.head} dir="rtl">
        <span>خدماتنا</span>
        <h2>حلول متكاملة لأعمالك</h2>
      </div>

      <div className={styles.grid} dir="rtl">
        {SERVICES.map((s) => (
          <article key={s.title} className={styles.card}>
            <div className={styles.imgBox}>
              <Image src={s.img} alt={s.title} fill sizes="(max-width:700px) 100vw, 33vw" className={styles.img} />
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1e88e5" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">{ICONS[s.icon]}</svg>
              </div>
            </div>
            <div className={styles.body}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("مرحباً، أريد طلب خدمة: " + s.title)}`}
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
