import Image from "next/image";
import React from "react";

const FavauritBar = () => {
  return (
    <div className="mt-10 mx-4 md:mx-8">
      <Image src="/fav.png" alt="fav" width={300} height={300} className="mx-auto"/>

      <div className="flex flex-col md:flex-row mt-5 p-4 md:p-8 space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex-1">
          <Image src="/f1.png" alt="f1" width={600} height={600} className="w-full h-auto" />
          <p className="text-xl font-semibold mt-2">Trending on Instagram</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">Explore Now!</p>
            <div className="flex-grow"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/f2.png" alt="f2" width={600} height={600} className="w-full h-auto" />
          <p className="text-xl font-semibold mt-2">All Under $40</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">Explore Now!</p>
            <div className="flex-grow"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-auto text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavauritBar;
