import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero_background p-3 rounded-[30px]">
      <div className="flex flex-col lg:flex-row mt-12 mx-6 lg:mx-36">
        <div className="flex-1">
          <h1 className="text-6xl -ml-2 lg:text-6xl mt-20 font-bold text-black md:w-full">
            LETS <br />
              {/* test */}
            EXPLORE <br />
            <span className="relative inline-block">
              <span className="relative z-10">UNIQUE</span>
              <span className="absolute inset-0 bg-yellow-400 z-0 transform -skew-x-12 -skew-y-2"></span>
            </span>
            <br />
            CLOTHES.
          </h1>

          <p className="mt-8 text-lg lg:text-xl font-semibold">
            Live for Influential and Innovative fashion!
          </p>
          <Button className="mt-5">Shop Now</Button>
        </div>

        <div className="hidden lg:block lg:flex-1 ml-0 lg:ml-48 mt-8 lg:mt-0">
          <Image
            src="/girl.png"
            alt="girl"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
