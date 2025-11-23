import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import GlitchText from "@/components/GlitchText";
import meImg from "@/assets/pictures/Me1.png";

const Hero = () => {
  const { scrollY } = useScroll();

  // Parallax: Reduced movement range for smoother mobile performance
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      id="home"
      // UPDATE: Changed 'pt-20' to 'pt-36 md:pt-20'
      // This adds extra space at the top specifically for mobile screens
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-20"
    >
      {/* --- BACKGROUND ELEMENTS (Optimized for Mobile) --- */}

      {/* Blob 1: Reduced blur, added hardware acceleration */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl md:blur-[80px] pointer-events-none will-change-transform translate-z-0"
      />

      {/* Blob 2: Reduced blur, added hardware acceleration */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-purple-600/10 blur-3xl md:blur-[100px] pointer-events-none will-change-transform translate-z-0"
      />

      {/* Grid Overlay: Removed blending on mobile to save battery/GPU */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 md:opacity-20 md:mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Profile Picture Section */}
          <div className="relative w-40 h-40 mb-8 group cursor-pointer">
            {/* Rotating Border: Optimized animation */}
            <div className="absolute inset-[-6px] rounded-full border-2 border-transparent border-t-cyan-500 border-r-purple-500 border-b-pink-500 opacity-70 animate-spin-slow group-hover:opacity-100 transition-opacity will-change-transform"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 blur-xl md:blur-[20px] opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black box-glow z-10 translate-z-0">
              <img
                alt="Ibrahim Azab Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 will-change-transform"
                src={meImg}
                loading="eager"
              />

              {/* Scanline Overlay */}
              <div className="absolute inset-0 profile-scanline opacity-40 pointer-events-none"></div>

              {/* Glitch Overlay */}
              <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 mix-blend-color-dodge transition-opacity duration-100"></div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 z-20 w-6 h-6 bg-black rounded-full flex items-center justify-center border border-white/10">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </div>
          </div>

          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs font-mono text-gray-300 tracking-wider">
              SYSTEM ONLINE
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-8 relative">
            <GlitchText
              text="IBRAHIM AZAB"
              className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2"
            />
            <h2 className="text-2xl md:text-4xl font-light text-gray-400 mt-4 tracking-wide">
              Creative{" "}
              <span className="text-cyan-400 font-normal">Developer</span> &{" "}
              <span className="text-purple-400 font-normal">
                Tech Strategist
              </span>
            </h2>
          </div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Engineering robust mobile applications and embedded systems with a
            focus on performance, scalability, and futuristic user interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:bg-cyan-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:border-white/40"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
            Scroll
          </span>
          <ChevronDown className="text-cyan-400 w-5 h-5" />
        </motion.div>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-xs font-mono text-gray-600 [writing-mode:vertical-lr]">
        <span className="tracking-widest">SYSTEM_READY</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        <span>V2.0.24</span>
      </div>
    </section>
  );
};

export default Hero;
