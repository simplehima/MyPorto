import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SectionTitle from "@/components/SectionTitle";
import { ExternalLink, Lock, PlayCircle, Layers } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Showcase = () => {
  const { toast } = useToast();

  const handleDemoClick = (title) => {
    toast({
      title: "🚀 Launching Demo",
      description: `Starting the interactive preview for ${title}...`,
      duration: 3000,
    });
  };

  const templates = [
    {
      id: 1,
      title: "Neon Commerce",
      category: "E-Commerce",
      status: "Live Preview",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
      description:
        "High-performance e-commerce template with 3D product views and dark mode.",
    },
    {
      id: 2,
      title: "Zenith Dashboard",
      category: "SaaS",
      status: "Prototype",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      description:
        "Analytical dashboard featuring real-time data visualization and modular widgets.",
    },
    {
      id: 3,
      title: "Cyber Social",
      category: "Social Media",
      status: "Early Access",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      description:
        "Next-gen social platform interface with focus on privacy and encrypted messaging.",
    },
    {
      id: 4,
      title: "IoTerra Control",
      category: "IoT / Mobile",
      status: "Live Preview",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
      description:
        "Smart agriculture control system with sensor integration and weather tracking.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <Helmet>
        <title>Showcase - Ibrahim Azab</title>
        <meta
          name="description"
          content="Interactive project demos and templates."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-mono mb-6"
          >
            <Layers size={16} />
            <span>TEMPLATE LIBRARY</span>
          </motion.div>
          <SectionTitle
            title="Interactive Showcase"
            subtitle="LIVE DEMOS"
            className="mb-4"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore fully interactive prototypes and templates. Experience the
            UI/UX patterns in a live environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {templates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10 opacity-90" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${
                      item.status === "Live Preview"
                        ? "bg-green-500/20 border-green-500/30 text-green-400"
                        : "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>

                {/* Action Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleDemoClick(item.title)}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    <PlayCircle size={20} />
                    Launch Demo
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 -mt-12 z-20">
                <div className="text-cyan-500 text-xs font-mono mb-2">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    Last updated: 2 days ago
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
