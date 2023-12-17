"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@/styles/style.css";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await client.fetch(`
          *[_type == 'banner'] {
            "images": gallery[].asset->url
          }[0]
        `);
        setImages(result.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <input
        type="radio"
        name="slide"
        id="one"
        checked={currentImageIndex === 0}
        readOnly
      />
      <input
        type="radio"
        name="slide"
        id="two"
        checked={currentImageIndex === 1}
        readOnly
      />
      <input
        type="radio"
        name="slide"
        id="three"
        checked={currentImageIndex === 2}
        readOnly
      />
       <input
        type="radio"
        name="slide"
        id="four"
        checked={currentImageIndex === 3}
        readOnly
      />
         <input
        type="radio"
        name="slide"
        id="five"
        checked={currentImageIndex === 4}
        readOnly
      />
      {/* Add more input elements for additional images as needed */}

      {images.map((imageUrl, index) => (
        <div key={index} className={`img img-${index + 1}`}>
          <img
            src={urlFor(imageUrl).url()}
            alt=""
            style={{ borderRadius: "12px" }}
            className={currentImageIndex === index ? "active" : ""}
            width={500}
            height={300}
          />
        </div>
      ))}

      <div className="sliders">
        {images.map((_, index) => (
          <label
            key={index}
            htmlFor={`slide-${index}`}
            className={`slide slide-${index + 1}`}
          ></label>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
