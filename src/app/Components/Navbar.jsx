"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

import { TypeAnimation } from "react-type-animation";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-90 lg:bg-opacity-70">
      <div className="flex container flex-warp items-center justify-between mx-auto px-4 py-4">
        <Link href={"/"} className="text-4xl text-whit font-semibold">
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
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 border rounded border-slated-200 hover:border-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 border rounded border-slated-200 hover:border-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:space-x-8 sm:flex-row">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
