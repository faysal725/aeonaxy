import React from "react";

const BlogPost = ({ imgSrc = "#" }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="rounded-xl overflow-hidden">
        <img src={imgSrc} alt="" className="object-cover" />
      </section>
      <div className="flex flex-col">
        <div className="text-teal-400 font-semibold mb-2 border-2 border-black w-fit p-2 px-4 border-teal-400 rounded-full text-sm">
          Latest Post
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold mb-2">
          A Practical Guide to Apple Search Ads
        </h2>
        <p className="text-gray-700 mb-4">
          Why it's a channel worth exploring to grow your app
        </p>
        <div className="flex items-center mt-auto ">
          <img
            src="/avatar/Ellipse.png"
            alt="Author Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <div className="text-lg font-semibold">Thomas Petit</div>
            <div className="text-sm text-black">June 07, 2022</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
