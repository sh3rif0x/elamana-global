import Image from "next/image";
import Button from "../ui/Button";
import { COMPANY } from "../../data/company";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <Image
          src="/images/hero/hero-bg.webp"
          alt="مواد تنظيف عالية الجودة"
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{COMPANY.name} {COMPANY.tagline}</h1>
          <p>{COMPANY.description}</p>
          <div className="hero-actions center">
            <Button href="/المنتجات" variant="light">تعرف أكثر</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
