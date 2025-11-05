import React, { useMemo, useState } from 'react';
import { Check, Clock, Shield, Truck, Sparkles, Gauge, Battery, Fuel, ChevronRight, ArrowRight, Wrench, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Processo() {
  const steps = [
    { title: 'Pesquisa e Seleção', desc: 'Encontramos a viatura ideal no mercado internacional.', icon: Sparkles },
    { title: 'Inspeção Técnica', desc: 'Verificações detalhadas e histórico do veículo.', icon: ShieldCheck },
    { title: 'Transporte Premium', desc: 'Logística otimizada com tracking em tempo real.', icon: Truck },
    { title: 'Legalização', desc: 'Documentação, impostos e matrículas tratadas por nós.', icon: Shield },
  ];

  return (
    <section id="processo" className="relative py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Processo de Importação</h2>
          <p className="mt-2 text-white/60">Linha do tempo com cartões 3D de aspeto futurista.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl p-5 bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(220,38,38,0.15)]"
              style={{ perspective: 1000 }}
            >
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-red-600/20 blur-xl" />
              <div className="relative">
                <div className="h-12 w-12 rounded-lg bg-red-600/20 border border-red-500/30 grid place-content-center text-red-300 mb-4">
                  {React.createElement(s.icon, { className: 'h-6 w-6' })}
                </div>
                <h3 className="font-semibold">{i + 1}. {s.title}</h3>
                <p className="text-sm text-white/60 mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planos() {
  const planos = [
    {
      nome: 'Essencial',
      preco: '€ 490',
      destaque: false,
      perks: ['Consulta de mercado', 'Validação de documentação', 'Apoio na compra'],
    },
    {
      nome: 'Avançado',
      preco: '€ 1.290',
      destaque: true,
      perks: ['Inspeção completa', 'Transporte seguro', 'Gestão de impostos', 'Acompanhamento total'],
    },
    {
      nome: 'Elite',
      preco: '€ 2.490',
      destaque: false,
      perks: ['Concierge total', 'Entrega em domicílio', 'Prioridade máxima', 'Relatórios detalhados'],
    },
  ];

  return (
    <section id="planos" className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Planos de Importação</h2>
          <p className="mt-2 text-white/60">Planos futuristas que se adaptam às suas necessidades.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {planos.map((p) => (
            <motion.div
              key={p.nome}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative rounded-2xl p-6 border ${p.destaque ? 'bg-gradient-to-br from-red-700/30 via-red-600/10 to-zinc-900 border-red-500/40 shadow-[0_20px_60px_rgba(220,38,38,0.25)]' : 'bg-gradient-to-br from-zinc-900 to-black border-white/10'}`}
            >
              {p.destaque && (
                <div className="absolute -top-3 right-6 px-3 py-1 text-xs rounded-full bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                  Mais popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{p.nome}</h3>
              <div className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-red-400 to-red-200 text-transparent bg-clip-text">{p.preco}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-white/80">
                    <Check className="h-4 w-4 text-red-400" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 transition">
                Escolher plano <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddOns() {
  const addons = [
    { title: 'Transporte Premium', desc: 'Veículo em camião fechado com seguro total.', icon: Truck },
    { title: 'Inspeção Pré-compra', desc: 'Checklist profissional com relatório fotográfico.', icon: Wrench },
    { title: 'Seguro de Viagem', desc: 'Cobertura completa durante todo o transporte.', icon: Shield },
    { title: 'Acompanhamento VIP', desc: 'Consultor dedicado 24/7 para o seu processo.', icon: Sparkles },
  ];

  return (
    <section id="addons" className="relative py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Add-ons</h2>
          <p className="mt-2 text-white/60">Melhore a sua experiência com serviços adicionais.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {addons.map((a) => (
            <motion.div
              key={a.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl p-5 bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-red-500/40 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="h-12 w-12 rounded-lg bg-red-600/20 border border-red-500/30 grid place-content-center text-red-300 mb-4">
                {React.createElement(a.icon, { className: 'h-6 w-6' })}
              </div>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-white/60 mt-1">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimuladorISV() {
  const [data, setData] = useState({
    pais: '',
    estado: '',
    combustivel: '',
    testes: '',
    cilindrada: '',
    co2: '',
  });
  const [step, setStep] = useState(0);

  function next() {
    setStep((s) => s + 1);
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  const preco = useMemo(() => {
    if (data.combustivel === 'Elétrico') return 0;
    // Regras fictícias e simplificadas para fins de demonstração visual
    let base = 0;
    const cilindrada = parseInt(data.cilindrada || '0', 10);
    const co2 = parseInt(data.co2 || '0', 10);

    if (data.combustivel === 'Gasolina') {
      base = cilindrada * 0.08 + co2 * 3;
    } else if (data.combustivel === 'Diesel') {
      base = cilindrada * 0.09 + co2 * 3.2;
    }
    if (data.estado === 'Novo' && data.testes === 'WLTP') base *= 1.05;
    if (data.pais === 'País Terceiro') base *= 1.1;
    return Math.max(0, Math.round(base));
  }, [data]);

  const canNext = useMemo(() => {
    switch (step) {
      case 0: return !!data.pais;
      case 1: return !!data.estado;
      case 2: return !!data.combustivel;
      case 3:
        if (data.combustivel === 'Gasolina' || data.combustivel === 'Diesel') return !!data.testes;
        return true;
      case 4:
        return data.cilindrada !== '' && data.co2 !== '';
      default:
        return true;
    }
  }, [step, data]);

  const steps = [
    {
      label: 'País da matrícula do veículo',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Estado-membro da UE', 'País Terceiro'].map((v) => (
            <button
              key={v}
              onClick={() => setData({ ...data, pais: v })}
              className={`px-4 py-3 rounded-lg border ${data.pais === v ? 'border-red-500 bg-red-600/10 text-white' : 'border-white/10 text-white/80 hover:bg-white/5'}`}
            >
              {v}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: 'Estado da Viatura',
      content: (
        <div className="grid grid-cols-2 gap-3">
          {['Novo', 'Used'].map((v) => (
            <button key={v} onClick={() => setData({ ...data, estado: v })} className={`px-4 py-3 rounded-lg border ${data.estado === v ? 'border-red-500 bg-red-600/10 text-white' : 'border-white/10 text-white/80 hover:bg-white/5'}`}>{v}</button>
          ))}
        </div>
      ),
    },
    {
      label: 'Tipo de combustível',
      content: (
        <div className="grid grid-cols-3 gap-3">
          {['Gasolina', 'Diesel', 'Elétrico'].map((v) => (
            <button key={v} onClick={() => setData({ ...data, combustivel: v })} className={`px-4 py-3 rounded-lg border ${data.combustivel === v ? 'border-red-500 bg-red-600/10 text-white' : 'border-white/10 text-white/80 hover:bg-white/5'}`}>{v}</button>
          ))}
        </div>
      ),
    },
    ...(data.combustivel === 'Gasolina' || data.combustivel === 'Diesel'
      ? [{
          label: 'Tipo de Testes (Novo)',
          content: (
            <div className="grid grid-cols-2 gap-3">
              {['NEDC', 'WLTP'].map((v) => (
                <button key={v} onClick={() => setData({ ...data, testes: v })} className={`px-4 py-3 rounded-lg border ${data.testes === v ? 'border-red-500 bg-red-600/10 text-white' : 'border-white/10 text-white/80 hover:bg-white/5'}`}>{v}</button>
              ))}
            </div>
          ),
        }]
      : []),
    {
      label: 'Cilindrada e Emissão de CO₂',
      content: (
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="number"
            min="0"
            value={data.cilindrada}
            onChange={(e) => setData({ ...data, cilindrada: e.target.value })}
            placeholder="Cilindrada (cc)"
            className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500"
          />
          <input
            type="number"
            min="0"
            value={data.co2}
            onChange={(e) => setData({ ...data, co2: e.target.value })}
            placeholder="Emissão de CO₂ (g/km)"
            className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-red-500"
          />
        </div>
      ),
    },
  ];

  const totalSteps = steps.length;

  return (
    <section id="simulador" className="relative py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Simulador ISV</h2>
          <p className="mt-2 text-white/60">Responda a algumas perguntas e veja uma estimativa do ISV.</p>
        </div>

        <div className="rounded-2xl p-6 bg-gradient-to-br from-zinc-900 to-black border border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-white/70">Passo {Math.min(step + 1, totalSteps)} de {totalSteps}</div>
            <div className="h-1 w-1/2 rounded bg-white/10">
              <div className="h-full rounded bg-red-600" style={{ width: `${(Math.min(step, totalSteps - 1) + 1) / totalSteps * 100}%` }} />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{steps[Math.min(step, totalSteps - 1)].label}</h3>
            {steps[Math.min(step, totalSteps - 1)].content}
          </div>

          <div className="flex items-center justify-between">
            <button onClick={back} disabled={step === 0} className="px-4 py-2 rounded-md bg-white/10 disabled:opacity-40">
              Anterior
            </button>
            {step < totalSteps - 1 ? (
              <button onClick={next} disabled={!canNext} className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 disabled:opacity-40">
                Próximo
              </button>
            ) : (
              <div className="text-right">
                <div className="text-sm text-white/60">ISV Estimado</div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-red-400 to-red-200 text-transparent bg-clip-text">
                  {data.combustivel === 'Elétrico' ? '€ 0' : `€ ${preco.toLocaleString('pt-PT')}`}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-red-700/30 via-red-600/10 to-zinc-900 border border-red-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Pronto para acelerar o seu projeto?</h3>
            <p className="text-white/70 mt-1">Fale connosco e receba uma proposta personalizada.</p>
          </div>
          <a href="#" className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 transition font-semibold shadow-[0_0_30px_rgba(220,38,38,0.45)]">Contactar</a>
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <>
      <Processo />
      <Planos />
      <AddOns />
      <SimuladorISV />
      <Contacto />
    </>
  );
}
