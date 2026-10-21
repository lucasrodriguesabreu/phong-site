import { COMPANY } from '../config.js'

const values = [
  'Ética e transparência',
  'Compromisso com o resultado',
  'Inovação constante',
  'Parceria com o cliente',
  'Simplicidade',
]

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1>Sobre nós</h1>
        <p className="lead">
          A {COMPANY.name} é uma consultoria de TI criada para aproximar a tecnologia das necessidades reais
          de cada negócio.
        </p>
        <div className="grid">
          <article className="card">
            <h3>Nossa missão</h3>
            <p>
              Nossa missão é transformar desafios em oportunidades por meio da tecnologia, desenvolvendo
              soluções inovadoras que integram pessoas e processos, geram valor para os negócios e constroem
              organizações mais conectadas, sustentáveis e preparadas para o futuro.
            </p>
          </article>
          <article className="card">
            <h3>Nossa visão</h3>
            <p>
              Nossa visão é ser referência consolidada em tecnologia e transformação digital, reconhecida pela
              excelência, inovação e responsabilidade na entrega de soluções que impulsionam negócios,
              conectam pessoas e geram valor sustentável.
            </p>
          </article>
          <article className="card">
            <h3>Nossos valores</h3>
            <ul>
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
