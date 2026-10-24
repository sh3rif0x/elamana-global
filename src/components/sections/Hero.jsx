"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const SLIDES = [
  {
    image: "/images/hero/hero-1.webp",
    mobile: "/images/hero/hero-1-sm.webp",
    eyebrow: "شركة الأمانة العالمية المميزة",
    title: "لاستيراد مواد الزينة والخردوات ومواد التنظيف",
    text: "متخصصون في استيراد وتوزيع مواد التنظيف عالية الجودة للمحلات والأسواق في جميع أنحاء ليبيا.",
  },
  {
    image: "/images/hero/hero-2.webp",
    mobile: "/images/hero/hero-2-sm.webp",
    eyebrow: "جودة مضمونة",
    title: "منتجات تنظيف بمعايير عالمية",
    text: "تشكيلة واسعة من المنظفات والأدوات تناسب كل المحلات والأسواق.",
  },
  {
    image: "/images/hero/hero-3.webp",
    mobile: "/images/hero/hero-3-sm.webp",
    eyebrow: "نظافة تدوم",
    title: "نظافة فائقة ولمعان يدوم",
    text: "منظفات فعّالة تعطيك أفضل النتائج بأقل مجهود وأسعار تنافسية.",
  },
  {
    image: "/images/hero/hero-5.webp",
    mobile: "/images/hero/hero-5-sm.webp",
    eyebrow: "أدوات متكاملة",
    title: "كل ما تحتاجه لنظافة أفضل",
    text: "إسفنج وقفازات وأدوات تنظيف بجودة عالية للمحلات والمؤسسات.",
  },
  {
    image: "/images/hero/hero-4.webp",
    mobile: "/images/hero/hero-4-sm.webp",
    eyebrow: "توصيل سريع",
    title: "نوصّل لكل مدن ليبيا",
    text: "خدمة توصيل سريعة وموثوقة مع دعم مباشر عبر واتساب.",
  },
];

const BUBBLES = [
  { s: 60, l: "6%", d: "0s", t: "9s" },
  { s: 34, l: "14%", d: "2s", t: "11s" },
  { s: 90, l: "22%", d: "4s", t: "13s" },
  { s: 40, l: "78%", d: "1s", t: "10s" },
  { s: 70, l: "88%", d: "3s", t: "12s" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className={styles.wrap}>
      <section
        className={styles.hero}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((s, idx) => (
          <div key={idx} className={`${styles.slide} ${idx === i ? styles.active : ""}`}>
            <picture>
              <source media="(max-width: 700px)" srcSet={s.mobile} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" className={styles.img} loading={idx === 0 ? "eager" : "lazy"} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </picture>
            <div className={styles.overlay} />

            <div className={styles.content} dir="rtl">
              <span className={styles.eyebrow}>
                <i /> {s.eyebrow}
              </span>
              <h1>{s.title}</h1>
              <p>{s.text}</p>
              <div className={styles.actions}>
                <a href="tel:+218911116777" className={styles.btnPrimary}>تواصل معنا</a>
              </div>
            </div>
          </div>
        ))}

        {BUBBLES.map((b, k) => (
          <span
            key={k}
            className={styles.bubble}
            style={{ width: b.s, height: b.s, left: b.l, animationDelay: b.d, animationDuration: b.t }}
          />
        ))}

        <div className={styles.dots}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`الشريحة ${idx + 1}`}
              className={`${styles.dot} ${idx === i ? styles.dotActive : ""}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
