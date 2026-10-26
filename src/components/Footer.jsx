import { ArrowRight, ExternalLink, Mail, MessageCircle } from 'lucide-react'
import { COMPANY, whatsappLink } from '../config.js'

const year = new Date().getFullYear()

const contacts = [
  { icon: MessageCircle, t: 'WhatsApp Business', d: 'Resposta em horário comercial', href: whatsappLink(), external: true },
  COMPANY.linkedinUrl && { icon: ExternalLink, t: 'LinkedIn', d: 'Acompanhe nossos conteúdos', href: COMPANY.linkedinUrl, external: true },
  COMPANY.email && { icon: Mail, t: 'E-mail', d: COMPANY.email, href: `mailto:${COMPANY.email}` },
].filter(Boolean)

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sky">Vamos conversar</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Agende uma reunião de discovery de 30 minutos.</h2>
            <p className="mt-6 max-w-lg text-ink-muted">
              Entendemos seu contexto, gargalos e metas. Você sai com um direcionamento técnico claro — sem compromisso.
            </p>
          </div>
          <div className="grid gap-4 self-end">
            {contacts.map((c) => (
              <a
                key={c.t}
                href={c.href}
                {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex items-center justify-between border border-ink-foreground/15 p-5 transition hover:border-sky"
              >
                <span className="flex items-center gap-4">
                  <c.icon className="h-5 w-5 text-sky" />
                  <span>
                    <span className="block font-semibold">{c.t}</span>
                    <span className="text-sm text-ink-muted">{c.d}</span>
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-ink-foreground/10 pt-8 text-sm text-ink-muted">
          <span className="font-display font-bold text-ink-foreground">{COMPANY.name}<span className="text-sky">.</span></span>
          <span>© {year} {COMPANY.name} — {COMPANY.tagline}. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
