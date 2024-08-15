import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const App = () => {
  return (
    <div className="flex flex-row mt-6 md:mt-0 ml-8">
      <div className="center-div1 mt-20">
        <h1 className="font-bold text-5xl md:w-full">
          DOWNLOAD APP & <br />
          GET THE VOUCHER!
        </h1>
        <p className="mt-8 text-gray-500">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>

        <div className="flex mt-8">
          <button title="Apple">
            <Image src="/apple.png" alt="apple" width={100} height={100} />
          </button>

          <button title="Android" className="ml-5">
            <Image src="/android.png" alt="apple" width={100} height={100} />
          </button>
        </div>
      </div>

      <div className="center-div2 hidden lg:block ml-20">
        <img src="/app.png" alt="app" width="300" height="300" />
      </div>
    </div>
  );
};

export default App;
