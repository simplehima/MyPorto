import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { useToast } from "@/components/ui/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "Smart Home IoT Hub",
      description:
        "Centralized control system for home automation using Arduino and a custom Flutter dashboard.",
      tags: ["Arduino", "Flutter", "C++", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
      color: "cyan",
    },
    {
      title: "E-Commerce Ecosystem",
      description:
        "Scalable mobile commerce application with real-time inventory tracking and secure payment gateways.",
      tags: ["Flutter", "Dart", "Stripe API", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1523206485972-6740a70b1999?auto=format&fit=crop&q=80&w=1000",
      color: "purple",
    },
    {
      title: "Eco Weather Station",
      description:
        "Environmental monitoring system visualizing real-time climate data via a cross-platform app.",
      tags: ["IoT", "Sensors", "Data Viz", "Bluetooth"],
      image:
        "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&q=80&w=1000",
      color: "green",
    },
    {
      title: "TaskFlow Pro",
      description:
        "Collaborative project management tool with real-time sockets and team productivity analytics.",
      tags: ["React", "Supabase", "Tailwind", "Framer"],
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000",
      color: "blue",
    },
  ];

  const handleProjectClick = () => {
    toast({
      title: "🚧 Prototype Access",
      description: "Project demo link isn't live yet. Check back soon!",
      duration: 3000,
    });
  };

  return (
    <section id="projects" className="py-24 px-4 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Featured Work" subtitle="SELECTED PROJECTS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-[#0F0F0F] border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent z-10 opacity-80" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                />

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={handleProjectClick}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white"
                  >
                    <Github size={18} />
                  </button>
                  <button
                    onClick={handleProjectClick}
                    className="p-2 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-20 -mt-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
            onClick={handleProjectClick}
          >
            View All Archives
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
