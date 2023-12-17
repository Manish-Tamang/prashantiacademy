"use client";
import React from "react";
import PageIntro from "@/components/PageIntro";
import StudentIMG from "@/components/Student IMG";


const Students = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="Prashantian Students">
        <p>
          students are the future leaders, innovators, and problem solvers of
          society. Their education, well-being, and personal growth should be
          priorities, and they should be supported in their journey to becoming
          well-rounded, informed, and responsible individuals.
        </p>
      </PageIntro>
      <div className="image-container">
        <StudentIMG></StudentIMG>
      </div>
    </>
  );
};

export default Students;
