import { motion } from "framer-motion";
import type { Magazine } from "@/data/magazines";

export function MagazineCard({ magazine, index }: { magazine: Magazine; index: number }) {
  return (
    <motion.a
      href={magazine.pdf}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-card to-bordeaux-deep p-8 shadow-[var(--shadow-card)] transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_50px_-10px_var(--gold)] md:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-gold/80">
            № {String(magazine.id).padStart(2, "0")}
          </span>
          <span className="text-xs tracking-widest text-muted-foreground">
            {magazine.date}
          </span>
        </div>

        <h3 className="font-display text-4xl text-foreground transition-colors duration-500 group-hover:text-gold md:text-6xl">
          {magazine.title}
        </h3>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {magazine.description}
        </p>

        <div className="mt-2 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold/70 transition-all duration-500 group-hover:gap-5 group-hover:text-gold">
          <span>Oku</span>
          <span className="h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
        </div>
      </div>
    </motion.a>
  );
}
