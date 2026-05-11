"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition ${
        scrolled ? "backdrop-blur bg-black/50" : ""
      }`}
    >
      {/* content */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold">Harrison Wight</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          href="/resume.pdf"
          className="bg-indigo-500 px-4 py-2 rounded-xl"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
