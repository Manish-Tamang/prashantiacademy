import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import PageIntro from "@/components/PageIntro";
import "@/styles/style.css";
import Button from "./Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const OnePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!postData)
    return (
      <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
    );

  return (
    <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl mx-auto">
    {/* <div className=" min-h-screen p-12"> */}
      {/* <div className="container shadow-lg mx-auto rounded-lg"> */}
      <div className="relative">
        <div className="absolute h-full w-full flex items-center justify-center p-8">
          <div className="bg-white bg-opacity-60 rounded p-1">
            <PageIntro eyebrow="" title={postData.title}></PageIntro>
            <div className="flex justify-center text-gray-800">
              <img
                src={urlFor(postData.authorImage).url()}
                className="w-10 h-10 rounded-full"
                alt="Author is DinoGuy"
              />
              <h4 className="text-bold flex items-center pl-2 text-2xl">
                {postData.name}
              </h4>
            </div>
          </div>
        </div>
        <img
          className="w-full object-cover rounded-t"
          src={urlFor(postData.mainImage).url()}
          alt=""
          style={{ height: "400px" }}
        />
      </div>
      <div className="px-16 lg:px-48 text-gray-900 py-12 lg:py-20 prose lg:prose-xl max-w-full">
    <div className="mb-8">
      <BlockContent
        blocks={postData.body}
        projectId="uewhm6v9"
        dataset="production"
      />
    </div>
      <div className="container m-9-auto max-w-auto flex justify-center p-3">
        <Button onClick={goBack}>All Posts</Button>
      </div>
    </div>
    </FadeIn>
        </Container>
  );
};

export default OnePost;
