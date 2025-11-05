export default function Culture() {
  const items = [
    {
      title: 'Tea Ceremony',
      desc: 'A mindful ritual celebrating harmony, respect, purity, and tranquility.',
    },
    {
      title: 'Onsen Etiquette',
      desc: 'Soak in natural hot springs the traditional way — rinse, relax, and restore.',
    },
    {
      title: 'Seasonal Festivals',
      desc: 'From cherry blossoms to autumn leaves, each season brings its own charm.',
    },
  ];

  return (
    <section id="culture" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Culture</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Timeless traditions meet modern living — a culture shaped by craftsmanship, community, and nature.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
          >
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
