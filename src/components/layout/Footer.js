import Link from "next/link";
import Container from "./Container";
import { NAV } from "../../data/navigation";
import { COMPANY } from "../../data/company";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div>
          <h3>{COMPANY.name}</h3>
          <p>{COMPANY.description}</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <ul>{NAV.map((i) => <li key={i.href}><Link href={i.href}>{i.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>تواصل معنا</h4>
          <ul>
            <li>الهاتف: <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} dir="ltr">{COMPANY.phone}</a></li>
            <li>البريد: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li>العنوان: {COMPANY.address}</li>
            <li>{COMPANY.hours}</li>
          </ul>
        </div>
        <div>
          <h4>موقعنا</h4>
          <div className="footer-map">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed&hl=ar`}
              title="موقعنا على الخريطة"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
      <div className="copyright">
        <span>© 2026 {COMPANY.name}. جميع الحقوق محفوظة.</span>
        <span className="credit">
          تصميم وتطوير{" "}
          <a href="https://wa.me/201279924599" target="_blank" rel="noopener noreferrer">علي شريف</a>
        </span>
      </div>
    </footer>
  );
}
