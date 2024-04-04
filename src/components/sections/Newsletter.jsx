import React from "react";

export default function Newsletter() {
  return (
    <div  className="px-4 sm:px-6 lg:px-8">
    
    <div className="flex items-center justify-center gap-5 flex-wrap p-2  py-8 my-10 border  relative overflow-hidden shadow-xl">
      <div className="text-center">
        <p className="text-xl md:text-3xl font-bold">
          Subscribe to our monthly newsletter
        </p>
      </div>
      <div className="flex shadow-xl p-2  rounded-full gap-x-2  bg-white">
        <input
          type="text"
          placeholder="Your email address..."
          className="text-black pl-5 outline-none"
        />
        <button className="bg-indigo-500 rounded-full p-2 px-4 uppercase text-white text-xs md:text-sm">
          Subscribe
        </button>
      </div>
      <img src="/subscribe/subscribe.png" alt="" className=" absolute -z-10 " />
    </div>
    </div>
  );
}
