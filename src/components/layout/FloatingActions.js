"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Phone, ArrowUp } from "lucide-react";
import { COMPANY } from "../../data/company";
import { waLink } from "../../lib/utils";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fab-stack">
        <a
          className="fab fab-wa"
          href={waLink("مرحباً، أريد الاستفسار عن منتجاتكم")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
        >
          <FaWhatsapp size={30} />
        </a>
        <a className="fab fab-tel" href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} aria-label="اتصل بنا">
          <Phone size={26} strokeWidth={2} />
        </a>
      </div>
      <button
        type="button"
        className={`fab fab-top${show ? " show" : ""}`}
        aria-label="الرجوع لأعلى"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={26} strokeWidth={2.4} />
      </button>
    </>
  );
}
