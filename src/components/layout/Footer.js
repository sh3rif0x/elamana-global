import Link from "next/link";
import Container from "./Container";
import { NAV } from "../../data/navigation";
import { COMPANY } from "../../data/company";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div>
          <Link href="/" className="footer-logo" aria-label={COMPANY.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/website-header-logo-transparent.webp" alt={COMPANY.name} />
          </Link>
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
      </Container>
      <div className="copyright">
        <span>© 2026 {COMPANY.name}. جميع الحقوق محفوظة.</span>
        <span className="sep" aria-hidden="true">|</span>
        <span className="credit">
          تصميم وتطوير{" "}
          <a href="https://wa.me/201279924599" target="_blank" rel="noopener noreferrer">علي شريف</a>
        </span>
      </div>
    </footer>
  );
}
