import HomeGallery from "../components/sections/HomeGallery";
import AboutSection from "../components/sections/AboutSection";
import Hero from "../components/sections/Hero";
import ServicesList from "../components/sections/ServicesList";
import HomeShowcase from "../components/sections/HomeShowcase";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ContactCTA from "../components/sections/ContactCTA";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "الأمانة العالمية المميزة | استيراد مواد التنظيف والزينة والخردوات",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesList />
      <HomeShowcase />
      <WhyChooseUs />
      <HomeGallery />
      <ContactCTA />
    </>
  );
}
