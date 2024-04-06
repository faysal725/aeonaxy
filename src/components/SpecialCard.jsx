import React from "react";
import AvatarDetails from "./AvatarDetails";

export default function SpecialCard({ data }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-black border border-slate-300">
      <div className="h-72  relative">
        <img src={data.imgSrc} alt="" className="h-full w-full" />
        <img src="/posts/round-border.svg" alt="" className="h-full w-full absolute bottom-0 right-0" />
      </div>
      <div className="p-6 text-white pt-16 h-full flex flex-col ">

        <h2 className="text-3xl font-medium mb-2">{data.title}</h2>
        <p className=" mb-4">{data.description}</p>
        <button className=""> Listen Now</button>
      </div>
    </div>
  );
}
