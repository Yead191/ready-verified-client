import React from "react";
import AssessmentSection from "@/components/webpages/home/AssessmentSection";
import Banner from "@/components/webpages/home/Banner";
import CVTemplatesSection from "@/components/webpages/home/template-section/CVTemplatesSection";
import FAQ from "@/components/webpages/home/Faq";
import ResumeSection from "@/components/webpages/home/resume-section/ResumeSection";
import TestimonialSection from "@/components/webpages/home/TestimonialSection";
import HowItWorks from "./HowItWorksSection";
import EmployerHome from "@/components/Employer-school-pages/EmployerHome";
import getProfile from "@/utils/getProfile";
import { myFetch } from "@/utils/myFetch";
import JourneySection from "../about-page/JourneySection";
import SupportStrip from "./SupportStrip";

export default async function HomePage() {
  const user = (await getProfile()) || null;
  const { data: resumes } = await myFetch("/template?type=resume", {
    method: "GET",
    tags: ["resume"],
  });
  const { data: coverLetters } = await myFetch("/template?type=cover-letter", {
    method: "GET",
    tags: ["cover-letter"],
  });
  const { data: faq } = await myFetch("/faq");

  return (
    <>
      {user?.role === "EMPLOYEE" ? (
        <>
          <EmployerHome />
        </>
      ) : (
        <>
          <Banner />
          <AssessmentSection />
          <HowItWorks />
          <CVTemplatesSection resumes={resumes} coverLetters={coverLetters} />
          <ResumeSection />
          <TestimonialSection />
          <JourneySection />
          <FAQ faq={faq} />
          <SupportStrip />
        </>
      )}
    </>
  );
}
