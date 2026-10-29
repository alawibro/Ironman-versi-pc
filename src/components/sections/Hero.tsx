"use client";

import { useEffect, useRef, useState } from "react";
import { BEATS, BRAND, TAGLINE, assetPath } from "@/lib/content";

// Hero: video di-seek sesuai posisi scroll. Teks muncul bertahap.
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let duration = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / range));

      if (duration) {
        const target = progress * duration;
        if (Math.abs(video.currentTime - target) > 0.03) {
          video.currentTime = target;
        }
      }

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (titleRef.current) {
        titleRef.current.style.opacity = String(Math.max(0, 1 - progress / 0.15));
      }
      BEATS.forEach((beat, i) => {
        const el = beatRefs.current[i];
        if (!el) return;
        const on = progress >= beat.show && progress < beat.hide;
        el.style.opacity = on ? "1" : "0";
        el.style.transform = on ? "translateY(0)" : "translateY(16px)";
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const onMeta = () => {
      duration = video.duration;
      update();
    };
    const onCanPlay = () => setLoaded(true);

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("canplaythrough", onCanPlay);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (video.readyState >= 1) onMeta();
    if (video.readyState >= 4) setLoaded(true);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("canplaythrough", onCanPlay);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-[400vh] max-md:h-[350vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={assetPath("/videos/hero.mp4")}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Scrim agar teks tetap terbaca di atas video apa pun. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

        <div
          ref={titleRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/80">
            Selamat datang
          </p>
          <h1 className="text-6xl font-semibold tracking-tighter md:text-8xl">{BRAND}</h1>
          <p className="mt-6 max-w-[40ch] text-white/80">{TAGLINE}</p>
        </div>

        {BEATS.map((beat, i) => (
          <div
            key={beat.id}
            ref={(el) => {
              beatRefs.current[i] = el;
            }}
            className="absolute bottom-16 left-6 right-6 max-w-xl text-white transition-all duration-500 md:left-16"
            style={{ opacity: 0 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
              {beat.label}
            </p>
            <p className="mt-3 text-2xl font-medium leading-snug md:text-3xl">{beat.quote}</p>
          </div>
        ))}

        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
          <div ref={barRef} className="h-full origin-left bg-white" style={{ transform: "scaleX(0)" }} />
        </div>

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
            <p className="font-mono text-sm tracking-widest">MEMUAT VIDEO…</p>
          </div>
        )}
      </div>
    </section>
  );
}
