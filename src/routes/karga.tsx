import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { MagazineCard } from "@/components/MagazineCard";
import { magazines } from "@/data/magazines";

export const Route = createFileRoute("/karga")({
  component: KargaPage,
  head: () => ({
    meta: [
      { title: "KARGA — Sayılar | PARNAVAZ" },
      {
        name: "description",
        content: "Karga dergisinin tüm sayıları. PDF olarak okumak için tıklayın.",
      },
      { property: "og:title", content: "KARGA — Sayılar" },
    ],
  }),
});

function KargaPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-40 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-20 text-center md:mb-28"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold/70">
            Arşiv
          </p>
          <h1 className="font-display text-7xl tracking-wider text-foreground md:text-9xl">
            KARGA
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Yayımlanmış tüm sayılar. Her kapak, kendi gecesini taşır.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-14">
          {magazines.map((mag, i) => (
            <MagazineCard key={mag.id} magazine={mag} index={i} />
          ))}
        </div>

        {magazines.length === 0 && (
          <p className="text-center text-muted-foreground">Yakında.</p>
        )}
      </main>
    </div>
  );
}
