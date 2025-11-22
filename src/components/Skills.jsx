import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Code2, Cpu, Globe, Terminal, Layers, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 75 },
        { name: "C#", level: 80 },
      ],
      colorKey: "cyan",
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: "Arduino", level: 90 },
        { name: "IoT", level: 85 },
        { name: "Sensors", level: 80 },
        { name: "Circuit Design", level: 75 },
      ],
      colorKey: "purple",
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "TailwindCSS", level: 85 },
        { name: "Node.js", level: 65 },
      ],
      colorKey: "pink",
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Firebase", level: 85 },
        { name: "Postman", level: 80 },
      ],
      colorKey: "blue",
    },
  ];

  // Explicit map to prevent Tailwind purging dynamic classes
  const colorMap = {
    cyan: {
      bg: "bg-cyan-500",
      text: "text-cyan-400",
      bgSoft: "bg-cyan-500/10",
      border: "border-cyan-500",
      shadow: "shadow-cyan-500/50",
      gradient: "from-cyan-500/20",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-400",
      bgSoft: "bg-purple-500/10",
      border: "border-purple-500",
      shadow: "shadow-purple-500/50",
      gradient: "from-purple-500/20",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-pink-400",
      bgSoft: "bg-pink-500/10",
      border: "border-pink-500",
      shadow: "shadow-pink-500/50",
      gradient: "from-pink-500/20",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-400",
      bgSoft: "bg-blue-500/10",
      border: "border-blue-500",
      shadow: "shadow-blue-500/50",
      gradient: "from-blue-500/20",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle
            title="Technical Arsenal"
            subtitle="SKILLS & CAPABILITIES"
            className="mb-0"
          />
          <p className="text-gray-500 max-w-md mt-4 md:mt-0 md:text-right">
            A comprehensive overview of my technical proficiency across various
            domains of software engineering.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const colors = colorMap[category.colorKey];

            return (
              <motion.div
                key={idx}
                variants={item}
                className="group relative p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl ${colors.bgSoft} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-6">
                    {category.title}
                  </h3>

                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between mb-2 text-xs font-medium uppercase tracking-wider">
                          <span className="text-gray-400">{skill.name}</span>
                          <span className={colors.text}>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${colors.bg} shadow-[0_0_10px_currentColor]`}
                            style={{ color: `var(--tw-shadow-color)` }} // Helper for shadow color inheritance if needed
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.2 + sIdx * 0.1,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
