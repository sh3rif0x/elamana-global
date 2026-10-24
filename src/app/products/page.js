import ProductsGrid from "../../components/sections/ProductsGrid";
import PageHero from "../../components/ui/PageHero";
import ContactCTA from "../../components/sections/ContactCTA";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "المنتجات | الأمانة العالمية المميزة",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero title="المنتجات" subtitle="مواد التنظيف والزينة والخردوات بأسعار الجملة" />
    <ProductsGrid />
<ContactCTA />
</>
  );
}
