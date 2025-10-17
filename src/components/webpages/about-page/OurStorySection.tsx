import Image from "next/image";
import React from "react";

export default function OurStorySection() {
  const stats = [
    {
      id: 1,
      title: " Assessments",
      value: "24000+",
      image: "/about/stats/stats1.png",
    },
    {
      id: 2,
      title: "Active Candidates",
      value: "4000+",
      image: "/about/stats/stats2.png",
    },
    {
      id: 3,
      title: "Countries Served",
      value: "60+",
      image: "/about/stats/stats3.png",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url('/about/storyBg.png')`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
      className="mt-12 "
    >
      {/* story part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 container mx-auto px-4 md:px-4 justify-center items-center ">
        {/* left side story */}
        <div className="mb-8">
          <h1 className="text-[40px] font-semibold mb-5">
            Why
            <span className="text-[#2FB236] "> Ready Verified</span> exists
          </h1>
          <p className="text-[#858585] text-[18px]">
            Ready Verified started with a simple belief: people thrive where
            their character fits the culture. After years of watching great
            people bounce from the wrong roles and good teams struggle to hire
            Dennis built Ready Verified to connect the right people to the right
            places, faster.
            <br />
            <br /> We spotlight behaviors (reliability, coachability,
            initiative) and map them to real team needs. Ticker counts: Total
            Products Total Active Users Total Certificates Earned (auto)
            Mission: Connect character to culture so hires thrive and teams
            grow. Vision/Tagline: Hire for character. Place for fit.
          </p>
        </div>
        {/* right side img */}
        <div className="flex justify-center  h-full w-full">
          <Image
            src={"/about/banner_about.png"}
            alt="Our Story"
            width={700}
            height={640}
            style={{
              height: "auto",
              width: "auto",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      {/* stats part */}
      <div className=" max-w-[1200px] mx-auto mt-12 pb-10 lg:pb-30 grid grid-cols-1 md:grid-cols-3">
        {stats?.map((stat) => (
          <div key={stat.id} className=" lg:h-[72px]">
            <div className="flex flex-col justify-center items-center lg:h-[72px]">
              <Image
                src={stat.image}
                alt={stat.title}
                width={100}
                height={72}
                className="h-full  object-cover "
              />
              <h1 className="text-3xl lg:text-5xl font-bold">{stat.value}</h1>
              <p className="text-[#ABABAB]  ">{stat.title} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
