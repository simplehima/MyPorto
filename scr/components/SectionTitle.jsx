import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${className}`}
    >
      <div className="flex items-center gap-4 mb-2">
        <span className="h-[1px] w-8 bg-cyan-500/50"></span>
        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title.split(" ").map((word, i) => (
          <span key={i} className={i === 0 ? "text-white" : "text-gray-500"}>
            {word}{" "}
          </span>
        ))}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
