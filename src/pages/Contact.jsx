import { useState } from 'react'
import { whatsappLink } from '../config.js'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const text = `Olá! Meu nome é ${name.trim()}. ${message.trim()}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section">
      <div className="container container--narrow">
        <h1>Contato</h1>
        <p className="lead">Conte um pouco sobre o que você precisa e continue a conversa pelo WhatsApp.</p>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Seu nome
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Mensagem
            <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button className="btn" type="submit">
            Enviar pelo WhatsApp
          </button>
        </form>
        <p className="muted">
          Prefere falar direto?{' '}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Abrir conversa no WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
