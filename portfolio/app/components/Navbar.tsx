"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "px-4 py-3"
          : "px-4 py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-5 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/70 shadow-[0_20px_70px_rgba(2,6,23,0.35)]"
            : "bg-slate-950/40 shadow-[0_10px_30px_rgba(2,6,23,0.2)]"
        }`}
      >
        <a href="#top" className="text-sm font-semibold tracking-[0.25em] text-white uppercase">
          Harrison Wight
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/20"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
