import fs from "fs";
import path from "path";
import ProductsPager from "./ProductsPager";

function getFiles() {
  try {
    const dir = path.join(process.cwd(), "public/images/products");
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isFile() && /\.(webp|png|jpe?g)$/i.test(e.name))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export default function ProductsGrid() {
  return <ProductsPager files={getFiles()} />;
}
