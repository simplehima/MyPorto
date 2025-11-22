import React from "react";
import { motion } from "framer-motion";

const GlitchText = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.h1
        className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        animate={{
          textShadow: [
            "0 0 10px rgba(0, 255, 255, 0.5)",
            "0 0 20px rgba(255, 0, 255, 0.5)",
            "0 0 10px rgba(0, 255, 255, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text}
      </motion.h1>
      <motion.h1
        className="absolute top-0 left-0 text-cyan-400 opacity-70"
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 2, -2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ clipPath: "inset(0 0 70% 0)" }}
      >
        {text}
      </motion.h1>
      <motion.h1
        className="absolute top-0 left-0 text-pink-500 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.15,
        }}
        style={{ clipPath: "inset(70% 0 0 0)" }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default GlitchText;
