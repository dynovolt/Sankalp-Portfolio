import React from "react";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Resume } from "@/components/sections/resume";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Featured Projects */}
      <Projects />

      {/* 3. About */}
      <About />

      {/* 4. Skills */}
      <Skills />

      {/* 5. Contact */}
      <Contact />

      {/* 6. Resume Download */}
      <Resume />
    </div>
  );
}
