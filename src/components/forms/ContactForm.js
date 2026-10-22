"use client";
import { waLink } from "../../lib/utils";

export default function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `الاسم: ${f.get("name")}\nالهاتف: ${f.get("phone")}\nالمحل/الشركة: ${f.get("shop")}\nالرسالة: ${f.get("message")}`;
    window.open(waLink(msg), "_blank", "noopener");
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <label>الاسم<input name="name" required autoComplete="name" /></label>
      <label>رقم الهاتف<input name="phone" type="tel" required dir="ltr" autoComplete="tel" /></label>
      <label>اسم المحل أو الشركة<input name="shop" /></label>
      <label>رسالتك<textarea name="message" rows={5} required /></label>
      <button className="btn btn-primary" type="submit">إرسال عبر واتساب</button>
    </form>
  );
}
