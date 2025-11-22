import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Image/Stats Column */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000"
                alt="Coding Setup"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-3xl font-bold text-white mb-1">2+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Years Exp
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="The Developer Behind The Code"
              subtitle="ABOUT ME"
              className="mb-8"
            />

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Ibrahim Azab, a passionate{" "}
                <span className="text-white font-medium">
                  Software Engineer
                </span>{" "}
                based in New Cairo. My journey began with a curiosity for how
                things work, which evolved into a deep-seated love for writing
                code that interacts with the physical world.
              </p>

              <p>
                I specialize in building high-performance mobile applications
                using <span className="text-cyan-400">Flutter</span> and
                designing complex embedded systems with{" "}
                <span className="text-purple-400">Arduino</span>. I believe in
                the power of clean, maintainable code and user-centric design.
              </p>

              <p>
                Currently, I'm focused on bridging the gap between IoT hardware
                and mobile software, creating seamless ecosystems where data
                flows effortlessly. When I'm not coding, you'll likely find me
                exploring new tech trends or optimizing my development workflow.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium">
                Problem Solver
              </div>
              <div className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-sm font-medium">
                Tech Enthusiast
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium">
                Continuous Learner
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
