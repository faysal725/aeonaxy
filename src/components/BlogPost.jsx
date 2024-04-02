import React from "react";
import AvatarDetails from "./AvatarDetails";

const BlogPost = ({
  imgSrc = "#",
  type = "Latest Post",
  title = "A Practical Guide to Apple Search Ads",
  description = "Why it's a channel worth exploring to grow your app",
  avatarImg="/avatar/Ellipse.png",
  name="Thomas Petit",
  created_at="June 07, 2022"
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="rounded-xl overflow-hidden">
        <img src={imgSrc} alt="" className="object-cover" />
      </section>
      <div className="flex flex-col">
        <div className="text-teal-400 font-semibold mb-2 border-2 border-black w-fit p-2 px-4 border-teal-400 rounded-full text-sm">
          {type}
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className=" mt-auto ">
          <AvatarDetails
            imgSrc={avatarImg}
            name={name}
            created_at={created_at}
          />
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
