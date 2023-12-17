/* eslint-disable */
import PageIntro from "@/components/PageIntro";
import React from "react";
import TeacherIMG from "@/components/Teacher IMG";

const Teachers = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Prashantian Teachers">
        <p>
          "Teachers are the guiding stars of our educational journey,
          illuminating the path to knowledge, inspiring us to reach for the
          stars, and nurturing the seeds of curiosity that blossom into lifelong
          learning."
        </p>
      </PageIntro>
      <div className="image-container">
       <TeacherIMG></TeacherIMG>
      </div>
    </>
  );
};

export default Teachers;
