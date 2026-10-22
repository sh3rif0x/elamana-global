import Link from "next/link";

export default function Breadcrumbs({ current }) {
  return (
    <nav aria-label="مسار التنقل" className="breadcrumbs">
      <Link href="/">الرئيسية</Link> <span>/</span> <span>{current}</span>
    </nav>
  );
}
