import { MapPin, Star, Camera } from 'lucide-react';

const spots = [
  {
    title: 'Kyoto Temples',
    desc: 'Walk through centuries of history among serene shrines and bamboo forests.',
    icon: <MapPin className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Tokyo Nights',
    desc: 'Experience dazzling skylines, pop culture, and cutting-edge cuisine.',
    icon: <Star className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Mount Fuji',
    desc: 'Catch sunrise over Japan’s iconic peak and surrounding lakes.',
    icon: <Camera className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1526483360412-f4dbaf036963?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Highlights</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A few unmissable moments — from tranquil temples to neon nights — to inspire your itinerary.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {spots.map((s) => (
          <article
            key={s.title}
            className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="h-44 w-full overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover group-hover:scale-105 transition"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-slate-700">
                {s.icon}
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
