import { COMPANY } from '../config.js'
import logo from '../assets/logo.png'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#modelos', label: 'Como contratar' },
  { href: '#lab', label: 'Lab' },
  { href: '#processo', label: 'Método' },
  { href: '#cases', label: 'Cases' },
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
          href="#diagnostico"
          className="bg-primary px-4 py-2 font-display text-xs font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  )
}
