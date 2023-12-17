"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Principal from "@/components/Principal";

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

const First = () => {
  const [stories, setStories] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "principal"]{
          title,
          description,
          "imageUrl": images[0].asset->url
        }`
      )
      .then((data) => {
        setStories(data[0]);
        setImageUrl(urlFor(data[0].imageUrl).url());
      })
      .catch(console.error);
  }, [slug]);

  if (!stories) return <div>Loading..</div>;
  return (
    <Principal>
    </Principal>
  );
};

export default First;
