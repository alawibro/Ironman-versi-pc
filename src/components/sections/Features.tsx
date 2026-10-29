import { VideoScroll } from "@/components/ui/VideoScroll";
import { FEATURES } from "@/lib/content";

// Bagian 2: video HUD (detik 0–15) di-seek sesuai scroll, kartu berputar 3D.
export function Features() {
  return (
    <VideoScroll id="fitur" src="/videos/s2.mp4">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">Fitur</p>
      <h2 className="mt-4 max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-tighter text-white md:text-6xl">
        Ganti judul bagian ini.
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[20px] border border-white/10 bg-black/55 p-7 text-white backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-3 max-w-[48ch] text-white/70">{feature.body}</p>
          </div>
        ))}
      </div>
    </VideoScroll>
  );
}
