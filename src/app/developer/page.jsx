import React from "react";
import PageIntro from "@/components/PageIntro";
import Dev from "@/components/dev";
import Testimonials from "@/components/NotFound";
import Container from "@/components/Container";
import Manish from "../images/Dev/Untitled.png";

const Developer = () => {
  return (
    <>
 <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
       <Testimonials
      className="mt-24 sm:mt-32 lg:mt-40"
      client={{
        name: "Image",
        logo: Manish
      }}
      style={{ borderRadius: "4px" }}
    >
 I think you're lost
      </Testimonials>
      <PageIntro eyebrow="Developer" title="मनिष तामाङ">
        <p>
          Manish Tamang is a student of <strong>Prashanti Academy</strong>{" "}
          studying in grade-10 (2080 B.S/2023).
        </p>
        <Dev />
      </PageIntro>
      </Container>
    </>
  );
};

export default Developer;
