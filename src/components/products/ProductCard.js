import { waLink } from "../../lib/utils";

export default function ProductCard({ product }) {
  return (
    <article className="card product">
      <div className="product-thumb" aria-hidden="true">{product.name[0]}</div>
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.text}</p>
      <a className="btn btn-outline" href={waLink(`أريد الاستفسار عن: ${product.name}`)} target="_blank" rel="noopener noreferrer">
        اطلب عبر واتساب
      </a>
    </article>
  );
}
