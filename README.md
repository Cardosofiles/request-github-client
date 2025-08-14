# Request Github Client

Este projeto é uma aplicação React/Next.js que consome dados do GitHub utilizando React Query e Axios. O objetivo é listar informações do GitHub de forma eficiente, utilizando as melhores práticas de gerenciamento de estado assíncrono.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web modernas.
- **React**: Biblioteca para construção de interfaces de usuário.
- **@tanstack/react-query**: Gerenciamento de dados assíncronos e cache.
- **Axios**: Cliente HTTP para requisições à API do GitHub.
- **TypeScript**: Tipagem estática para JavaScript.
- **Tailwind CSS**: Utilitário para estilização (dependência presente).
- **@biomejs/biome**: Ferramenta para linting e formatação de código.

## Estrutura Principal

- `src/app/page.tsx`: Página principal que utiliza o provider do React Query e o componente de listagem do GitHub.
- `src/components/github-list.tsx`: Componente responsável por exibir a lista de dados do GitHub.
- `src/lib/tanstack-query/provider.tsx`: Provider do React Query para gerenciamento global de queries.

## Como rodar localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/request-github-client.git
   cd request-github-client
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rode o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento Next.js.
- `build`: Gera a build de produção.
- `start`: Inicia a aplicação em modo produção.
- `lint`: Executa o linter no projeto.

## Observações

- Certifique-se de ter o Node.js instalado (versão recomendada: 18+).
- O projeto utiliza o modo `--turbopack` para desenvolvimento mais rápido com Next.js.
- Para customizações de temas e estilos, utilize o Tailwind CSS.

---

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>

---
