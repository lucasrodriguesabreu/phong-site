import { NavLink, Link } from 'react-router-dom'
import { COMPANY } from '../config.js'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/cases', label: 'Cases' },
  { to: '/sobre', label: 'Sobre nós' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          <img src={logo} alt={`${COMPANY.name} — ${COMPANY.tagline}`} />
        </Link>
        <nav className="nav" aria-label="Principal">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
