
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import ScrollingLogos from "@/components/ScrollingLogos";
import { Metadata } from "next";

// from Haroon






export const metadata: Metadata = {
  title: "Vertex Stack",
  description: "Vertex Stack Software Solutions",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ScrollingLogos />
      <Features />
      <Brands />
      <Video />
      
      
      <AboutSectionTwo />
      <Testimonials />
    
    
      <Blog />
      <Contact />
    </>
  );
}
