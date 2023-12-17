"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";

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

const Second = () => {
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
    <Section title="Teachers" image={{ src: Teachers, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>Teachers Gallery Collections</p>
        <p>
          <a href="/teachers">
            <strong>Click to view</strong>
          </a>
        </p>
      </div>
      <Blockquote
        author={{ name: "Prashantian", role: "Vision" }}
        className="mt-12"
      >
        Teachers light the path to knowledge, illuminating minds and shaping the
        future.
      </Blockquote>
    </Section>
  );
};

export default Second;
