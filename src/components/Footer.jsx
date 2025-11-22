import React from "react";
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative border-t border-cyan-500/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-2 text-gray-400"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Code className="text-cyan-400" size={20} />
            <span>Crafted with</span>
            <Heart className="text-pink-400 fill-pink-400" size={16} />
            <span>by Ibrahim Azab</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-gray-400 text-sm"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>&copy; 2025 All rights reserved</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-4 text-center text-xs text-gray-500"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          <p></p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50" />
    </footer>
  );
};
export default Footer;
