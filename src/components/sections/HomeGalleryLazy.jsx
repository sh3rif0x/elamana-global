"use client";
import dynamic from "next/dynamic";

const HomeGallery = dynamic(() => import("./HomeGallery"), { ssr: false });

export default function HomeGalleryLazy() {
  return <HomeGallery />;
}
