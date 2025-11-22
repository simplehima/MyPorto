import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Rush Hub",
      role: "Mobile Developer",
      period: "2023 — Present",
      description:
        "Architecting high-performance Flutter applications featuring real-time data synchronization. Optimized app performance by 40% through efficient state management.",
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      company: "Smiles Inc",
      role: "Software Engineer",
      period: "2022 — 2023",
      description:
        "Led the development of IoT-integrated software solutions. Bridged the gap between hardware sensors and user-facing dashboards using C++ and Dart.",
      tech: ["C++", "Arduino", "IoT"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Career History" subtitle="EXPERIENCE LOG" />

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-black" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mt-1">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded border border-white/5">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                {exp.description}
              </p>

              <div className="flex gap-3">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
