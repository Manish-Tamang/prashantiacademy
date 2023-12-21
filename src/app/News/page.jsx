"use client";
// AllPosts.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createClient } from "@sanity/client";
import OnePost from "@/components/OnePost"; // Import your OnePost component here

const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});

const AllPosts = () => {
  const [allPostsData, setAllPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{
          title,
          slug,
          mainImage{
              asset->{
                  _id,
                  url
              }
          }
      }`
      )
      .then((data) => {
        setAllPostsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Route to the individual post */}
        <Route element={<OnePost />} path="/:slug" exact />
      </Routes>
      <div className="bg-black-100 min-h-screen p-12">
  <div className="container mx-auto">
    <h2 className="text-5xl text-gray-700 text-center mb-6">News & Events</h2>
    <h3 className="text-lg text-gray-600 text-center mb-12">
      Welcome to News & Events of Prashanti Academy
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allPostsData.length > 0 ? (
        allPostsData.map((post, index) => (
          <Link to={`/${post.slug.current}`} key={post.slug.current}>
            <div className="relative bg-white rounded shadow border-l-8 border-green-400 overflow-hidden">
              <img
                className="w-full h-48 md:h-64 object-cover"
                src={post.mainImage?.asset?.url || ""}
                alt={post.title}
              />
              <div className="absolute inset-0 bg-gray-1000 bg-opacity-0  opacity-1000  flex flex-col justify-end p-4">
                <h2 className="text-gray-100 text-lg font-bold">{post.title}</h2>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-white text-center">No posts found.</p>
      )}
    </div>
  </div>
</div>

    </Router>
  );
};

export default AllPosts;
