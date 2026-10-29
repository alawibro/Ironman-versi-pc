"use client";

import { useEffect, useRef } from "react";

// Bagian sticky: video di belakang di-seek sesuai posisi scroll,
// konten di depan ikut berputar 3D.
export function VideoScroll({
  id,
  src,
  children,
}: {
  id?: string;
  src: string;
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    if (!section || !video || !content) return;

    let duration = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / range));

      if (duration) {
        const target = progress * duration;
        // Hanya seek kalau posisinya benar-benar berubah, supaya tidak menumpuk.
        if (Math.abs(video.currentTime - target) > 0.03) {
          video.currentTime = target;
        }
      }

      // Konten berputar di sumbu Y seiring scroll, memberi kesan 3D.
      content.style.transform = `perspective(1400px) rotateY(${(progress - 0.5) * 14}deg) translateZ(${Math.sin(progress * Math.PI) * 40}px)`;
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

    video.addEventListener("loadedmetadata", onMeta);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (video.readyState >= 1) onMeta();

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [src]);

  return (
    <section id={id} ref={sectionRef} className="relative h-[300vh] max-md:h-[260vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/85" />
        <div
          ref={contentRef}
          className="relative z-10 flex h-full w-full items-center justify-center overflow-y-auto px-6 py-16 md:px-8"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <div className="w-full max-w-[1200px]">{children}</div>
        </div>
      </div>
    </section>
  );
}
