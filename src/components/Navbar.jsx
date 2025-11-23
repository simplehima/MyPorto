import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // New state for active section
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Handle Scroll Background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Active Section Highlighting (ScrollSpy)
  useEffect(() => {
    if (!isHome) return; // Only run this on the home page

    const sections = document.querySelectorAll("section[id]"); // Assuming your sections have IDs

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Triggers when section is roughly in the middle of screen
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
    // { name: "Showcase", href: "/showcase", isPage: false },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e, href) => {
    if (!href.startsWith("/#")) return;

    if (isHome) {
      e.preventDefault();
      const id = href.replace("/#", "#");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id.substring(1)); // Manually set active to avoid lag
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  // Helper to determine if a link is active
  const isActive = (item) => {
    if (item.isPage) {
      return location.pathname === item.href;
    }
    // Ensure we are on home page and the active section matches the href hash
    return isHome && activeSection === item.href.replace("/#", "");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`
          relative mx-auto transition-all duration-300 rounded-full border border-white/5 backdrop-blur-xl
          ${
            scrolled
              ? "bg-black/80 shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-5xl px-6 py-3"
              : "bg-transparent border-transparent px-0 py-2"
          }
        `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("home");
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
                    {/* Conditional Highlight Line */}
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
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const active = isActive(item);

                return item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                      active
                        ? "text-cyan-400 bg-white/5"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xs text-cyan-500/50 mr-2">
                      0{index + 1}.
                    </span>
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 text-lg font-medium ${
                      active
                        ? "text-cyan-400 bg-white/5"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xs text-cyan-500/50 mr-2">
                      0{index + 1}.
                    </span>
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
