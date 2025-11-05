export default function Culture() {
  const items = [
    {
      title: 'Street Fashion',
      desc: 'Cat Street and Center-Gai pulse with trends — from vintage gems to avant-garde fits.',
    },
    {
      title: 'Nonbei Yokocho',
      desc: 'Tiny alley bars serve yakitori, sake, and stories. Mindful etiquette keeps it cozy.',
    },
    {
      title: 'Music & Clubs',
      desc: 'From basement venues to rooftops, Shibuya’s soundscape runs late and loud.',
    },
  ];

  return (
    <section id="culture" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Culture</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A neighborhood that reinvents itself daily — creative, eclectic, and always in motion.
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

      <div id="nightlife" className="mt-10 rounded-xl bg-gradient-to-r from-rose-50 to-rose-100 p-6 border border-rose-200/60">
        <h3 className="font-semibold text-slate-900">Nightlife tip</h3>
        <p className="mt-1 text-sm text-slate-700">
          Arrive early for observatory sunsets, then wander back streets for izakaya hopping — many spots are small, cash-friendly, and intimate.
        </p>
      </div>
    </section>
  );
}
