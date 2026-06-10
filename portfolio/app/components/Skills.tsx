"use client";

import Tilt from "react-parallax-tilt";

const languages = ["JavaScript", "HTML", "CSS", "Python", "Java", "C#", "SQL", "Scheme", "C", "Dart", "Ruby"];
const frontend = ["React", "TypeScript","Flutter", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"];
const backend = ["Node.js", "Express", "MongoDB", ".NET", "Firebase", "Postman", "APIs"];

export default function Skills() {
    const skillCategories = [
        { title: "Languages", items: languages },
        { title: "Frontend", items: frontend },
        { title: "Backend", items: backend },
    ];

    return (
        <section className="max-w-6xl mx-auto px-12 py-24 relative overflow-hidden">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_40%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative z-10">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {skillCategories.map((category) => (
                    <Tilt
                        key={category.title}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        transitionSpeed={500}
                        scale={1.02}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareBorderRadius="1.5rem"
                        className="group overflow-hidden rounded-[1.5rem] bg-slate-950/70 shadow-[0_20px_70px_rgba(2,6,23,0.35)] ring-1 ring-white/10 backdrop-blur-xl"
                    >
                        <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-slate-900/80 to-slate-950/90 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_38%)] opacity-90 pointer-events-none" />
                            <h3 className="text-2xl font-semibold mb-6 text-white relative z-10">
                                {category.title}
                            </h3>
                            <div className="space-y-3 relative z-10">
                                {category.items.map((item) => (
                                    <p
                                        key={item}
                                        className="text-sm text-slate-300 pl-3 border-l-2 border-cyan-400"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}