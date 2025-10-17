import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { categoryTags, secondRowTags } from "@/data/bannerTags";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#F2F6FF] text-center min-h-[calc(100vh-88px)] flex flex-col justify-center items-center py-12 lg:py-0 md:mb-12">
      <div className="px-2 flex justify-center ">
        <div>
          <h1 className="text-[44px] md:text-5xl lg:text-[64px] font-bold text-[#333] leading-[1.2] mb-4 max-w-[900px] mx-auto">
            Hire for character, <br className="hidden lg:flex" />
            <span className="text-[#52c41a]">Place</span> for fit.
          </h1>

          <p className="text-[16px] text-[#666] mb-12 leading-[1.6] max-w-[900px] mx-auto">
            Match proven behaviors to how your team actually works — faster
            shortlists, fewer mis hires.
          </p>

          {/* First row of tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            {categoryTags?.map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 text-[14px] rounded-lg border border-[#E5EDFF] bg-[#E5EDFF] text-[#1A5FA4] cursor-pointer transition-all font-normal hover:bg-[#dce8ff]"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Second row of tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {secondRowTags?.map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 text-[14px] rounded-lg border border-[#E5EDFF] bg-[#E5EDFF] text-[#1A5FA4] cursor-pointer transition-all hover:bg-[#dce8ff]"
              >
                {tag}
              </div>
            ))}
          </div>
          {/* btns */}
          <div className="my-6 lg:mt-12 flex flex-col md:flex-row lg:items-center lg:justify-center gap-4 w-full">
            <PrimaryButton
              text="Start your 90 day employer trial"
              href="/pricing"
              arrow={true}
              className={"w-11/12 md:w-auto"}
            />
            <SecondaryButton
              text="Browse products"
              className={"w-11/12 md:w-auto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
