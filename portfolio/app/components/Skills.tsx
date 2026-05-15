const languages = ["JavaScript", "HTML", "CSS", "Python", "Java", "C#", "SQL", "Scheme", "C", "Dart"];
const frontend = ["React", "TypeScript","Flutter", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"];
const backend = ["Node.js", "Express", "MongoDB", ".NET", "Firebase", "Postman", "APIs"];

export default function Skills() {
    const skillCategories = [
        { title: "Languages", items: languages },
        { title: "Frontend", items: frontend },
        { title: "Backend", items: backend },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            {category.title}
                        </h3>
                        <div className="space-y-3">
                            {category.items.map((item) => (
                                <p
                                    key={item}
                                    className="text-gray-300 hover:text-blue-400 transition-colors pl-3 border-l-2 border-blue-500"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}