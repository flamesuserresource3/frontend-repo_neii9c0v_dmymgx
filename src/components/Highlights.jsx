import { MapPin, Star, Camera } from 'lucide-react';

const spots = [
  {
    title: 'Shibuya Crossing',
    desc: 'Join the world-famous scramble and feel the heartbeat of Tokyo at Hachiko Square.',
    icon: <MapPin className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Hachiko Statue',
    desc: 'Pay respects to Japan’s most loyal dog — a beloved local meeting point.',
    icon: <Star className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1519059063284-0bbfd04f0f35?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Shibuya Sky',
    desc: 'Take in panoramic views from the rooftop observatory above Shibuya Scramble Square.',
    icon: <Camera className="h-5 w-5 text-rose-600" />,
    image:
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd2f9a?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Highlights</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Essential Shibuya moments — from the bustling crossing to sky-high views and local icons.
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
