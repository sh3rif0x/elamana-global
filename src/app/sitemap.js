import { NAV } from "../data/navigation";
import { SITE_URL } from "../lib/constants";

export default function sitemap() {
  return NAV.map((i) => ({
    url: SITE_URL + encodeURI(i.href === "/" ? "" : i.href),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: i.href === "/" ? 1 : 0.8,
  }));
}
