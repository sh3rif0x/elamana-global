"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { COMPANY } from "../../data/company";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    window.addEventListener("scroll", () => setOpen(false), { passive: true, once: true });
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", esc); };
  }, [open]);
  return (
    <header className="header" ref={ref}>
      <Container className="header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/website-header-logo-transparent.webp" alt="" />
          <span className="logo-text">
            <strong>{COMPANY.name}</strong>
            <small>{COMPANY.tagline}</small>
          </span>
        </Link>
        <Navbar />
        <button className="burger" aria-label="القائمة" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
