"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import AboutChild from "@/components/AboutChild";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import Testimonials from "@/components/Testimonials";
import Abouty from "@/components/Image";
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

const AboutPage = () => {
  const [stories, setStories] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
          title,
          aboutUs,
          aboutus,
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
    <>
      <PageIntro eyebrow="About us" title={stories.title}>
        <p>{stories.aboutUs}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>{stories.aboutus}</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="400+" label="Students" />
          <StatListItem value="50+" label="Staffs" />
          <StatListItem value="1000+" label="Satisfied Parents" />
        </StatList>
      </Container>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Image", logo: imageUrl }}
      >
        Quality Education, Our Commitment
      </Testimonials>
      <ContactSection />
    </>
  );
};

export default AboutPage;
