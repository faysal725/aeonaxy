import React from "react";

export default function AvatarDetails({
  imgSrc = "/avatar/Ellipse.png",
  name = "Thomas Petit",
  created_at = "June 07, 2022",
}) {
  return (
    <div className="flex items-center ">
      <img
        src={imgSrc}
        alt="Author Avatar"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm text-black">{created_at}</div>
      </div>
    </div>
  );
}
