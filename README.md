# Teste Prático Avalon

Este é um projeto Next.js que implementa uma interface para visualização de posts e usuários, utilizando as melhores práticas de desenvolvimento web moderno.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React com suporte a SSR/SSG
- [React](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn](https://ui.shadcn.com/) - Componentes primitivos
- [Lucide Icons](https://lucide.dev/) - Biblioteca de ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lucamqf/coding-assesment.git
cd coding-assesment
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.template .env
```
Edite o arquivo `.env` e adicione a URL do servidor backend (https://jsonplaceholder.typicode.com).

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── actions/        # Funções de ação para chamadas à API
├── app/            # Rotas e páginas da aplicação
│   ├── posts/      # Páginas relacionadas a posts
│   └── user/       # Páginas relacionadas a usuários
├── components/     # Componentes reutilizáveis
│   └── ui/         # Componentes de UI base
├── config/         # Configurações da aplicação
├── lib/            # Utilitários e funções auxiliares
├── types/          # Definições de tipos
└── utils/          # Funções utilitárias
```

## 🔄 Estratégias de Renderização

### Static Site Generation (SSG)
- **Páginas de Posts**: Utilizamos SSG para as páginas de posts individuais (`/posts/[id]`) e perfis de usuário (`/user/[id]`) com `revalidate: 60` para garantir que o conteúdo seja atualizado a cada minuto.
- **Razão**: Posts e perfis de usuário são conteúdo relativamente estático que pode ser pré-renderizado, melhorando significativamente o tempo de carregamento inicial.

### Server-Side Rendering (SSR)
- **Lista de Posts**: A página principal de posts (`/posts`) utiliza SSR para garantir que os dados mais recentes sejam sempre exibidos.
- **Razão**: A lista de posts pode ser atualizada frequentemente, e queremos garantir que os usuários sempre vejam o conteúdo mais recente.

## ⚡ Estratégias de Loading

### Suspense
- **Componentes Dinâmicos**: Utilizamos `Suspense` para componentes que carregam dados de forma independente, como:
  - Informações do autor em posts
  - Comentários em posts
  - Informações do usuário em perfis
- **Razão**: Permite um carregamento progressivo da interface, mantendo a página responsiva enquanto os dados são carregados.

### loading.tsx
- **Páginas Inteiras**: Utilizamos `loading.tsx` para páginas que precisam de um estado de carregamento completo, como:
  - Lista de posts
  - Página inicial
- **Razão**: Fornece uma experiência de carregamento mais consistente para páginas inteiras, evitando layout shifts.