import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactCTA from "../../components/sections/ContactCTA";
import PageHero from "../../components/ui/PageHero";
import ContactForm from "../../components/forms/ContactForm";
import { COMPANY } from "../../data/company";
import { buildMetadata } from "../../lib/seo";
import styles from "./contact.module.css";

export const metadata = buildMetadata({
  title: "تواصل معنا",
  description: "تواصل مع شركة الأمانة العالمية المميزة للحصول على عرض سعر أو للاستفسار عن منتجاتنا.",
  path: "/contact",
});

export default function Contact() {
  const tel = COMPANY.phone.replace(/\s/g, "");
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed&hl=ar`;
  return (
    <>
      <PageHero title="تواصل معنا" subtitle="نسعد بخدمتك والرد على استفساراتك" />
      <section className={styles.wrap} dir="rtl">
        <div className={styles.top}>
          <div className={styles.formBox}>
            <ContactForm />
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

        <ul className={styles.info}>
          <li>
            <span className={styles.icon}><Phone size={26} strokeWidth={1.7} /></span>
            <div><h3>الهاتف</h3><a href={`tel:${tel}`} dir="ltr">{COMPANY.phone}</a></div>
          </li>
          <li>
            <span className={styles.icon}><Mail size={26} strokeWidth={1.7} /></span>
            <div><h3>البريد</h3><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
          </li>
          <li>
            <span className={styles.icon}><MapPin size={26} strokeWidth={1.7} /></span>
            <div><h3>العنوان</h3><span>{COMPANY.address}</span></div>
          </li>
          <li>
            <span className={styles.icon}><Clock size={26} strokeWidth={1.7} /></span>
            <div><h3>ساعات العمل</h3><span>{COMPANY.hours}</span></div>
          </li>
        </ul>

        <div className={styles.map}>
          <iframe
            src={mapSrc}
            title="موقع شركة الأمانة العالمية المميزة"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
