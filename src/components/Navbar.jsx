import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Exp", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Work", href: "/#projects" },
    { name: "Showcase", href: "/showcase", isPage: true },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e, href) => {
    if (!href.startsWith("/#")) return; // Let router handle non-hash links

    if (isHome) {
      e.preventDefault();
      const id = href.replace("/#", "#");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      // If not on home, the Link component handles navigation to /, then hash takes over
      setIsOpen(false);
    }
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
            <Link to="/" className="flex items-center gap-2 group">
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
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-white/5 group overflow-hidden ${
                      location.pathname === item.href
                        ? "text-cyan-400 bg-white/5"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname === item.href && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500" />
                    )}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5 group overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                )
              )}
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
              {navItems.map((item, index) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300 text-lg font-medium"
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
                    className="block px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-300 text-lg font-medium"
                  >
                    <span className="text-xs text-cyan-500/50 mr-2">
                      0{index + 1}.
                    </span>
                    {item.name}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
