# Scaffold React com React Router DOM e TailwindCSS

Este projeto é um scaffold básico para iniciar o desenvolvimento de aplicações React utilizando **React Router DOM** para roteamento e **TailwindCSS** para estilização. Ele serve como ponto de partida para criar aplicações modernas e escaláveis com as ferramentas mencionadas.

---

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM**: Biblioteca para gerenciar o roteamento da aplicação.
- **TailwindCSS**: Framework CSS utilitário para estilização rápida e responsiva.

---

## ⚡️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. Clone este repositório:

   ```bash
   git clone https://github.com/stephhoel/scaffold-react-router-tailwind.git
   cd scaffold-react-router-tailwind
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn run dev
   ```

4. Abra o navegador e acesse: `http://localhost:5173/`

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
│   ├── _layout.tsx     # Layout principal compartilhado entre as páginas
│   ├── Home.tsx        # Página inicial
│   ├── NotFound.tsx    # Página 404
├── routes/             # Configuração de rotas
├── index.css           # Estilos globais (inclui TailwindCSS)
├── main.jsx            # Ponto de entrada da aplicação
└── tailwind.config.js  # Configuração do TailwindCSS
```

---

## 📜 Configuração do Roteamento

O arquivo de configuração das rotas está localizado em `src/routes/router.tsx`. O exemplo abaixo mostra como configurar uma rota simples:

```jsx
import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/*",
    element: <NotFound />
  }
])
```

---

## 🎨 Como Utilizar o TailwindCSS

TailwindCSS já está configurado e pronto para uso. Basta adicionar as classes diretamente nos elementos.

Exemplo:

```jsx
<div className="flex items-center justify-center h-screen bg-gray-100">
  <h1 className="text-3xl font-bold text-blue-500">Bem-vindo ao Scaffold!</h1>
</div>
```

---

## 🚀 Personalização

1. **Configuração do TailwindCSS**:
   O arquivo `tailwind.config.js` pode ser ajustado para atender às suas necessidades. Por exemplo, você pode adicionar novas cores ou configurações.

2. **Estrutura das Rotas**:
   Modifique ou adicione novas rotas no arquivo `src/routes/router.tsx`.

3. **Componentes e Páginas**:
   Adicione novos componentes em `src/components/` e páginas em `src/pages/`.

---

## 📝 Contribuição

Se você deseja contribuir com este scaffold:

1. Faça um fork deste repositório.
2. Crie uma branch para sua funcionalidade: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m "Minha nova feature"`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
