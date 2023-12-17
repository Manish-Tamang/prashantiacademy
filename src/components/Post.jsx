"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Section from "./Section";
import Images from "./Images";
import { TagList, TagListItem } from "./TagList";
import Manish from "@/images/Dev/untitled.png";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import "@/styles/style.css";
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
const Posts = () => {
    const [stories, setStories] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        client
            .fetch(
                `*[_type == "blogPost" && slug.current == $slug] | order(date desc) {
                    _id,
                    title,
                    content,
                    mainImage {
                        asset->{
                            _id,
                            url,
                            alt,
                            caption
                        }
                    },
                    date
                }`,
                { slug }
            )
            .then((data) => {
                if (data && data.length > 0) {
                    setStories(data[0]);
                    setImageUrl(urlFor(data[0].mainImage).url());
                }
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
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={stories.mainImage.alt}
                    style={{ borderRadius: '4px' }}
                    className="mt-34 sm:mt-32 lg:mt-40"
                />
            )}
            <div className="mt-8"></div> {/* Add some space after the image */}
             <div className="space-y-6 text-base text-neutral-600">
                {stories.content && (
                    <p>
                        {stories.content.map((block, index) => {
                            if (block._type === 'image') {
                                return (
                                    <Image
                                        key={index}
                                        src={urlFor(block).url()}
                                        alt={block.alt}
                                        style={{ maxWidth: '100%' }}
                                    />
                                );
                            }
                            if (block._type === 'paragraph') {
                                return <p key={index}>{block.children.map((span, i) => span.text).join('')}</p>;
                            }
                            return null;
                        })}
                    </p>
                )}
            </div>
        </>
    );
};

export default Posts;
