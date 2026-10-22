import PageHero from "../../components/ui/PageHero";
import ServicesGrid from "../../components/sections/ServicesGrid";
import ContactCTA from "../../components/sections/ContactCTA";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "خدماتنا",
  description: "خدمات استيراد وتوزيع مواد التنظيف والزينة والخردوات بالجملة مع توصيل سريع لجميع أنحاء ليبيا.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero title="خدماتنا" subtitle="حلول متكاملة للاستيراد والتوزيع بالجملة" />
      <ServicesGrid title="ماذا نقدم" />
    <ContactCTA />
</>
  );
}
