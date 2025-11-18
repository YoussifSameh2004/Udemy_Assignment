import React from "react";
import Hero from "../components/Hero";
import SkillsSection from "../components/SkillsSection";
import AISection from "../components/AISection";
import CoursesSection from "../components/CourseSection";
import TrustedSection from "../components/TrustedSection";

function HomePage() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <AISection />
      <CoursesSection />
      <TrustedSection />
    </>
  );
}

export default HomePage;
