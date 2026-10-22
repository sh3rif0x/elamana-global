import PageHero from "../../components/ui/PageHero";
import Container from "../../components/layout/Container";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import ContactCTA from "../../components/sections/ContactCTA";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "من نحن",
  description: "تعرف على شركة الأمانة العالمية المميزة، رؤيتنا ورسالتنا في استيراد وتوزيع مواد التنظيف والزينة والخردوات في ليبيا.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHero title="من نحن" subtitle="شريككم الموثوق في التجارة الدولية" image="/images/banners/about-hero.webp" />
      <section className="section">
        <Container className="prose">
          <p>
            شركة الأمانة العالمية المميزة شركة ليبية متخصصة في استيراد وتوزيع مواد التنظيف ومواد الزينة والخردوات.
            نعمل على توفير منتجات عالية الجودة بأسعار تنافسية، ونحرص على بناء علاقات ثقة طويلة الأمد مع عملائنا.
          </p>
          <h2>رؤيتنا</h2>
          <p>أن نكون الخيار الأول في ليبيا لاستيراد وتوزيع مواد التنظيف والزينة والخردوات.</p>
          <h2>رسالتنا</h2>
          <p>توفير منتجات موثوقة، وخدمة سريعة، وأسعار عادلة تدعم نجاح عملائنا.</p>
        </Container>
      </section>
      <WhyChooseUs />
    <ContactCTA />
</>
  );
}
