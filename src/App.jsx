import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Ibrahim Azab - Portfolio</title>
        <meta
          name="description"
          content="Ibrahim Azab's portfolio which showcase my projects, skills, and experience in Flutter, Arduino, C++, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
        <div className="bg-noise" />
        <div className="cyber-grid fixed inset-0 opacity-20 pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
