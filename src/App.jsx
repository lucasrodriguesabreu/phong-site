import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { whatsappLink } from './config.js'
import { heroMetrics, pillars, cases, models, steps, stack } from './data.js'

const btnPrimary = 'inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90'
const btnGhost = 'inline-flex items-center gap-2 border border-current px-6 py-3.5 font-display text-sm font-semibold transition hover:bg-ink-foreground hover:text-ink'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[380px] w-[380px] rounded-full bg-sky/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <p className="eyebrow text-sky">Engenharia de Software · Cloud · Plataforma</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Do código à nuvem, engenharia que <span className="text-sky">entrega resultado</span> de negócio.
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-ink-muted md:text-xl">
            Projetamos, construímos e operamos produtos ponta a ponta — de aplicações em React, Node.js, Go e Python
            à infraestrutura em Azure e GCP provisionada com Terraform e orquestrada em Kubernetes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Solicitar Diagnóstico Técnico <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#cases" className={btnGhost}>Ver Soluções & Cases</a>
          </div>
          <div className="mt-20 grid gap-px overflow-hidden border border-ink-foreground/10 bg-ink-foreground/10 sm:grid-cols-3">
            {heroMetrics.map((m) => (
              <div key={m.l} className="bg-ink p-6">
                <div className="font-display text-4xl font-bold">{m.v}</div>
                <div className="mt-2 text-sm text-ink-muted">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">O que fazemos</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Dois pilares, um único time responsável pelo resultado.</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="border bg-card">
              <div className={`h-1.5 ${p.color}`} />
              <div className="p-8">
                <span className="eyebrow text-muted-foreground">{p.tag}</span>
                <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                <div className="mt-8 space-y-6">
                  {p.items.map((it) => (
                    <div key={it.t} className="flex gap-4 border-t pt-6">
                      <it.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h4 className="font-semibold">{it.t}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-primary">Cases de sucesso</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Impacto medido em minutos, SLAs e disponibilidade.</h2>
          <div className="mt-14 space-y-10">
            {cases.map((c, idx) => (
              <article key={c.title} className="border bg-card">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b px-8 py-5">
                  <span className="bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.badge}</span>
                  <span className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4" /> Em produção
                  </span>
                </div>
                <div className="p-8">
                  <span className="font-display text-sm text-muted-foreground">Case 0{idx + 1}</span>
                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">{c.title}</h3>
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[{ k: 'Problema', v: c.problem }, { k: 'Solução', v: c.solution }].map((b) => (
                      <div key={b.k}>
                        <p className="eyebrow text-primary">{b.k}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.v}</p>
                      </div>
                    ))}
                    <div className="bg-ink p-6 text-ink-foreground">
                      <p className="eyebrow text-sky">Impacto</p>
                      <div className="mt-4 space-y-4">
                        {c.metrics.map((m) => (
                          <div key={m.l} className="border-b border-ink-foreground/10 pb-3 last:border-0">
                            <div className="font-display text-3xl font-bold">{m.v}</div>
                            <div className="text-xs text-ink-muted">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section id="modelos" className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-primary">Como trabalhamos</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Modelos de contratação transparentes.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {models.map((m) => (
            <div key={m.n} className={`flex flex-col border p-8 ${m.highlight ? 'bg-ink text-ink-foreground' : 'bg-card'}`}>
              <div className="flex items-center justify-between">
                <span className={`font-display text-5xl font-bold ${m.highlight ? 'text-sky' : 'text-primary'}`}>{m.n}</span>
                {m.highlight && <span className="bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">Quick win</span>}
              </div>
              <h3 className="mt-6 text-xl font-bold">{m.t}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${m.highlight ? 'text-ink-muted' : 'text-muted-foreground'}`}>{m.d}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {m.b.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${m.highlight ? 'text-sky' : 'text-primary'}`} />{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-px border bg-border md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-card p-6">
              <span className="text-xs text-muted-foreground">Etapa {i + 1}</span>
              <div className="mt-2 flex items-center gap-2 font-semibold"><s.icon className="h-4 w-4 text-primary" />{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-primary">Tech stack & ecossistema</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Ferramentas que dominamos em produção.</h2>
          <div className="mt-12 divide-y border bg-card">
            {stack.map((s) => (
              <div key={s.c} className="grid gap-4 p-6 md:grid-cols-[260px_1fr] md:items-center">
                <h3 className="font-display font-semibold">{s.c}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.i.map((t) => <span key={t} className="border bg-background px-3 py-1.5 text-sm">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
