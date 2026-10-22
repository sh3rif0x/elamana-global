"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "../../data/navigation";
import { safeDecode } from "../../lib/utils";

export default function Navbar({ onNavigate, className = "nav" }) {
  const path = safeDecode(usePathname());
  return (
    <nav className={className} aria-label="التنقل الرئيسي">
      {NAV.map((i) => (
        <Link key={i.href} href={i.href} onClick={onNavigate}
          className={path === i.href ? "active" : ""} aria-current={path === i.href ? "page" : undefined}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
