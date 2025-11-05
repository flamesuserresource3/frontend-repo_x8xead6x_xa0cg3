import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-50, Math.min(50, px / 5)));
    y.set(Math.max(-50, Math.min(50, py / 5)));
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-red-400/80">Bem-vindo à Bright Auto</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Importação de Viaturas Futuristas
              <span className="block bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">Rápida, Segura e Transparente</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              Tratamos de todo o processo: pesquisa, inspeção, transporte e legalização. Experiência premium com
              comunicação clara a cada etapa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#planos" className="px-5 py-3 rounded-md bg-red-600 hover:bg-red-500 transition font-medium shadow-[0_0_30px_rgba(220,38,38,0.55)]">Ver Planos</a>
              <a href="#simulador" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 transition font-medium">Simular ISV</a>
            </div>
          </div>

          <motion.div
            onMouseMove={handleMouse}
            style={{ rotateX, rotateY }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/40"
          >
            <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
