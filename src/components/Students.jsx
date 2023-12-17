"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { TagList, TagListItem } from "./TagList";
import Blockquote from "./Blockquote";
import Button from "./Button";

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

const Section = () => {
  const [stories, setStories] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        ` *[_type == "student"]{
          title,
          description,
          thoughts,
          images{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => {
        setStories(data[0]);
        setImageUrl(urlFor(data[0].images).url());
      })
      .catch(console.error);
  }, [slug]);

  if (!stories) return <div>Loading..</div>;

  return (
    <Container className="group/section [counter-increment:section]">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-evenly lg:gap-8 lg:group-even/section:justify-center xl:gap-x-20">
        <div className="flex justify-center w-full max-w-[45rem]">
          <FadeIn>
            <StylizedImage
              src={imageUrl}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="object-cover w-full h-full"
            />
          </FadeIn>
        </div>
        <div className="lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            ></div>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {stories.title}
            </h2>
            <div className="mt-6 text-base text-neutral-600">
              <p>{stories.description}</p>
            </div>
            <div className="mt-6 text-base text-neutral-600">
              <p>
                <a href="/Students">
                  <Button style={{ marginTop: "16px" }}>View Gallery</Button>
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
};

export default Section;
