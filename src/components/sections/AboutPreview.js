import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="section">
      <Container className="about-preview">
        <SectionHeading title="من نحن" />
        <p>
          شركة الأمانة العالمية المميزة شركة ليبية متخصصة في استيراد وتوزيع مواد التنظيف ومواد الزينة والخردوات.
          نوفر منتجات عالية الجودة بأسعار تنافسية، ونحرص على بناء علاقات ثقة طويلة الأمد مع عملائنا من المحلات والأسواق والمؤسسات.
        </p>
        <Button href="/من-نحن" variant="outline">اعرف المزيد</Button>
      </Container>
    </section>
  );
}
