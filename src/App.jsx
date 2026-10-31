import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageSquareText,
  Quote,
} from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { COMPANY, whatsappLink } from './config.js'
import {
  blogTopics,
  cityPages,
  featureHighlights,
  heroMetrics,
  partners,
  quickActions,
  services,
  stack,
  steps,
  testimonials,
  trustStats,
} from './data.js'

const btnPrimary = 'inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90'
const btnGhost = 'inline-flex items-center justify-center gap-2 border border-current px-6 py-3.5 font-display text-sm font-semibold transition hover:bg-ink-foreground hover:text-ink'

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
              <p className="eyebrow text-sky">Outsourcing de TI para empresas</p>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Suporte de TI que mantém sua operação estável, segura e em crescimento.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">
                A Phong entrega suporte técnico, infraestrutura, segurança e gestão de tecnologia para empresas que não têm time de TI próprio e precisam de previsibilidade.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={whatsappLink('Olá! Quero solicitar um diagnóstico gratuito para minha empresa.')} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  Solicitar diagnóstico gratuito <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicos" className={btnGhost}>Conhecer serviços</a>
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
                <p className="eyebrow text-primary">Diferencial</p>
                <h2 className="mt-3 text-2xl font-bold">Operação de TI com atenção real ao negócio</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> <span>Atendimento rápido e com SLA claro.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> <span>Equipe especializada para empresas em crescimento.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> <span>Processos de segurança, suporte e melhoria contínua.</span></li>
                </ul>
                <div className="mt-8 border-t pt-5 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Tempo médio de resposta</span>
                    <strong className="text-primary">até 30 min</strong>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span>Contrato</span>
                    <strong className="text-primary">mensal com clareza</strong>
                  </div>
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

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Serviços</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tecnologia que resolve problema real de operação e crescimento.</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.id} id={service.id} className="rounded-3xl border bg-card p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.12em] text-primary">Problema</p>
                    <p className="mt-2">{service.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.12em] text-primary">Como a Phong resolve</p>
                    <p className="mt-2">{service.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.12em] text-primary">Resultado</p>
                    <p className="mt-2">{service.result}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-primary">Confiança</p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Apoio técnico que reduz riscos e entrega previsibilidade.</h2>
            </div>
            <a href={whatsappLink('Olá! Quero falar com um especialista da Phong sobre apoio de TI para minha empresa.')} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Falar com um especialista <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label} className="rounded-2xl border bg-card p-6">
                <div className="font-display text-4xl font-bold text-primary">{item.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">Clientes e parceiros</h3>
                <span className="text-sm text-muted-foreground">Espaço para logos</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {partners.map((partner) => (
                  <div key={partner} className="flex h-20 items-center justify-center rounded-2xl border border-dashed bg-white text-sm font-semibold text-slate-500">
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-6">
              <div className="flex items-center gap-3 text-primary">
                <Quote className="h-5 w-5" />
                <span className="eyebrow text-primary">Depoimentos</span>
              </div>
              <div className="mt-6 space-y-6">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.name} className="border-l-2 border-primary/40 pl-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
                    <footer className="mt-3 text-sm font-semibold text-slate-700">{testimonial.name}</footer>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-3xl border bg-card p-8">
            <h3 className="text-2xl font-bold">Certificações e parceiros</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {['Certificação de segurança', 'Processos operacionais', 'Parcerias de fabricantes', 'Metodologias de gestão'].map((item) => (
                <div key={item} className="rounded-2xl border border-dashed bg-background p-4 text-sm font-medium text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Como funciona</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Contratação simples, clara e sem complicação.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.t} className="rounded-3xl border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Etapa {index + 1}</span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-sm text-slate-700">
          <strong className="text-primary">Modelo de contratação:</strong> diagnóstico inicial, proposta com SLA, implantação e suporte contínuo, com contrato mensal e sem fidelidade abusiva quando houver alinhamento do cliente.
        </div>
      </section>

      <section id="diagnostico" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-sky">Diagnóstico gratuito</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Descubra os riscos da sua infraestrutura e do seu suporte.</h2>
            <p className="mt-6 max-w-xl text-ink-muted">
              Receba um diagnóstico inicial com visão prática sobre falhas, riscos e oportunidades de melhoria na sua operação de TI.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ink-muted">
              {featureHighlights.map((feature) => {
                const Icon = feature.icon
                return (
                  <li key={feature.text} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 text-sky" />
                    <span>{feature.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <form className="rounded-3xl border border-ink-foreground/10 bg-white p-6 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold">Solicite um diagnóstico</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">Nome</label>
                <input id="name" type="text" className="w-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="Seu nome" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">E-mail</label>
                <input id="email" type="email" className="w-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">Telefone</label>
                <input id="phone" type="tel" className="w-full border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">Mensagem</label>
                <textarea id="message" rows="4" className="w-full resize-none border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" placeholder="Conte um pouco sobre sua operação e o que precisa melhorar." />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                Enviar mensagem <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-primary">Conteúdo e SEO</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Conteúdo para atrair clientes certos e melhorar o posicionamento.</h2>
            <p className="mt-6 text-muted-foreground">
              A estrutura de páginas, blogs e conteúdos locais ajuda a aparecer para quem busca suporte de TI, gestão de infraestrutura e segurança digital.
            </p>
            <div className="mt-8 rounded-3xl border bg-card p-6">
              <h3 className="text-xl font-bold">Páginas por cidade</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cityPages.map((city) => (
                  <span key={city} className="rounded-full border bg-background px-3 py-2 text-sm text-slate-600">{city}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-8">
            <h3 className="text-2xl font-bold">10 temas de conteúdo para atrair clientes</h3>
            <ul className="mt-6 space-y-3">
              {blogTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-primary">Tecnologia e governança</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Estrutura para operação estável, segura e com controle real.</h2>
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
