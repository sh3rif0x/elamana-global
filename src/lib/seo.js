import { COMPANY } from "../data/company";
import { SITE_URL } from "./constants";

export function buildMetadata({ title, description, path = "/" }) {
  const url = SITE_URL + encodeURI(path);
  return {
    title,
    description: description || COMPANY.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description: description || COMPANY.description,
      url,
      siteName: COMPANY.name,
      locale: "ar_LY",
      type: "website",
      images: [{ url: "/images/hero/hero-bg.webp" }],
    },
  };
}
