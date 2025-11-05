import React from 'react';
import { Menu, Car, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-red-600 to-red-400 grid place-content-center shadow-[0_0_30px_rgba(220,38,38,0.6)]">
            <Car className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-widest text-white/60">Bright</p>
            <p className="font-semibold text-white">Auto</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#processo" className="hover:text-white transition">Processo</a>
          <a href="#planos" className="hover:text-white transition">Planos</a>
          <a href="#addons" className="hover:text-white transition">Add-ons</a>
          <a href="#simulador" className="hover:text-white transition">Simulador ISV</a>
        </nav>

        <a href="#contacto" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 transition text-sm font-medium shadow-[0_0_20px_rgba(220,38,38,0.5)]">
          <Phone className="h-4 w-4" />
          Contacto
        </a>
      </div>
    </header>
  );
}
