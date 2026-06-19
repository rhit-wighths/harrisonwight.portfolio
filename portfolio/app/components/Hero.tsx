import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#050816_45%,_#020617_100%)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Software engineer • analytics • product-minded
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Building thoughtful software with real-world impact.
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
            I create polished applications and data-driven experiences that turn complex problems into intuitive, useful products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          {/* <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Full-stack development",
              "Sports analytics",
              "Automation tools",
              "Modern web experiences",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div> */}
        </div>

        <div className="relative h-[420px] overflow-hidden md:h-[520px]">
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_35%)]" /> */}
          <HeroScene />
        </div>
      </div>
    </section>
  );
}