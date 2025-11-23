import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Music, Pause, Volume2 } from "lucide-react";

const FloatingControls = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  // Handle Scroll Visibility
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  // Handle Audio Toggle
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3; // Set volume to 30% so it's not too loud
      audioRef.current.play().catch((e) => console.log("Audio play failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* --- MUSIC PLAYER BUTTON --- */}
      <div className="relative group">
        {/* Equalizer Animation (Only visible when playing) */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 flex gap-1 h-8 items-end"
            >
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  animate={{
                    height: [10, 24, 10],
                    backgroundColor: ["#06b6d4", "#22d3ee", "#06b6d4"], // Cyan colors
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative p-4 rounded-xl backdrop-blur-xl border transition-all duration-300
            ${
              isPlaying
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                : "bg-black/40 border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400"
            }
          `}
        >
          {isPlaying ? (
            isHovered ? (
              <Pause size={24} />
            ) : (
              <Volume2 size={24} />
            )
          ) : (
            <Music size={24} />
          )}
        </motion.button>
      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-4 rounded-xl bg-black/80 border border-cyan-500/30 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-500 hover:bg-cyan-950/30 transition-all duration-300 group"
          >
            <ArrowUp
              size={24}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingControls;
