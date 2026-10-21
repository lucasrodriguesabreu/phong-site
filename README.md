# Site Phong

Site institucional da Phong (consultoria de TI) em React + Vite.

## Páginas

- **Início** (`/`)
- **Cases** (`/cases`) — especialidades da empresa
- **Sobre nós** (`/sobre`) — missão, visão e valores
- **Contato** (`/contato`) — redireciona o cliente para o WhatsApp

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
```

## Personalização

- **Número do WhatsApp:** edite `whatsappNumber` em `src/config.js` (formato `55` + DDD + número, só dígitos).
- **Textos:** `src/pages/Cases.jsx` (especialidades) e `src/pages/About.jsx` (missão, visão, valores).
- **Cores:** variáveis no topo de `src/index.css` (paleta azul baseada no logo).
- **Imagens:** logo em `src/assets/logo.png` (usado no cabeçalho); `public/thumb.png` (prévia ao compartilhar o link) e `public/favicon.png` (ícone da aba).
