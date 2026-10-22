import { waLink } from "../../lib/utils";

export default function WhatsAppButton() {
  return (
    <a className="wa-float" href={waLink("مرحبا")} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
      واتساب
    </a>
  );
}
