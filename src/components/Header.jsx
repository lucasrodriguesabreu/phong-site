import { COMPANY, whatsappLink } from '../config.js'
import logo from '../assets/logo.png'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#cases', label: 'Cases' },
  { href: '#modelos', label: 'Como trabalhamos' },
  { href: '#stack', label: 'Stack' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" aria-label={`${COMPANY.name} — ${COMPANY.tagline}`}>
          <img src={logo} alt={`${COMPANY.name} — ${COMPANY.tagline}`} className="block h-10 w-auto" />
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary">{l.label}</a>
          ))}
        </nav>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary px-4 py-2 font-display text-xs font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Fale conosco
        </a>
      </div>
    </header>
  )
}
