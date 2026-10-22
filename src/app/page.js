import ServicesList from "../components/sections/ServicesList";
import AboutSection from "../components/sections/AboutSection";
import HomeShowcase from "../components/sections/HomeShowcase";
import ContactForm from "../components/sections/ContactForm";
import HomeGallery from "../components/sections/HomeGallery";
import Banner from "../components/sections/Banner";
import Hero from "../components/sections/Hero";
import ServicesGrid from "../components/sections/ServicesGrid";
import HomeProducts from "../components/sections/HomeProducts";
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
      <Banner />
      <HomeProducts />
      <WhyChooseUs />
      <HomeGallery />
      <ContactForm />
    <ContactCTA />
</>
  );
}
