import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import heroImage from "@/assets/karga-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PARNAVAZ — Karga Dergi" },
      {
        name: "description",
        content:
          "Karga: bağımsız bir dergi. Sinematik, analog hissiyatlı, modern bir okuma deneyimi.",
      },
      { property: "og:title", content: "PARNAVAZ — Karga" },
      { property: "og:description", content: "Karga dergisi — sayıların arşivi." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-32 pt-40 md:pt-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="vignette relative w-full max-w-2xl overflow-hidden rounded-sm shadow-[var(--shadow-card)]"
        >
          <img
            src={heroImage}
            alt="Karga"
            width={1024}
            height={1024}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-16 text-center font-display text-7xl tracking-wider text-foreground md:text-9xl lg:text-[10rem]"
        >
          KARGA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Bir kanat sesi, bir sayfa daha. Karga; sessizliğin, gözlemin ve
          bağımsız sözün dergisidir. Her sayı, kendi kendine doğan bir gece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14"
        >
          <Link
            to="/karga"
            className="group relative inline-flex items-center gap-4 rounded-full border border-gold/40 px-8 py-3.5 text-sm uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-gold hover:text-gold hover:shadow-[0_0_40px_-8px_var(--gold)]"
          >
            <span>Sayıları Gör</span>
            <span className="h-px w-6 bg-gold/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
