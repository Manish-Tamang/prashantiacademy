import React from "react";
import PageIntro from "@/components/PageIntro";
import Dev from "@/components/dev";

const Developer = () => {
  return (
    <>
{/*       <img src={Manish} alt="Manish Tamang" /> */}
      <PageIntro eyebrow="Developer" title="Manish Tamang">
        <p>
          Manish Tamang is a student of <strong>Prashanti Academy</strong>{" "}
          studying in grade-10 (2080 B.S/2023).
          [Now SEE Passed (last update: 2081/01/13)]
        </p>
        <Dev />
      </PageIntro>
    </>
  );
};

export default Developer;
