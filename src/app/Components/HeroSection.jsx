"use client";

import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const downloadTxtFile = () => {
    window.location.href =
      "http://localhost:3000/public/Documents/00_WassimElHaddaoui_CV.pdf";
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-40">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white  mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hello, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Wassim",
                1500, // wait 1.5s before replacing
                "a web developer",
                1500,
                "a tech hobbiest",
                1500,
                "somewhat funny",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
            ;
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Welcome to my page I upload a wide range of projects, some fun, some
            serious. I am a what you would call a generalist, jack of all
            trades.
          </p>
          <div>
            <button className="px-6 py-3 mb-5 w-full sm:w-fit rounded-full mr-4 bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <a href="#contact">Hire Me</a>
            </button>
            <button className="px-1 py-1 ml-10 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800">
              <a
                className="block h-full w-full rounded-full bg-gray-800 hover:bg-slate-700 px-5 py-2"
                href="http://localhost:3000/Documents/00_WassimElHaddaoui_CV.pdf"
                download="00_WassimElHaddaoui_CV.pdf"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {" "}
            <Image
              className="absolute animate-hover transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 md:top-10 md:left-10"
              src="/images/ZombieMan.png"
              alt="hero iamge"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;