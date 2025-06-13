# Layers - Landing Page SaaS

Este projeto é uma landing page moderna para uma ideia de SaaS chamada **Layers**, desenvolvida com foco em performance, responsividade e boas práticas de UI/UX.

## ✨ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Geist Font](https://vercel.com/font) via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## 📁 Estrutura de Pastas

```
├── public/                # Arquivos estáticos (imagens, SVGs, etc)
├── src/
│   ├── app/               # Entrypoint das rotas e layout principal
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/            # Componentes de UI (botões, inputs, etc)
│   │   ├── (sections)/    # Seções principais da landing page
│   │   ├── assets/        # Assets específicos dos componentes
│   ├── lib/               # Funções utilitárias e helpers
├── .vscode/               # Configurações do VSCode
├── .next/                 # Build gerado pelo Next.js
├── package.json           # Dependências e scripts do projeto
├── README.md              # Documentação do projeto
└── ...                    # Outros arquivos de configuração
```

## 🚀 Como rodar o projeto

Primeiro, instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

---

Para mais informações sobre Next.js, consulte a [documentação oficial](https://nextjs.org/docs).