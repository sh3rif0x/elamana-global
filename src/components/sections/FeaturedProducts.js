import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ProductGrid from "../products/ProductGrid";
import { PRODUCTS } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="section">
      <Container>
        <SectionHeading title="منتجاتنا" subtitle="تشكيلة واسعة من مواد التنظيف والزينة والخردوات" />
        <ProductGrid products={PRODUCTS.slice(0, 4)} />
        <div className="center"><Button href="/المنتجات">عرض كل المنتجات</Button></div>
      </Container>
    </section>
  );
}
