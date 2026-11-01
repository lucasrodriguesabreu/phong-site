import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
} from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { whatsappLink } from './config.js'
import {
  cases,
  fronts,
  heroMetrics,
  lab,
  models,
  needOptions,
  quickActions,
  services,
  stack,
  steps,
} from './data.js'

const btnPrimary = 'inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90'
const btnGhost = 'inline-flex items-center justify-center gap-2 border border-current px-6 py-3.5 font-display text-sm font-semibold transition hover:bg-ink-foreground hover:text-ink'
const inputClass = 'w-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary'

function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', need: needOptions[0], message: '' })
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const text = [
      `Olá! Sou ${form.name}${form.company ? ` da ${form.company}` : ''}.`,
      `Preciso de: ${form.need}.`,
      form.message && `Contexto: ${form.message}`,
    ].filter(Boolean).join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-ink-foreground/10 bg-white p-6 text-slate-900 shadow-2xl">
      <h3 className="text-2xl font-bold">Conte o que você precisa</h3>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">Nome</label>
          <input id="name" type="text" required value={form.name} onChange={set('name')} className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="company">Empresa</label>
          <input id="company" type="text" value={form.company} onChange={set('company')} className={inputClass} placeholder="Nome da empresa" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="need">Preciso de</label>
          <select id="need" value={form.need} onChange={set('need')} className={inputClass}>
            {needOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">Contexto</label>
          <textarea id="message" rows="4" value={form.message} onChange={set('message')} className={`${inputClass} resize-none`} placeholder="Conte um pouco sobre o desafio, o prazo e o tamanho do time." />
        </div>
        <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Continuar no WhatsApp <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[380px] w-[380px] rounded-full bg-sky/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-sky">Squads, IA e infraestrutura</p>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Squads e IA que entram em produção, com custo que cabe no seu orçamento.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">
                A Phong coloca engenheiros sêniores, projetos de IA e infraestrutura cloud para rodar dentro da sua operação, sem o custo e o prazo de montar tudo internamente.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={whatsappLink('Olá! Quero montar um squad com a Phong.')} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  Montar meu squad <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#diagnostico" className={btnGhost}>Pedir um diagnóstico</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-muted">
                {quickActions.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-ink-foreground/15 bg-white/5 px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 text-sky" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-ink-foreground/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
                <p className="eyebrow text-primary">Três frentes, um parceiro</p>
                <h2 className="mt-3 text-2xl font-bold">Você entra por onde faz sentido</h2>
                <ul className="mt-6 space-y-4">
                  {fronts.map((f) => (
                    <li key={f.id} className="flex gap-3">
                      <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span><strong>{f.title}.</strong></span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t pt-5 text-sm text-slate-600">
                  Cada frente funciona sozinha e todas compartilham o mesmo time e a mesma plataforma.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((m) => (
              <div key={m.l} className="bg-ink p-6">
                <div className="font-display text-3xl font-bold md:text-4xl">{m.v}</div>
                <div className="mt-2 text-sm text-ink-muted">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">O que fazemos</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Três frentes. Um objetivo: entregar o que funciona.</h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {fronts.map((f) => (
            <article key={f.id} className="rounded-3xl border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{f.title}</h3>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <p className="font-semibold uppercase tracking-[0.12em] text-primary">Problema</p>
                  <p className="mt-2">{f.problem}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.12em] text-primary">Como a Phong resolve</p>
                  <p className="mt-2">{f.solution}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.12em] text-primary">Resultado</p>
                  <p className="mt-2">{f.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicos" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">Serviços</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Da infraestrutura à IA, com engenharia de verdade.</h2>
          </div>
          <div className="mt-14 space-y-8">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="eyebrow text-primary">{s.tag}</p>
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                  </div>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {s.items.map((it) => (
                    <div key={it.t} className="border-t pt-5">
                      <it.icon className="h-5 w-5 text-primary" />
                      <h4 className="mt-3 font-display font-semibold">{it.t}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Como contratar</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Você escolhe quanto de time e de responsabilidade quer delegar.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {models.map((m) => (
            <div key={m.n} className={`flex flex-col rounded-3xl border p-6 ${m.highlight ? 'border-primary/40 bg-primary/5' : 'bg-card'}`}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{m.n}</span>
              <h3 className="mt-4 text-xl font-bold">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
              <p className="mt-4 text-sm font-semibold text-slate-700">Quando escolher: <span className="font-normal text-muted-foreground">{m.when}</span></p>
              <ul className="mt-5 space-y-2">
                {m.b.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Olá! Tenho interesse no modelo "${m.t}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-semibold text-primary hover:underline"
              >
                Falar sobre este modelo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Não sabe qual escolher? Comece pelo assessment e decida com um plano na mão.</p>
      </section>

      <section id="lab" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="eyebrow text-sky">Phong Lab</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Teste a ideia antes de escalar o investimento.</h2>
            <p className="mt-6 text-ink-muted">{lab.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lab.items.map((it) => (
              <div key={it.t} className="rounded-2xl border border-ink-foreground/15 bg-white/5 p-6">
                <it.icon className="h-6 w-6 text-sky" />
                <h3 className="mt-4 text-xl font-bold">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{it.d}</p>
              </div>
            ))}
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-2 xl:grid-cols-4">
            {lab.steps.map((s, i) => (
              <li key={s} className="bg-ink p-5 text-sm">
                <span className="eyebrow text-sky">Passo {i + 1}</span>
                <p className="mt-2 font-display font-semibold">{s}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <a href={whatsappLink('Olá! Quero validar uma ideia no Phong Lab.')} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Validar uma ideia <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Método</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Cada fase só abre a próxima com resultado na mão.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.t} className="rounded-3xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Fase {index + 1}</span>
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{step.exit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">Cases</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Engenharia com resultado medido.</h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {cases.map((c) => (
              <article key={c.title} className="rounded-3xl border bg-card p-8 shadow-sm">
                <span className="eyebrow text-primary">{c.badge}</span>
                <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p><strong className="text-slate-700">Desafio.</strong> {c.problem}</p>
                  <p><strong className="text-slate-700">Solução.</strong> {c.solution}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-2xl font-bold text-primary">{m.v}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">Tecnologias</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Stack moderna, escolhida pelo seu contexto.</h2>
        <div className="mt-12 divide-y border bg-card">
          {stack.map((s) => (
            <div key={s.c} className="grid gap-4 p-6 md:grid-cols-[260px_1fr] md:items-center">
              <h3 className="font-display font-semibold">{s.c}</h3>
              <div className="flex flex-wrap gap-2">
                {s.i.map((t) => <span key={t} className="border bg-background px-3 py-1.5 text-sm text-slate-700">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="diagnostico" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-sky">Primeiro passo</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Conte o desafio. Voltamos com um plano, não com um catálogo.</h2>
            <p className="mt-6 max-w-xl text-ink-muted">
              Em uma conversa de 30 minutos entendemos seu contexto, gargalos e metas e indicamos o modelo de contratação mais adequado, sem compromisso.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ink-muted">
              {['Squad, IA ou infraestrutura: se não souber, escolha "Ainda não sei"', 'Resposta com direcionamento técnico claro', 'Sem fidelidade abusiva'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Phong no WhatsApp"
        className="whatsapp-float"
      >
        <MessageSquareText className="h-6 w-6" />
      </a>

      <Footer />
    </div>
  )
}
