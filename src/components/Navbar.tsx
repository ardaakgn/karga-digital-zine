import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-gold/20"
          : "backdrop-blur-sm bg-background/20 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-2xl tracking-widest text-foreground transition-colors hover:text-gold md:text-3xl"
        >
          PARNAVAZ
        </Link>
        <Link
          to="/karga"
          className="group relative rounded-full border border-gold/40 px-5 py-2 text-sm tracking-wider text-foreground transition-all duration-500 hover:border-gold hover:text-gold hover:shadow-[0_0_24px_-4px_var(--gold)] md:px-7 md:py-2.5"
        >
          KARGA
        </Link>
      </nav>
    </motion.header>
  );
}
