"use client";

import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopeStores from "./shop-stores";
import Brands from "./brands";
import Services from "./snippets/services";
import FAQ from "./faq";
import { useRef } from "react";

export default function Home() {

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToShopStores = () => {
    shopStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar 
        scrollToWebsiteDesign={scrollToWebsiteDesign} 
        scrollToGraphicDesign={scrollToGraphicDesign} 
        scrollToShopStores={scrollToShopStores} 
        scrollToBrands={scrollToBrands}

      />
      <Spotlight className="hidden md:flex md:-top-80 left-40" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        {/* Crafting Success from UI/UX <br /> Website and Brand Identity */}
        {/* Design Develop and <br /> Make your Business */}
        Craft, Amplify, and <br /> Elevate Your Business
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-xl text-center mx-auto px-4">
          Our agency website showcases our expertise in UI/UX design, complete website development, and brand identity. Explore our portfolio to witness our full website designs come to life!
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopStoresRef}>
          <ShopeStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <Services />
        <FAQ />
      </div>
    </div>
  );
}
