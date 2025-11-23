import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Lock,
  Download,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { useToast } from "@/components/ui/use-toast";
import miLogo from "@/assets/pictures/MI-logo-Blue.png";
import sgms from "@/assets/pictures/sgms.png";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "Marketing Intelligence (MI)",
      description:
        "A revolutionary marketing platform integrating holographic fans with AI. Features real-time age & gender detection, sign language translation, and dynamic content adaptation using YOLOv8 and custom IoT hardware.",
      tags: ["C# .NET", "Python YOLOv8", "C++", "Arduino/IoT", "OpenCV"],
      image: miLogo,
      link: "https://www.linkedin.com/posts/ibrahim-waleed_marketing-ai-csharp-activity-7236139045410459648-GhDs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7L1G8BOWHpMFKxxruhqXiE1QvtBgvD0Nk",
      hasRepo: false,
    },
    {
      title: "Student Grade Management",
      description:
        "A comprehensive desktop application designed for educators. Streamlines grade tracking with secure data handling, intuitive dashboards, and automated reporting. Built as a tribute to Dr. Ahmed Gaber.",
      tags: ["C#", "Desktop App", "SQL", "Data Viz", "Security"],
      image: sgms,
      // Main link (LinkedIn Post)
      link: "https://www.linkedin.com/posts/ibrahim-waleed_im-excited-to-share-the-release-of-sgms-activity-7374161520894803968--YJy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7L1G8BOWHpMFKxxruhqXiE1QvtBgvD0Nk",
      // New Download Link
      downloadUrl: "https://sgms.ct.ws/download-sgms/",
      hasRepo: false,
    },
    {
      title: "Arduino Recycling System",
      description:
        "An innovative recycling bin system that uses Arduino to identify and sort recyclable materials. Equipped with sensors and a user-friendly mobile app for real-time monitoring and notifications.",
      tags: ["Arduino", "Flutter", "C++", "Firebase", "IoT", "Mobile App"],
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000",
      link: "#",
      hasRepo: true,
    },
    {
      title: "ProperQuant",
      description:
        "A live real-estate investment platform. Engineered the responsive frontend interface and implemented seamless backend API connections to facilitate real-time property data visualization and investment tracking.",
      tags: ["Frontend Dev", "API Integration", "Real Estate", "Web Arch"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      link: "https://properquant.net/",
      hasRepo: false,
    },
  ];

  const handleRepoClick = (hasRepo) => {
    if (!hasRepo) {
      toast({
        title: "🔒 Private Repository",
        description: "The source code for this project is currently private.",
        duration: 3000,
      });
    } else {
      toast({
        title: "🚧 Prototype Access",
        description: "Repository link coming soon!",
        duration: 3000,
      });
    }
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-10 opacity-80" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                />

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {/* Repo Button */}
                  <button
                    onClick={() => handleRepoClick(project.hasRepo)}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white"
                    title="View Code"
                  >
                    {project.hasRepo ? (
                      <Github size={18} />
                    ) : (
                      <Lock size={18} />
                    )}
                  </button>

                  {/* Download/Landing Page Button (New) */}
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white"
                      title="Download App"
                    >
                      <Download size={18} />
                    </a>
                  )}

                  {/* Social/Link Button */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors"
                      title="View Project"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-20 -mt-10 bg-gradient-to-t from-[#0F0F0F] to-transparent">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 transition-colors cursor-default"
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
            onClick={() =>
              window.open("https://github.com/simplehima", "_blank")
            }
          >
            View All Archives
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
