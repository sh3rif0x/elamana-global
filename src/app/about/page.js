import Image from "next/image";
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
        <div className={styles.text}>
          <h2>شركة الأمانة العالمية المميزة</h2>
          <p>
            شركة ليبية متخصصة في استيراد وتوزيع مواد التنظيف ومواد الزينة والخردوات. نعمل على توفير منتجات عالية الجودة بأسعار تنافسية، ونحرص على بناء علاقات ثقة طويلة الأمد مع عملائنا.
          </p>
          <p>
            بدأنا بهدف بسيط: أن يجد التاجر في ليبيا منتجات جيدة بسعر مناسب ومن مورد يعتمد عليه. لذلك نختار كل صنف بعناية، ونتعامل مع موردين ومصانع معروفة، ونراجع الشحنات قبل وصولها إلى عملائنا.
          </p>
          <p>
            نورد للمحلات والأسواق والمخازن بالجملة وبكميات تناسب حجم كل عميل، مع توفر دائم في المخزون وتوصيل إلى مختلف مدن ليبيا.
          </p>
          <p>
            نؤمن أن نجاحنا من نجاح عملائنا، لذلك نتابع معهم بعد البيع ونرد على استفساراتهم بسرعة عبر الهاتف أو الواتساب.
          </p>
          <div className={styles.cols}>
            <div>
              <h3>رؤيتنا</h3>
              <p>أن نكون الخيار الأول في ليبيا لاستيراد وتوزيع مواد التنظيف والزينة والخردوات.</p>
            </div>
            <div>
              <h3>رسالتنا</h3>
              <p>توفير منتجات موثوقة، وخدمة سريعة، وأسعار عادلة تدعم نجاح عملائنا.</p>
            </div>
          </div>
        </div>
        <div className={styles.media}>
          <Image
            src="/images/who/cleaning_products_loading.webp"
            alt="تفريغ شحنة منتجات تنظيف"
            fill
            unoptimized
            sizes="(max-width:900px) 100vw, 40vw"
            className={styles.img}
          />
        </div>
      </section>
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}
