import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products.length) return <p className="center">لا توجد منتجات في هذا القسم حاليًا.</p>;
  return <div className="grid grid-4">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>;
}
