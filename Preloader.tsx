"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate studio 3D video animation delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds cinematic intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative text-center">
            {/* Red sweep line effect behind text */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-4 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent blur-md"
            />
            
            {/* Studio text reveal */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
              className="relative text-4xl md:text-7xl font-bold uppercase tracking-[0.3em] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              MadBird <br />
              <span className="text-xl md:text-3xl tracking-[0.5em] text-[var(--primary)] font-light mt-4 block">
                Studio
              </span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
