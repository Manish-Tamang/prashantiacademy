"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import FadeIn from "./FadeIn";
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

const StudentIMG = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'studentGallery'] {
          "images": gallery[].asset->url
        }`
      )
      .then((data) => {
        setImages(data[0]?.images || []); // Use optional chaining to handle potential empty data
      })
      .catch(console.error);

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [slug]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);

    // Disable scrolling when the preview modal is open
    document.body.style.overflow = "hidden";
  };

  const handleClosePreview = () => {
    setSelectedImage(null);

    // Enable scrolling when the preview modal is closed
    document.body.style.overflow = "auto";
  };

  if (images.length === 0) return <div>Loading..</div>;

  return (
    <div>
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-[''] after:content-[''] sm:before:absolute sm:before:right-full"></p>
            </blockquote>
            <figcaption className="mt-10">
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="mb-4"
                  onClick={() => handleImageClick(imageUrl)}
                >
                  <img
                    src={urlFor(imageUrl).url()}
                    style={{ borderRadius: "6px", cursor: "pointer" }}
                    alt={`Image ${index + 1}`}
                    unoptimized
                  />
                </div>
              ))}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-3xl w-full p-4 bg-white rounded-lg relative z-50">
            <img
              src={urlFor(selectedImage).url()}
              alt="Preview"
              style={{
                borderRadius: "6px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={handleClosePreview}
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/close-window.png"
                alt="close-window"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentIMG;
