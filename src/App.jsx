import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Showcase from "@/pages/Showcase";
// 1. Import the FloatingControls component
import FloatingControls from "@/components/FloatingControls";

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
        <ScrollToTop />
        <div className="bg-noise" />
        <div className="cyber-grid fixed inset-0 opacity-20 pointer-events-none" />

        {/* Ambient Glow Orbs */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />

        {/* 2. Add the Floating Controls here */}
        <FloatingControls />
      </div>
    </Router>
  );
}

export default App;
