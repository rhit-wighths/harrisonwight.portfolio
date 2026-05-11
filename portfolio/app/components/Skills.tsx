export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3>Languages</h3>
          <p className="text-gray-400">Python, JavaScript, Dart</p>
        </div>
        <div>
          <h3>Frontend</h3>
          <p className="text-gray-400">React, Flutter</p>
        </div>
      </div>
    </section>
  );
}