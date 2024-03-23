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
        <li>PLC - programming</li>
        <li>Communication</li>
        <li>Networking</li>
      </ul>
    ),
  },
  {
    title: "role",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Developer - Main communication between devices</li>
        <li>Teamlead</li>
        <li>Contact person</li>
      </ul>
    ),
  },
  {
    title: "Challenges",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>M241CE24R koppling till 950D</li>
        <li>Data format - Converting HEX values to Decimal ASCII</li>
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
      <section id="about" className="container mx-auto px-40 py-4">
        <div className="flex flex-col gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
          <div style={{ borderRadius: "10%", overflow: "hidden" }}>
            <Image
              src="/images/Hardware/Hardware3.png"
              width={1000}
              height={780}
              alt="Image of oscilloscope being used on a plc device."
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
            <p className="text-base text-md text-justify">
              Embarking on an intricate journey of PLC programming, I found
              myself integral to a dynamic trio tasked with the development of
              Human-Machine Interfaces (HMI), a cornerstone in enhancing the
              user interaction and overall efficiency of machinery control
              systems. Our programming language of choice was Structured Text
              (ST), a high-level, block-structured language reminiscent of
              Pascal, specifically designed for programmable logic controllers
              (PLC). This choice was driven by its adaptability and robustness
              in handling complex logic and processes, a critical asset in our
              development toolkit.
              <br></br>
              <br></br>
              The project's core involved implementing sophisticated timer
              logic, a fundamental component in ensuring precise control and
              sequencing of operations within the PLC. This timer logic served
              as the backbone of our HMI's operational flow, dictating the
              synchronized execution of tasks and ensuring a seamless and
              intuitive user experience.
              <br></br>
              <br></br>
              As the development phase neared completion, our focus shifted
              towards refining and optimizing the codebase. Enhancing
              readability, and streamlining functions for improved performance
              and maintenance ease.
              <br></br>
              <br></br>
              The culmination of our efforts was marked by a comprehensive
              presentation to the project's stakeholders. This meeting with the
              owners and collaborators was not merely a formality but a
              celebration of innovation and teamwork. We demonstrated the
              capabilities and advantages of our newly developed HMI system,
              showcasing the intuitive interface and the underlying
              sophisticated logic that powered it. This presentation served as a
              testament to the collaborative spirit of our team and the
              potential of structured text programming in revolutionizing HMI
              development. It was a moment of pride and accomplishment, as we
              received invaluable feedback and appreciation, paving the way for
              future advancements and collaborations.
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
          <div style={{ borderRadius: "10%", overflow: "hidden" }}>
            <Image
              src="/images/Hardware/Hardwaresetup1.png"
              width={1000}
              height={780}
              alt="Workplace setup."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
