import React, { useState } from "react";
import Filter from "../Filter";
import AvatarDetails from "../AvatarDetails";
import Card from "../Card";
import BlogPost from "../BlogPost";

export default function BlogSection() {
  const filters = ["All articles", "Company", "Engineering", "Growth"];

  const blogs1 = [
    {
      imgSrc: "/posts/post1.jpg",
      type: "Company",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Petit",
      created_at: "June 07, 2022",
    },

    {
      imgSrc: "/posts/post1.jpg",
      type: "Growth",
      title: "App Store Optimization Guide for Subscription Apps",
      description: "Learn how to boost your app's visibility and more",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Kriebernegg",
      created_at: "May 30, 2022",
    },
    {
      imgSrc: "/posts/post1.jpg",
      type: "Engineering",
      title: "Account deletion rules on the App Store",
      description: "Everything you need to know about the new rule",
      avatarImg: "/avatar/Ellipse.png",
      name: "Corey Rabazinski</div>",
      created_at: "May 26, 2022",
    },
    {
      imgSrc: "/posts/post1.jpg",
      type: "Company",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Petit",
      created_at: "June 07, 2022",
    },
    {
      imgSrc: "/posts/post1.jpg",
      type: "Engineering",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Petit",
      created_at: "June 07, 2022",
    },
    {
      imgSrc: "/posts/post1.jpg",
      type: "Engineering",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Petit",
      created_at: "June 07, 2022",
    },
  ];
  const blogs2 = [
    {
      imgSrc: "/posts/post1.jpg",
      type: "Company",
      title: "Meet the New RevenueCat SDK",
      description: "Our biggest release to date!",
      avatarImg: "/avatar/Ellipse.png",
      name: "Andy Boedo",
      created_at: "June 07, 2022",
    },
    {
      imgSrc: "/posts/post2.jpg",
      type: "Engineering",
      title: "Using RevenueCat with Expo's Managed Workflow",
      description: "The getting started guide",
      avatarImg: "/avatar/Ellipse3.png",
      name: "Josh Holtz",
      created_at: "April 18, 2022",
    },
    {
      imgSrc: "/posts/post1.jpg",
      type: "Engineering",
      title: "How we test SDKs at RevesueCat",
      description: "All about testing and updating our iOS SDK",
      avatarImg: "/avatar/Ellipse2.png",
      name: "Andy Boedo",
      created_at: "May 26, 2022",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full ">
      <Filter filters={filters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {blogs1.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>
      <BlogPost
        imgSrc="/blogpost/firebaseExt.jpg"
        type="Engineering"
        title="Introducing our Firebase Extension"
        description="Firebase developers get plug and play in-app purchase infrastructure"
        avatarImg="/avatar/Ellipse.png"
        name="Francie Fernandes"
        created_at="May 11, 2022"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {blogs2.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 flex-wrap p-2 py-8 my-10 border border-black ">
          <div className="text-center">
          <p className="text-xl md:text-3xl font-bold">Subscribe to our monthly newsletter</p>
          </div>
          <div className="flex border border-black p-2  rounded-full gap-x-2  ">
            <input type="text" placeholder="Your email address..." className="text-black pl-5 outline-none"/>
            <button className="bg-indigo-500 rounded-full p-2 px-4 uppercase text-white text-xs md:text-base">Subscribe</button>
          </div>
      </div>
    </main>
  );
}
