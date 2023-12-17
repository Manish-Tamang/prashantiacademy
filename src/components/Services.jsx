/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import List, { ListItem } from "./List";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

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

const Services = () => {
  const [stories, setStories] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        ` *[_type == "service"]{
          title,
          description,
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
    <>
      <SectionIntro
        eyebrow="Services"
        title={stories.title}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{stories.description}</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageUrl}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Education Programs">
              We offer a variety of educational programs for students, ranging
              from pre-school to high school. Our curriculum is designed to
              provide a well-rounded education and to meet the diverse needs of
              our students.
            </ListItem>
            <ListItem title="Qualified Teachers">
              Our school employs highly qualified and experienced teachers who
              are dedicated to providing quality education and fostering a
              positive learning environment.
            </ListItem>
            <ListItem title="Extracurricular Activities">
              : We offer a wide range of extracurricular activities, including
              sports, clubs, and arts programs, to encourage students to explore
              their interests and develop important life skills beyond
              academics.
            </ListItem>
            <ListItem title="Counseling Services:">
              We have counseling services available to support the social and
              emotional well-being of our students. Our counselors provide
              guidance, support, and resources to address students' personal and
              academic challenges.
            </ListItem>
            <ListItem title="Library and Learning Resources">
              Our school maintains a well-equipped library and provides access
              to digital resources, helping students with research, studying,
              and reading.
            </ListItem>
            <ListItem title="Technology Integration">
              We incorporate technology into our teaching methods and offer
              computer labs to enhance students' digital literacy and skills.
            </ListItem>
            <ListItem title="Transportation">
              Our school may provide transportation services to ensure students'
              safe and reliable commute to and from school.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
