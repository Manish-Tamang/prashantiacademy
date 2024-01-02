import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
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

  if (!postData) return <></>;

  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="max-w-3xl mx-auto">
        {/* <div className=" min-h-screen p-12"> */}
        {/* <div className="container shadow-lg mx-auto rounded-lg"> */}
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-70 rounded p-1 blur-effect">
              <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug text-gray-900">
                {postData.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is DinoGuy"
                />
                <h4 className="text-bold flex items-center pl-2 text-xl">
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
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert text-gray-600">
            <BlockContent
              blocks={postData.body}
              projectId="uewhm6v9"
              dataset="production"
            />
          </div>
          <div className="container m-9-auto max-w-auto flex justify-center p-3">
            <Button onClick={goBack}>All Posts</Button>
          </div>
        </article>
      </FadeIn>
    </Container>
  );
};

export default OnePost;
