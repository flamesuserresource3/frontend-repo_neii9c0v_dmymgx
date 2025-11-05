import { Globe, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-900">
          <Globe className="h-5 w-5 text-rose-600" />
          <span>Discover Shibuya</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#highlights" className="hover:text-slate-900 inline-flex items-center gap-1">
            <MapPin className="h-4 w-4 text-rose-600" /> Places
          </a>
          <a href="#culture" className="hover:text-slate-900">Culture</a>
          <a href="#nightlife" className="hover:text-rose-700">Nightlife</a>
        </nav>
      </div>
    </header>
  );
}
