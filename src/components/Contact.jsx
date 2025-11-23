import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ... (Keep your existing Icon components here: DiscordIcon, WhatsappIcon) ...
const DiscordIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5328-9.7135-3.5686-13.6891a.0683.0683 0 00-.0313-.0272zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // 1. Construct the Mailto URL
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // 2. Open the user's email client
    window.location.href = `mailto:hima.azab.eg@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // 3. Reset form UI
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
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

            <div className="space-y-4">
              {/* Email - Large Block */}
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

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/simplehima/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-black hover:border-white/20 transition-all border border-white/5 group"
                >
                  <Github
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span className="text-gray-400 group-hover:text-white font-medium">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ibrahim-waleed/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 transition-all border border-white/5 group"
                >
                  <Linkedin
                    size={20}
                    className="text-gray-400 group-hover:text-[#0077b5] transition-colors"
                  />
                  <span className="text-gray-400 group-hover:text-white font-medium">
                    LinkedIn
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/201000888395"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all border border-white/5 group"
                >
                  <WhatsappIcon className="text-gray-400 group-hover:text-[#25D366] transition-colors" />
                  <span className="text-gray-400 group-hover:text-white font-medium">
                    WhatsApp
                  </span>
                </a>

                {/* Discord */}
                <a
                  href="https://discord.com/users/900786385525555200"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-[#5865F2]/10 hover:border-[#5865F2]/50 transition-all border border-white/5 group"
                >
                  <DiscordIcon className="text-gray-400 group-hover:text-[#5865F2] transition-colors" />
                  <span className="text-gray-400 group-hover:text-white font-medium">
                    Discord
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
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm sticky top-24"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 rounded-xl transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 rounded-xl transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="bg-black/50 border-white/10 focus:border-cyan-500 text-white placeholder:text-gray-700 resize-none rounded-xl transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
                className={`w-full py-4 font-bold rounded-full transition-all flex items-center justify-center gap-2 ${
                  formStatus === "success"
                    ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
                }`}
              >
                {formStatus === "idle" && (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
                {formStatus === "submitting" && (
                  <>
                    Opening Mail App...{" "}
                    <Loader2 size={18} className="animate-spin" />
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    Sent! <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
