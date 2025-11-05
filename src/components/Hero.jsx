export default function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-sm">
            Japan awaits.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
            From neon-lit streets to tranquil temples, discover a timeless blend of tradition and innovation across the Land of the Rising Sun.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 transition"
            >
              Explore highlights
            </a>
            <a
              href="#cuisine"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition"
            >
              Taste Japan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
