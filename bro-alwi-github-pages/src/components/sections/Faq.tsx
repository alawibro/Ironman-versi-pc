"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VideoScroll } from "@/components/ui/VideoScroll";
import { FAQ } from "@/lib/content";

// Bagian 3: klip Futuristic di-seek sesuai scroll, accordion tetap bisa diklik.
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <VideoScroll id="faq" src="/videos/s3.mp4">
      <div className="mx-auto max-w-[800px]">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-white md:text-5xl">
          Pertanyaan yang sering ditanyakan
        </h2>

        <div className="mt-12 flex flex-col gap-4">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-[20px] border border-white/10 bg-black/55 p-6 text-white backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between text-left text-lg font-medium"
                >
                  {item.q}
                  <span className="ml-4 text-white/60">{isOpen ? "–" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/70">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </VideoScroll>
  );
}
