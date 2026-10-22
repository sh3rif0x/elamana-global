import Image from "next/image";
import { Eye, Target } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import ContactCTA from "../../components/sections/ContactCTA";
import { buildMetadata } from "../../lib/seo";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "من نحن",
  description: "تعرف على شركة الأمانة العالمية المميزة، رؤيتنا ورسالتنا في استيراد وتوزيع مواد التنظيف والزينة والخردوات في ليبيا.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHero title="من نحن" subtitle="شريككم الموثوق في التجارة الدولية" />
      <section className={styles.wrap} dir="rtl">
        <div className={styles.top}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>من نحن</span>
            <h2>شركة الأمانة العالمية المميزة</h2>
            <p>
              شركة الأمانة العالمية المميزة شركة ليبية متخصصة في استيراد وتوزيع مواد التنظيف ومواد الزينة والخردوات.
              نعمل على توفير منتجات عالية الجودة بأسعار تنافسية، ونحرص على بناء علاقات ثقة طويلة الأمد مع عملائنا.
            </p>
          </div>
          <div className={styles.media}>
            <Image
              src="/images/about/alamana-products-bucket-base-portrait.webp"
              alt="منتجات الأمانة العالمية المميزة"
              fill
              unoptimized
              sizes="(max-width:900px) 100vw, 40vw"
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.card}>
            <span className={styles.icon}><Eye size={30} strokeWidth={1.7} /></span>
            <h3>رؤيتنا</h3>
            <p>أن نكون الخيار الأول في ليبيا لاستيراد وتوزيع مواد التنظيف والزينة والخردوات.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.icon}><Target size={30} strokeWidth={1.7} /></span>
            <h3>رسالتنا</h3>
            <p>توفير منتجات موثوقة، وخدمة سريعة، وأسعار عادلة تدعم نجاح عملائنا.</p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
