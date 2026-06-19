"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-widest text-white hover:text-[var(--primary)] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
          Mad<span className="text-[var(--primary)]">Bird</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-[var(--primary)] transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-[var(--primary)] transition-colors">About</Link>
          <Link href="#contact" className="hover:text-[var(--primary)] transition-colors">Contact</Link>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 flex flex-col items-center py-8 space-y-6 md:hidden"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-xl uppercase tracking-wider hover:text-[var(--primary)]">Home</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="text-xl uppercase tracking-wider hover:text-[var(--primary)]">Projects</Link>
            <Link href="#about" onClick={() => setMenuOpen(false)} className="text-xl uppercase tracking-wider hover:text-[var(--primary)]">About</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-xl uppercase tracking-wider hover:text-[var(--primary)]">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
