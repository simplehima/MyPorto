import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Briefcase, Download, FileText } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Rush Hub / Emma Play",
      role: "Maintenance Technician",
      period: "Oct 2024 — Aug 2025",
      description:
        "Managed preventive and on-spot maintenance for high-tech entertainment systems, including VR rigs and hydraulic machinery. Diagnosed complex electrical and mechanical faults to minimize downtime, ensuring high-performance standards across all arcade equipment.",
      tech: ["Electronics", "VR Systems", "Hydraulics", "Solenoids"],
    },
    {
      company: "Rush Hub",
      role: "Freelance PCB Designer",
      period: "Sep 2024 — Oct 2024",
      description:
        "Designed and fabricated single and double-layer PCBs for custom arcade applications. Engineered and programmed game arcade reader boards, successfully bridging the gap between hardware specifications and smooth software functionality.",
      tech: ["PCB Design", "Embedded C", "Hardware Logic", "Prototyping"],
    },
    {
      company: "Smiles Inc",
      role: "Technical Operation Manager",
      period: "Sep 2020 — Mar 2024",
      description:
        "Led technical project executions and system maintenance. Notable projects include a custom 'bike-riding blender' mechanism for Vodafone. Specialized in building Arduino-based solutions, relay automation for high-voltage devices, and network administration.",
      tech: ["Arduino", "IoT", "C++", "Automation", "Project Mgmt"],
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

              <div className="flex flex-wrap gap-3">
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

          {/* --- NEW DOWNLOAD CV SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative pl-8 md:pl-12 pt-12"
          >
            {/* Connector Line Fading Out */}
            <div className="absolute left-[0px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 to-transparent md:hidden" />

            <a
              href="/resume.pdf"
              download="My_Resume.pdf"
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black text-cyan-500 transition-all duration-300">
                <Download size={24} />
              </div>

              <div className="flex-1">
                <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  Download Full Resume
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  Get a printable PDF version of my experience
                </p>
              </div>

              <div className="hidden sm:block">
                <FileText
                  className="text-gray-600 group-hover:text-cyan-500/20 transition-colors"
                  size={48}
                  strokeWidth={1}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
