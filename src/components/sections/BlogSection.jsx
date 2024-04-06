import React, { useState } from "react";
import Filter from "../Filter";
import AvatarDetails from "../AvatarDetails";
import Card from "../Card";
import BlogPost from "../BlogPost";
import Newsletter from "./Newsletter";
import Pagination from "../Pagination";
import SpecialCard from "../SpecialCard";

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
      imgSrc: "/posts/subclub.png",
      type: "Special",
      title: "The Sub Club Podcast",
      description:
        "Interviews and deep dives with the experts behind the biggest apps in the world.",
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
    <main className="max-w-7xl mx-auto  py-16 w-full ">
      <Filter filters={filters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {/* {blogs1.map((blog, index) => (
          <Card data={blog} />
        ))} */}
        {blogs1.map((blog, index) =>
          blog.type === "Special" ? (
            <SpecialCard data={blog} />
          ) : (
            <Card data={blog} />
          )
        )}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {blogs2.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {blogs2.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <Pagination />
      </div>
    </main>
  );
}
