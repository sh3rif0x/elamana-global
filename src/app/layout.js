import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/forms/WhatsAppButton";
import { COMPANY } from "../data/company";
import { SITE_URL } from "../lib/constants";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${COMPANY.name} | استيراد مواد التنظيف والزينة والخردوات في ليبيا`, template: `%s | ${COMPANY.name}` },
  description: COMPANY.description,
  openGraph: { locale: "ar_LY", type: "website", siteName: COMPANY.name },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: SITE_URL,
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    areaServed: "LY",
  };
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
