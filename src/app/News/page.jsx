"use client";
// AllPosts.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createClient } from "@sanity/client";
import OnePost from "@/components/OnePost"; // Import your OnePost component here
import Button from "@/components/Button";
import { format } from 'date-fns';


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
          body,
          publishedAt,
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
    return <div>Loading</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Route to the individual post */}
        <Route element={<OnePost />} path="/:slug" exact />
      </Routes>
      <div className="bg-black-100 min-h-screen p-12">
        <div className="container mx-auto">
          <h1
            style={{ marginTop: "30px" }}
            className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl"
          >
            News & Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {allPostsData.length > 0 ? (
              allPostsData.map((post) => (
                <Link to={`/${post.slug.current}`} key={post.slug.current}>
                  <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                      <img
                        className="w-full h-48 md:h-64 object-cover"
                        src={post.mainImage?.asset?.url || ""}
                        alt={post.title}
                      />
                    </div>
                    <div className="p-6">
                    <h2>{format(new Date(post.publishedAt), "dd MMMM yyyy")}</h2> 

                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {post.title}
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {`${post.body[0].children[0].text.substring(0,600)}...`}
                      </p>
                      <div className="p-1 pt-2">
                        <Button>Read more</Button>
                      </div>
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
