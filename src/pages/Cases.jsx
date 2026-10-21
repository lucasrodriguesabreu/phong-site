const cases = [
  {
    title: 'Modernização de ambientes bancários',
    text: 'Já trabalhamos com a modernização de ambientes bancários, que exigem alto processamento de dados e precisão nas transações.',
  },
  {
    title: 'Score e reputação',
    text: 'Atuamos em soluções de alto processamento para a verificação de score e reputação.',
  },
  {
    title: 'Manutenção de ambientes legados',
    text: 'Efetuamos a manutenção e mantemos em funcionamento ambientes legados.',
  },
  {
    title: 'Observabilidade',
    text: 'Tudo isso é feito prezando a observabilidade dos sistemas, com monitoramento e acompanhamento preciso.',
  },
]

export default function Cases() {
  return (
    <section className="section">
      <div className="container">
        <h1>Cases</h1>
        <p className="lead">Conheça as áreas em que a Phong atua e os problemas que resolvemos.</p>
        <div className="grid">
          {cases.map(({ title, text }) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
