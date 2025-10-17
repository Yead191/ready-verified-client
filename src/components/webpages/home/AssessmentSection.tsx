"use client";

import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { Typography } from "antd";
import Image from "next/image";

const { Paragraph } = Typography;

export default function AssessmentSection() {
  const statistics = [
    { value: "234+", label: "Resumes Built" },
    { value: "4031+", label: "Cover Letter Built" },
    { value: "995+", label: "Website Built" },
    { value: "234", label: "Assessment completed via our website" },
  ];

  return (
    <div className="container mx-auto my-12 p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-center">
        {/* Left Content */}

        <div className="w-full max-w-[600px]">
          <h1 className="text-4xl md:text-[40px] font-bold text-left mb-4 leading-10 md:leading-14">
            See which product fits you and find the right{" "}
            <span style={{ color: "#52c41a" }}>best </span>for you.
          </h1>

          <Paragraph
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "40px",
              width: "100%",
              // maxWidth: "600px",
            }}
          >
            Start with a Character Profile, then choose resumes, cover letters,
            guides, and badges that showcase who you are.
          </Paragraph>

          {/* Statistics Grid */}
          <div
            className="grid grid-cols-2 gap-5 "
            style={{ marginBottom: "40px" }}
          >
            {statistics.map((stat, index) => (
              <div className="" key={index}>
                <div>
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#999",
                      lineHeight: "1.4",
                      width: "100%",
                      maxWidth: 220,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row gap-4">
            <PrimaryButton
              text="Explore Assessments"
              href="/assessments"
              arrow={true}
            />
            <SecondaryButton
              text="Build your Character Profile"
              href="/auth/role-selection"
            />
          </div>
        </div>

        {/* Right Content - Placeholder for your image */}

        <div
          style={{
            height: "auto",
            backgroundColor: "#e8f4fd",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#666",
              backgroundImage: "url('/home-images/assesmentBg.jpg')",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                padding: 30,
              }}
            >
              <Image
                src={"/home-images/assesmentImg.png"}
                alt="Assessment image"
                height={733}
                width={837}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
