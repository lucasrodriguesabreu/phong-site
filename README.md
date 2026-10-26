# Site Phong

Site institucional da Phong (consultoria de TI) em React + Vite + Tailwind CSS. Página única com seções:

- **Serviços** (`#servicos`) — pilares de Software e Plataforma/Cloud
- **Cases** (`#cases`)
- **Como trabalhamos** (`#modelos`)
- **Stack** (`#stack`)
- **Contato** (`#contato`) — redireciona o cliente para o WhatsApp

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
```

## Personalização

- **Contatos:** edite `src/config.js` — `whatsappNumber` (formato `55` + DDD + número, só dígitos) e, opcionalmente, `linkedinUrl` e `email` (os cartões só aparecem se preenchidos).
- **Textos:** `src/data.js` (serviços, cases, modelos de contratação e stack) e `src/App.jsx` (títulos das seções).
- **Cores:** variáveis em `:root` no topo de `src/index.css` (paleta azul baseada no logo).
- **Imagens:** logo em `src/assets/logo.png` (usado no cabeçalho); `public/thumb.png` (prévia ao compartilhar o link) e `public/favicon.png` (ícone da aba).
