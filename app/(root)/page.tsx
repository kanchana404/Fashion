import App from "@/components/App";
import FavauritBar from "@/components/FavauritBar";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Yellosection from "@/components/Yellosection";
import { P_DETAILS } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
     <Navbar />
      <div className="p-6">
        <Hero />
      
      </div>

      <div className="flex flex-wrap items-center brand_background">
        <img
          src="/hm.png"
          alt="hm"
          className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-24 lg:h-12"
        />
        <img
          src="/obey.png"
          alt="obey"
          className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-24 lg:h-12"
        />
        <img
          src="/shopify.png"
          alt="shopify"
          className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-24 lg:h-12"
        />
        <img
          src="/levis.png"
          alt="levis"
          className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-24 lg:h-12"
        />
        <img
          src="/amazon.png"
          alt="amazon"
          className="w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 lg:w-32 lg:h-24 -mt-3"
        />
      </div>

      <Image
        className="mt-10 ml-10"
        src="/arival.png"
        alt="arival"
        width={300}
        height={300}
      />

<div className="product-container">
      {P_DETAILS.map((detail, index) => (
        <div className="product-card" key={index}>
          <img src={detail.path} alt={detail.title} className="product-image" />
          <div className="product-info">
            <h2>{detail.title}</h2>
            <p>Explore Now!</p>
          </div>
          <div className="arrow">→</div>
        </div>
      ))}
    </div>


<Yellosection />
<FavauritBar />
<App />
<Footer1 />
<Footer2 />
    </>
  );
};

export default page;
