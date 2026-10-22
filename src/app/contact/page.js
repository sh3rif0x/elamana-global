import PageHero from "../../components/ui/PageHero";
import Container from "../../components/layout/Container";
import ContactForm from "../../components/forms/ContactForm";
import { COMPANY } from "../../data/company";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "تواصل معنا",
  description: "تواصل مع شركة الأمانة العالمية المميزة للحصول على عرض سعر أو للاستفسار عن منتجاتنا.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero title="تواصل معنا" subtitle="نسعد بخدمتك والرد على استفساراتك" />
      <section className="section">
        <Container className="contact-grid">
          <ContactForm />
          <aside className="card">
            <h3>معلومات التواصل</h3>
            <ul className="info">
              <li>الهاتف: <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} dir="ltr">{COMPANY.phone}</a></li>
              <li>البريد: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li>العنوان: {COMPANY.address}</li>
              <li>ساعات العمل: {COMPANY.hours}</li>
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
