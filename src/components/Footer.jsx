import { COMPANY } from '../config.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {year} {COMPANY.name} — {COMPANY.tagline}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
