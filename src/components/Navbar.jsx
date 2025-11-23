import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle Scroll Background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Active Section (Spy)
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [isHome]);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Exp", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Work", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e, href) => {
    setIsOpen(false); // Close menu immediately
    if (!href.startsWith("/#")) return;

    if (isHome) {
      e.preventDefault();
      const id = href.replace("/#", "#");
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id.substring(1));
        }, 300); // Small delay to allow menu animation to finish
      }
    }
  };

  const isActive = (item) => {
    if (item.isPage) return location.pathname === item.href;
    return isHome && activeSection === item.href.replace("/#", "");
  };

  // Animation Variants for Mobile Menu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
            relative mx-auto transition-all duration-300 rounded-full border backdrop-blur-xl
            ${
              scrolled || isOpen
                ? "bg-black/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-5xl px-6 py-3"
                : "bg-transparent border-transparent px-0 py-2"
            }
          `}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-2 group relative z-50"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveSection("home");
                  setIsOpen(false);
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow duration-300"
                >
                  <Terminal size={20} className="text-white" />
                </motion.div>
                <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-cyan-400 transition-all duration-300">
                  IA<span className="text-cyan-500">.dev</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const active = isActive(item);
                  return item.isPage ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-white/5 group overflow-hidden ${
                        active
                          ? "text-cyan-400 bg-white/5"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {active && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500"
                        />
                      )}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-white/5 group overflow-hidden ${
                        active
                          ? "text-cyan-400 bg-white/5"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transition-transform duration-300 origin-left ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  );
                })}
                <a
                  href="/#contact"
                  onClick={(e) => scrollToSection(e, "/#contact")}
                  className="ml-4 px-5 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  Hire Me
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden relative z-50 p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Cool Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center space-y-6">
              {navItems.map((item, index) => {
                const active = isActive(item);
                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    {item.isPage ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                      >
                        <span
                          className={`text-4xl font-bold tracking-tight ${
                            active
                              ? "text-cyan-400"
                              : "text-white group-hover:text-cyan-400"
                          } transition-colors`}
                        >
                          {item.name}
                        </span>
                        <ChevronRight
                          className={`text-gray-600 group-hover:text-cyan-400 transition-all group-hover:translate-x-1 ${
                            active ? "text-cyan-400" : ""
                          }`}
                          size={28}
                        />
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-gray-500 pt-2">
                            0{index + 1}
                          </span>
                          <span
                            className={`text-4xl font-bold tracking-tight ${
                              active
                                ? "text-cyan-400"
                                : "text-white group-hover:text-cyan-400"
                            } transition-colors`}
                          >
                            {item.name}
                          </span>
                        </div>
                        <ChevronRight
                          className={`text-gray-600 group-hover:text-cyan-400 transition-all group-hover:translate-x-1 ${
                            active ? "text-cyan-400" : ""
                          }`}
                          size={28}
                        />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Action */}
            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="/#contact"
                onClick={(e) => scrollToSection(e, "/#contact")}
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-transform"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
