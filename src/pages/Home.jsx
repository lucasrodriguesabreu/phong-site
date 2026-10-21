import { Link } from 'react-router-dom'
import { COMPANY, whatsappLink } from '../config.js'

const pillars = [
  {
    title: 'Evolução digital',
    text: 'Evoluímos seus sistemas continuamente, entregando novas funcionalidades sem interromper a operação.',
  },
  {
    title: 'Modernização',
    text: 'Modernizamos plataformas e arquiteturas para ganhar desempenho, escala e segurança.',
  },
  {
    title: 'Sustentação de legados',
    text: 'Mantemos em funcionamento os ambientes legados dos quais o seu negócio depende.',
  },
  {
    title: 'Observabilidade',
    text: 'Monitoramento e acompanhamento preciso para enxergar o que acontece nos seus sistemas.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            Evolução e modernização <em>digital</em> para o seu negócio.
          </h1>
          <p>
            A {COMPANY.name} é uma consultoria de TI que entrega evolução e modernização digital, do ambiente
            legado às plataformas de alto desempenho.
          </p>
          <div className="hero__actions">
            <a className="btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Fale conosco no WhatsApp
            </a>
            <Link className="btn btn--outline" to="/cases">
              Ver nossos cases
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>O que entregamos</h2>
          <div className="grid">
            {pillars.map(({ title, text }) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
