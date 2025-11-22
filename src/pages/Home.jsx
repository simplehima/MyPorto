import React from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ibrahim Azab - Portfolio</title>
        <meta
          name="description"
          content="Ibrahim Azab's portfolio showcasing projects, skills, and experience."
        />
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
