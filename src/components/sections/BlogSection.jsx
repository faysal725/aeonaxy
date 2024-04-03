import React, { useState } from "react";
import Filter from "../Filter";
import AvatarDetails from "../AvatarDetails";
import Card from "../Card";

export default function BlogSection() {
  const filters = ["All articles", "Company", "Engineering", "Growth"];

  const allBlogs = [
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
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full ">
      <Filter filters={filters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {allBlogs.map((blog, index) => (
        <Card data={blog} />
        ))}
      </div>
    </main>
  );
}
