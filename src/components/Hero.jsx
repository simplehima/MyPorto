import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import GlitchText from "@/components/GlitchText";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none"
      />

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-gray-300">
              AVAILABLE FOR WORK
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
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
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
