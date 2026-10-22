import { COMPANY } from "../data/company";

export const waLink = (text = "") =>
  `https://wa.me/${COMPANY.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const safeDecode = (s) => {
  try { return decodeURIComponent(s); } catch { return s; }
};
