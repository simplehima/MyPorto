import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info */}
          <div>
            <SectionTitle
              title="Let's Collaborate"
              subtitle="CONTACT ME"
              className="mb-8"
            />
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you have a question, a project idea, or just want to say
              hi, I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hima.azab.eg@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email Me</div>
                  <div className="text-white font-medium">
                    hima.azab.eg@gmail.com
                  </div>
                </div>
                <ArrowRight
                  className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors"
                  size={18}
                />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/simplehima/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-black hover:border-cyan-500/50 transition-all border border-white/5 group"
                >
                  <Github
                    size={20}
                    className="text-gray-400 group-hover:text-white"
                  />
                  <span className="text-gray-400 group-hover:text-white">
                    GitHub
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all border border-white/5 group"
                >
                  <Linkedin
                    size={20}
                    className="text-gray-400 group-hover:text-[#0077b5]"
                  />
                  <span className="text-gray-400 group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <Input
                  type="text"
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 rounded-xl"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <Input
                  type="email"
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 rounded-xl"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <Textarea
                  rows={4}
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 resize-none rounded-xl"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
