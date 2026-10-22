import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SprayCan, ScrollText, Brush, Boxes, Truck, Headset } from "lucide-react";
import styles from "./ServicesList.module.css";

const ITEMS = [
  { img: "inner-cleaning-supplies-01-1254x941.webp", Icon: SprayCan, title: "استيراد مواد التنظيف", text: "منتجات تنظيف عالية الجودة من موردين موثوقين لتلبية احتياجات المحلات والمؤسسات." },
  { img: "inner-tissues-paper-supplies-02.webp", Icon: ScrollText, title: "مناديل ومواد ورقية", text: "نوفر المناديل الورقية ومواد الاستخدام اليومي بجودة عالية وأسعار مناسبة." },
  { img: "inner-cleaning-tools-03.webp", Icon: Brush, title: "توريد أدوات النظافة", text: "نوفر المكانس والفرش والجرف وأدوات المسح والتنظيف بجودة جيدة وأسعار مناسبة." },
  { img: "inner-bulk-distribution-04.webp", Icon: Boxes, title: "التوزيع بالجملة", text: "نورد للمحلات والأسواق في جميع أنحاء ليبيا بكميات تناسب احتياجك." },
  { img: "inner-fast-delivery-05.webp", Icon: Truck, title: "توصيل سريع", text: "نوصل طلباتك في الموعد المحدد إلى محلك أو مخزنك." },
  { img: "inner-customer-support-06-1254x941.webp", Icon: Headset, title: "دعم بعد البيع", text: "نتابع معك حتى استلام الطلب ورضاك الكامل عنه." },
];

export default function ServicesList() {
  return (
    <section className="section">
      <Container>
        <SectionHeading title="خدماتنا" />
        <ul className={styles.list}>
          {ITEMS.map(({ img, Icon, title, text }) => (
            <li key={title} className={styles.item}>
              <div className={styles.media}>
                <Image
                  src={`/images/services/${img}`}
                  alt={title}
                  fill
                  unoptimized
                  sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 33vw"
                  className={styles.img}
                />
                <span className={styles.icon}>
                  <Icon size={30} strokeWidth={1.7} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
