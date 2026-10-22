import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { SprayCan, PartyPopper, Wrench, Boxes, Truck, Headset } from "lucide-react";
import styles from "./ServicesList.module.css";

const ITEMS = [
  { img: "inner-cleaning-supplies-01-1254x941.webp", Icon: SprayCan, title: "استيراد مواد التنظيف", text: "نستورد منظفات ومستلزمات تنظيف بمعايير جودة عالمية من موردين معتمدين، لتلبية احتياجات المحلات والمؤسسات." },
  { img: "inner-tissues-paper-supplies-02.webp", Icon: PartyPopper, title: "استيراد مواد الزينة", text: "تشكيلة عصرية من مواد الزينة بتصاميم حديثة، تناسب المناسبات والمحلات وبأسعار مناسبة." },
  { img: "inner-cleaning-tools-03.webp", Icon: Wrench, title: "استيراد الخردوات", text: "أدوات وخردوات متينة ومتنوعة تخدم مختلف الاستخدامات المنزلية والتجارية." },
  { img: "inner-bulk-distribution-04.webp", Icon: Boxes, title: "التوزيع بالجملة", text: "نورّد للمحلات والأسواق في كل أنحاء ليبيا بكميات مرنة وأسعار جملة تنافسية." },
  { img: "inner-fast-delivery-05.webp", Icon: Truck, title: "توصيل سريع", text: "نوصّل طلبك في الموعد المتفق عليه إلى محلك أو مخزنك، بتغليف آمن." },
  { img: "inner-customer-support-06-1254x941.webp", Icon: Headset, title: "دعم بعد البيع", text: "نتابع معك حتى استلام طلبك، ونضمن رضاك الكامل عن كل عملية." },
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
