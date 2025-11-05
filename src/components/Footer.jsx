import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Bright Auto. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <a href="#processo" className="hover:text-white">Processo</a>
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href="#addons" className="hover:text-white">Add-ons</a>
          <a href="#simulador" className="hover:text-white">Simulador ISV</a>
        </div>
      </div>
    </footer>
  );
}
