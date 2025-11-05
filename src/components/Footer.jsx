import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p className="flex items-center gap-1">
          Made with <Heart className="h-4 w-4 text-rose-600" aria-hidden="true" /> for Japan enthusiasts
        </p>
        <p className="text-xs text-slate-500">Photos courtesy of Unsplash</p>
      </div>
    </footer>
  );
}
