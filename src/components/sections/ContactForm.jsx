"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

// غيّر الرقم (صيغة دولية بدون + ولا أصفار)
const WHATSAPP_NUMBER = "201000000000";
const SERVICES = ["تنظيف منازل", "تنظيف شركات ومكاتب", "توريد منتجات تنظيف", "خدمة أخرى"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0], message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 3) err.name = "اكتب اسمك من فضلك";
    if (!/^01[0-25]\d{8}$/.test(form.phone.replace(/\s|-/g, ""))) err.phone = "اكتب رقم موبايل مصري صحيح";
    if (Object.keys(err).length) return setErrors(err);

    const text =
      `السلام عليكم، أنا ${form.name.trim()}\n` +
      `رقمي: ${form.phone}\n` +
      `الخدمة المطلوبة: ${form.service}\n` +
      (form.message.trim() ? `التفاصيل: ${form.message.trim()}` : "");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", service: SERVICES[0], message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section className={styles.wrap} id="contact-form">
      <div className={styles.inner} dir="rtl">
        <div className={styles.info}>
          <span className={styles.eyebrow}>تواصل معنا</span>
          <h2>اطلب خدمتك دلوقتي</h2>
          <p>املا البيانات وهنرد عليك في أسرع وقت ونرتب معاك كل التفاصيل.</p>
          <ul className={styles.points}>
            <li>رد سريع على واتساب</li>
            <li>أسعار مناسبة وواضحة</li>
            <li>جودة وخدمة موثوقة</li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <label className={styles.field}>
            <span>الاسم</span>
            <input name="name" value={form.name} onChange={onChange} placeholder="اسمك بالكامل" autoComplete="name" />
            {errors.name && <em>{errors.name}</em>}
          </label>
          <label className={styles.field}>
            <span>رقم الموبايل</span>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="01XXXXXXXXX" inputMode="tel" dir="ltr" autoComplete="tel" />
            {errors.phone && <em>{errors.phone}</em>}
          </label>
          <label className={styles.field}>
            <span>الخدمة</span>
            <select name="service" value={form.service} onChange={onChange}>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className={styles.field}>
            <span>تفاصيل (اختياري)</span>
            <textarea name="message" rows={4} value={form.message} onChange={onChange} placeholder="اكتب تفاصيل طلبك..." />
          </label>
          <button type="submit" className={styles.btn}>إرسال عبر واتساب</button>
          {sent && <p className={styles.ok}>تم فتح واتساب، أكمل الإرسال من هناك ✔</p>}
        </form>
      </div>
    </section>
  );
}
