"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Footer = () => {
  return (
    <footer className="footer border z-10 bg-[#121212] border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <TypeAnimation
            sequence={[
              2000, // wait 2s before replacing
              // Same substring at the start will only be typed out once, initially
              "(づ ᴗ _ᴗ)づ♡",
              2000,
              "(ง ◉ _ ◉)ง",
              2000,
              "( -_•)╦̵̵̿╤─",
              2000,
              "ᕙ(  •̀ ᗜ •́  )ᕗ",
              2000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
          />{" "}
          <p className="text-slate-500">All rights reserved.</p>
        </span>
      </div>
    </footer>
  );
};
