export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Mad<span className="text-[var(--primary)]">Bird</span>
            </h2>
            <p className="text-gray-400 max-w-sm">
              We build premium brand experiences. Elevating aesthetics, moving culture forward.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">Instagram</a>
            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">Behance</a>
            <a href="#" className="text-white hover:text-[var(--primary)] transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MadBird Studio. All rights reserved.</p>
          <p>Designed to perfection.</p>
        </div>
      </div>
    </footer>
  );
}
