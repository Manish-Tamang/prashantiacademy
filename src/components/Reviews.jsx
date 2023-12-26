/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { createClient } from "@sanity/client";
import { format } from "date-fns";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});

// Function to generate stars based on rating
const generateStars = (rating) => {
  const maxRating = 5;
  const filledStars = Math.round(rating); // Round to the nearest whole star
  const emptyStars = maxRating - filledStars;

  const stars = [];

  // Filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
      </svg>
    );
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg
        key={filledStars + i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-200"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"></path>
      </svg>
    );
  }

  return stars;
};

const Reviews = () => {
  const [stories, setStories] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    client
      .fetch(
        ` *[_type == "review"] {
              name,
              publishedAt,
              title,
              ratings,
              description
            }`
      )
      .then((data) => {
        setStories(data);
      })
      .catch(console.error);

    // Update slidesToShow based on window width
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!stories) return <></>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto">
      <Slider {...sliderSettings}>
        {stories.length > 0 ? (
          stories.map((post) => (
            <div
              key={post._id}
              className="flex flex-col gap-1 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150 mx-auto"
            >
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-between w-full">
                  <p className="text-xs">{post.name}</p>
                  <p className="text-xs">
                    {format(new Date(post.publishedAt), "dd MMMM yyyy")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <h3 className="text-xl font-bold">{post.title}</h3>

                <div className="text-xs">
                  <div className="flex flex-row">
                    {generateStars(post.ratings)}
                  </div>
                </div>
              </div>

              <div className="text-sm">{post.description}</div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No Reviews found.</p>
        )}
      </Slider>
    </div>
  );
};

export default Reviews;
