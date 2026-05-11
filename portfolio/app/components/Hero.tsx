import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050505] grid md:grid-cols-2 items-center">
      
      {/* Left Side */}
      <div className="px-8 md:px-20">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Building analytics-driven software systems
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Software engineer focused on automation,
          sports analytics, and modern web experiences.
        </p>

        <div className="flex gap-4">
          <button className="bg-indigo-500 px-6 py-3 rounded-xl">
            View Projects
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl">
            Contact
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="h-[500px]">
        <HeroScene />
      </div>
    </section>
  );
}