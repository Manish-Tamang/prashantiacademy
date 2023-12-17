"use client";
// AllPosts.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createClient } from "@sanity/client";
import OnePost from "@/components/OnePost"; // Import your OnePost component here
import "@/styles/style.css";

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
      <div className="dot-spinner">
        {/* Add your loading animation here */}
      </div>
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
          <h2 className="text-5xl text-gray-700 flex justify-center">
            News & events
          </h2>
          <h3 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to News & Events of Prashanti Academy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.length > 0 ? (
              allPostsData.map((post, index) => (
                // Link to individual post using react-router-dom Link
                <Link
                  to={`/${post.slug.current}`} // Use 'to' attribute for react-router-dom Link
                  key={post.slug.current}
                >
                  <span
                    className="bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      className="w-full h-full rounded-r object-cover absolute"
                      src={post.mainImage?.asset?.url || ""}
                      alt={post.title}
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4"></span>
                    <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-gray-700 text-red-100 bg-opacity rounded">
                      {post.title}
                    </h2>
                  </span>
                </Link>
              ))
            ) : (
              <p>No posts found.</p> // Display a message if there are no posts
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AllPosts;
