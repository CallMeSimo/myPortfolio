"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TypeAnimation } from "react-type-animation";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Javascript</li>
        <li>React</li>
        <li>SEO</li>
        <li>Network</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Gymnasieingenjör</li>
        <li>Nerd</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Test Technician</li>
        <li>Developer</li>
        <li>Wordpress-devloper</li>
        <li>Marketing</li>
        <li>Team lead</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransistion] = useTransition();

  const handleTabChange = (id) => {
    startTransistion(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <div style={{ borderRadius: "10%", overflow: "hidden" }}>
          <Image
            src="/images/aboutImage.webp"
            width={500}
            height={500}
            alt="Sample Image"
          />
        </div>
        {/* <iframe
          src="https://giphy.com/embed/XIqCQx02E1U9W"
          width="500"
          height="500"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            About me{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ".",
                500, // wait 2s before replacing
                "..",
                500,
                "...",
                500,
                "",
                500,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h2>
          <p className="text-base lg:text-lg text-justify">
            I am a jack of all trades. Through my career, I have honed my skills
            in optimizing strategies, responsive design, and website analytics.
            I have successfully tackled complex hardware, software, and network
            issues, consistently demonstrating my problem-solving abilities.
            With a degree in Information and Media Technology, I have completed
            impactful IoT projects and gained experience leading workshops,
            highlighting my leadership and communication skills. Fluent in both
            Swedish and English, I possess excellent communication abilities
            essential for collaborating effectively with diverse teams.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
