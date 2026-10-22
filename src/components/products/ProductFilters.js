"use client";
import { useState } from "react";
import ProductGrid from "./ProductGrid";
import { CATEGORIES, PRODUCTS } from "../../data/products";

export default function ProductFilters() {
  const [cat, setCat] = useState("الكل");
  const list = cat === "الكل" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  return (
    <>
      <div className="filters" role="tablist">
        {CATEGORIES.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <ProductGrid products={list} />
    </>
  );
}
