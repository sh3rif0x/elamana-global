"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProductsGrid.module.css";

const PER_PAGE = 12;

export default function ProductsPager({ files }) {
  const [page, setPage] = useState(1);
  const topRef = useRef(null);
  const pages = Math.max(1, Math.ceil(files.length / PER_PAGE));
  const items = files.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (p) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.wrap} dir="rtl" ref={topRef}>
      <div className={styles.grid}>
        {items.map((f, i) => (
          <div className={styles.item} key={f}>
            <Image
              src={`/images/products/${f}`}
              alt={`منتج ${(page - 1) * PER_PAGE + i + 1}`}
              fill
              unoptimized
              sizes="(max-width:600px) 50vw, (max-width:1000px) 33vw, 25vw"
              className={styles.img}
            />
          </div>
        ))}
      </div>

      {pages > 1 && (
        <nav className={styles.pager} aria-label="pagination">
          <button onClick={() => go(page - 1)} disabled={page === 1} className={styles.nav}>السابق</button>
          {Array.from({ length: pages }, (_, n) => n + 1).map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className={n === page ? `${styles.num} ${styles.active}` : styles.num}
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </button>
          ))}
          <button onClick={() => go(page + 1)} disabled={page === pages} className={styles.nav}>التالي</button>
        </nav>
      )}
    </section>
  );
}
