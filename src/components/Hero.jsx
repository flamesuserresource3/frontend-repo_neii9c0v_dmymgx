export default function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')", // Shibuya Crossing at night
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-28 md:py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-sm">
            Neon energy. Endless motion.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
            Dive into Shibuya — Tokyo’s epicenter of fashion, food, and nightlife. From the iconic
            scramble crossing to sky-high views, discover the pulse of the city.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 transition"
            >
              Explore highlights
            </a>
            <a
              href="#culture"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition"
            >
              Local culture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
