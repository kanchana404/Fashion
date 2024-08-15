import { COMAPNY, LEGAL, QUICK } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer2 = () => {
  return (
    <div className="footer2 pt-16 flex flex-col lg:flex-row items-center lg:items-start pb-16 bg-gray-900">
      <div className="lg:ml-8 lg:mr-8 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-3xl font-extrabold text-white">FASHION</h1>
        <p className="text-sm text-gray-500 mt-3">
          Complete your style with awesome <br /> clothes from us.
        </p>
        <div className="flex mt-4 justify-center lg:justify-start space-x-4">
          <Image src="/s1.png" alt="s1" width={30} height={30} />
          <Image src="/s2.png" alt="s1" width={30} height={30} />
          <Image src="/s3.png" alt="s1" width={30} height={30} />
          <Image src="/s4.png" alt="s1" width={30} height={30} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:ml-96 space-y-8 lg:space-y-0 lg:space-x-36">
        <div className="text-center lg:text-left">
          <p className="text-sm text-white">Company</p>
          <ul className="text-sm text-gray-500 mt-5 space-y-3">
            {COMAPNY.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-sm text-white">Quick Link</p>
          <ul className="text-sm text-gray-500 mt-5 space-y-3">
            {QUICK.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-sm text-white">Legal</p>
          <ul className="text-sm text-gray-500 mt-5 space-y-3">
            {LEGAL.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
