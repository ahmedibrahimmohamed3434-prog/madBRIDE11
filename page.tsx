"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CanvasScene from "@/components/3d/CanvasScene";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    // GSAP Hero Animation
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.5 }
      );
    }

    // ScrollTrigger About Section
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const featuredProjects = projects.slice(0, 4);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setSubmitStatus("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <CanvasScene />
        <div className="relative z-10 text-center px-4">
          <h1 ref={heroTextRef} className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="block text-white">We are</span>
            <span className="block text-[var(--primary)]">MadBird</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-lg md:text-2xl text-gray-400 font-medium tracking-wide"
          >
            Awwwards-winning Creative & Marketing Agency
          </motion.p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-32 bg-neutral-950 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase text-[var(--primary)]" style={{ fontFamily: "var(--font-heading)" }}>The Vision</h2>
          <p className="text-xl md:text-3xl leading-relaxed text-gray-300 font-light">
            We don't just build brands; we engineer digital experiences that captivate, convert, and leave a lasting legacy. Specializing in high-end automotive, elite F&B, and premium media, MadBird Studio brings a relentless passion for aesthetics and cutting-edge technology to every project.
          </p>
        </div>
      </section>

      <section className="py-32 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Selected <br/><span className="text-[var(--primary)]">Works</span></h2>
            <Link href="/projects" className="text-lg font-bold uppercase tracking-wider hover:text-[var(--primary)] transition-colors border-b border-current pb-1 hidden md:block">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative overflow-hidden bg-neutral-900 rounded-xl ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-2">{project.category}</p>
                      <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link href="/projects" className="text-lg font-bold uppercase tracking-wider text-[var(--primary)] border-b border-[var(--primary)] pb-1">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-neutral-950 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase" style={{ fontFamily: "var(--font-heading)" }}>Let's <span className="text-[var(--primary)]">Talk</span></h2>
          <p className="text-xl text-gray-400 mb-12">Ready to elevate your brand to the next level? Get in touch with us.</p>
          
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" required placeholder="Name" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" />
              <input type="email" name="email" required placeholder="Email" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" />
            </div>
            <textarea name="message" required placeholder="Tell us about your project" rows={4} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary)] transition-colors"></textarea>
            <button type="submit" disabled={isSubmitting} className="bg-[var(--primary)] text-white font-bold uppercase tracking-widest py-4 px-12 hover:bg-white hover:text-black transition-colors disabled:opacity-50">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitStatus && <p className="mt-4 text-[var(--primary)] font-bold">{submitStatus}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
