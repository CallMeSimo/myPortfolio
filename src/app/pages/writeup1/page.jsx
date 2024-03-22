"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../../Components/TabButton.jsx";
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
    title: "role",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Gymnasieingenjör</li>
        <li>Nerd</li>
      </ul>
    ),
  },
  {
    title: "Challenges",
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

export default function ProjectWriteup() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransistion] = useTransition();

  const handleTabChange = (id) => {
    startTransistion(() => {
      setTab(id);
    });
  };
  return (
    <main className="flex min-h-screen pt-10 flex-col bg-[#121212] bg-[url('/images/topography.svg')]">
      <section id="about" className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          <div style={{ borderRadius: "10%", overflow: "hidden" }}>
            <Image
              src="/images/Hardware/Hardware3.png"
              width={1000}
              height={780}
              alt="Sample Image"
            />
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project overview{" "}
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
              I am a jack of all trades. Through my career, I have honed my
              skills in optimizing strategies, responsive design, and website
              analytics. I have successfully tackled complex hardware, software,
              and network issues, consistently demonstrating my problem-solving
              abilities. With a degree in Information and Media Technology, I
              have completed impactful IoT projects and gained experience
              leading workshops, highlighting my leadership and communication
              skills. Fluent in both Swedish and English, I possess excellent
              communication abilities essential for collaborating effectively
              with diverse teams.
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
                Roles
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experiences")}
                active={tab === "experiences"}
              >
                Challenges
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
