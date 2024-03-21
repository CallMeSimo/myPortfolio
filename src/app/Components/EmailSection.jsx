"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/images/github-icon.svg";
import linkedin from "../../../public/images/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form request for sending data -> server
    const options = {
      // POST method because we are SENDING data -> server
      method: "POST",
      // Telling server what data type we are sending, JSON
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (resData.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative "
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          You dont know me I dont know you, lets change that!
          <br />I am up for for projects, questions or even for a coffe, just
          start with a hello!
        </p>
        <div className="socials relative flex flex-row gap-2">
          <Link href="https://github.com/CallMeSimo">
            <Image
              className="hover:fill-purple-500"
              width={48}
              height={48}
              src={GithubIcon}
              alt="Github Icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/wassim-el-haddaoui/">
            <Image width={48} height={48} src={linkedin} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="YourEmail@mail.com"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Greetings 1!11!"
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded.lg block w-full p-2.5 "
              placeholder="Let's talk today."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit message
          </button>
          {
            // Show success message if status 200.
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
