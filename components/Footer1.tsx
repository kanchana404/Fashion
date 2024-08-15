import React from "react";

const Footer1 = () => {
  return (
    <div className="mt-4 footer1 pt-20 flex flex-col items-center justify-center pb-20">
      <h1 className="text-4xl text-white font-extrabold text-center mt-8">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h1>
      <p className="text-sm text-white mt-3 text-center">
        Type your email down below and be young wild generation
      </p>

      <div className="mt-5 bg-white flex items-center overflow-hidden rounded-full w-full max-w-md mx-4">
        <input
          type="email"
          placeholder="Add your email here"
          className="p-3 flex-grow text-gray-500 outline-none"
        />
        <button className="bg-black text-white px-6 py-3">SEND</button>
      </div>
    </div>
  );
};

export default Footer1;
