"use client";

import Tilt from "react-parallax-tilt";

type SkillItem = {
    name: string;
    image: string;
};

const skillLogoMap: Record<string, string> = {
    JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    HTML: "https://cdn.simpleicons.org/html5/E34F26",
    CSS: "images/css3_logo.png",
    Python: "https://cdn.simpleicons.org/python/3776AB",
    Java: "images/java_logo.png",
    "C#": "images/Csharp_logo.png",
    SQL: "https://cdn.simpleicons.org/mysql/4479A1",
    Scheme: "images/racket_logo.svg",
    C: "https://cdn.simpleicons.org/c/00599C",
    Dart: "https://cdn.simpleicons.org/dart/0175C2",
    Ruby: "https://cdn.simpleicons.org/ruby/CC342D",
    React: "https://cdn.simpleicons.org/react/61DAFB",
    TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
    Flutter: "https://cdn.simpleicons.org/flutter/02569B",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
    "Three.js": "https://cdn.simpleicons.org/threedotjs/000000",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    Express: "https://cdn.simpleicons.org/express/000000",
    MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
    ".NET": "https://cdn.simpleicons.org/dotnet/512BD4",
    Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
    Postman: "https://cdn.simpleicons.org/postman/FF6C37",
    APIs: "https://cdn.simpleicons.org/openapiinitiative/6BA539",
};

function createSkillImage(label: string) {
    const palette = [
        ["#0f172a", "#22d3ee"],
        ["#111827", "#a78bfa"],
        ["#0f172a", "#34d399"],
        ["#111827", "#f59e0b"],
        ["#0f172a", "#fb7185"],
    ] as const;

    const [background, accent] = palette[label.length % palette.length];
    const initials = label
        .split(/[\s.]+/)
        .map((word) => word[0] ?? "")
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="18" fill="${background}" />
            <rect x="8" y="8" width="48" height="48" rx="14" fill="${accent}" opacity="0.18" />
            <circle cx="32" cy="32" r="14" fill="${accent}" opacity="0.9" />
            <text x="32" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#f8fafc">${initials}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const createSkillItems = (items: string[]): SkillItem[] =>
    items.map((item) => ({ name: item, image: skillLogoMap[item] ?? createSkillImage(item) }));

const languages = createSkillItems(["JavaScript", "HTML", "CSS", "Python", "Java", "C#", "SQL", "Scheme", "C", "Dart", "Ruby"]);
const frontend = createSkillItems(["React", "TypeScript", "Flutter", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]);
const backend = createSkillItems(["Node.js", "Express", "MongoDB", ".NET", "Firebase", "Postman", "APIs"]);

export default function Skills() {
    const skillCategories = [
        { title: "Languages", items: languages },
        { title: "Frontend", items: frontend },
        { title: "Backend", items: backend },
    ];

    return (
        <section className="max-w-6xl mx-auto px-12 py-24 relative overflow-hidden">
            {/* <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_40%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" /> */}

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative z-10">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {skillCategories.map((category) => (
                    // <Tilt
                    //     key={category.title}
                    //     tiltMaxAngleX={10}
                    //     tiltMaxAngleY={10}
                    //     perspective={1000}
                    //     transitionSpeed={500}
                    //     scale={1.02}
                    //     glareEnable={true}
                    //     glareMaxOpacity={0.2}
                    //     glareBorderRadius="1.5rem"
                    //     className="group overflow-hidden rounded-[1.5rem] bg-slate-950/70 shadow-[0_20px_70px_rgba(2,6,23,0.35)] ring-1 ring-white/10 backdrop-blur-xl"
                    // >
                        <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-slate-900/80 to-slate-950/90 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_38%)] opacity-90 pointer-events-none" />
                            <h3 className="text-2xl font-semibold mb-6 text-white relative z-10">
                                {category.title}
                            </h3>
                            <div className="space-y-3 relative z-10">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                                    >
                                        <img
                                            src={item.image}
                                            alt={`${item.name} icon`}
                                            className="h-9 w-9 rounded-lg object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                                        />
                                        <span className="text-sm font-medium text-slate-200">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    // </Tilt>
                ))}
            </div>
        </section>
    );
}