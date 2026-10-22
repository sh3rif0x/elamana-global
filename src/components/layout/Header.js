"use client";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { COMPANY } from "../../data/company";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Container className="header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <strong>{COMPANY.name}</strong>
          <small>{COMPANY.tagline}</small>
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
