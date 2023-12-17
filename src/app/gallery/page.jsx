import ContactSection from "@/components/ContactSection";
import First from "@/components/first";
import Second from "@/components/Second";
import Third from "@/components/third";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="प्रशान्ति एकेडेमी">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our Clients. The primary way we do that is by re-using
          the same methods of teaching, we’ve been developing for the past
          decade.
        </p>
      </PageIntro>
      <div className="mt-12 sm:mt-16 lg:mt-20 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* First gallery photo where Principal Talu will shine */}
        <First />
        {/* Second gallery where teachers' images are shown */}
        <Second />
        <Third />
      </div>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
