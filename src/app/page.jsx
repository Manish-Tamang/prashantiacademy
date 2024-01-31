/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ImageSlider from "@/components/Slider";
 import Reviews from "@/components/Reviews"; 
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import "@/styles/style.css";

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

export default function Home() {
  const [stories, setStories] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "home"]{
          title,
          description,
          "testimonial": *[_type == "testimonial"][0]{text},
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

  if (!stories) return <div class="dot-spinner">
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
</div>;

  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl mx-auto">
          {" "}
          {/* Added mx-auto here */}
          <ImageSlider style={{ marginBottom: "50px" }} className="mx-auto" />
          <h1
            style={{ marginTop: "30px" }}
            className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl"
          >
            {stories.title}
          </h1>
          <p className="mt-6 text-xl text-neutral-600">{stories.description}</p>
        </FadeIn>
      </Container>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: imageUrl }}
        style={{ borderRadius: "4px" }}
      >
        Welcome to Prashanti Academy, where we embrace a culture of learning,
        growth, and excellence. We're excited to embark on this educational
        journey together.
      </Testimonials>
  {  /* <Reviews /> */}
      <Services />
      <ContactSection />
    </main>
  );
}
