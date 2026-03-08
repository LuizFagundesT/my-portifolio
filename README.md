# 📝 Portfólio 

Este repositório contém o código-fonte do projeto desenvolvido para a disciplina **Laboratório de Desenvolvimento de Software**, que consiste no desenvolvimento de um **portfólio profissional web**, criado para apresentar:

- trajetória acadêmica
- habilidades técnicas
- projetos desenvolvidos
- formas de contato

O objetivo do sistema é demonstrar, de forma prática e organizada, a aplicação de tecnologias modernas no desenvolvimento de interfaces web e integração com backend, seguindo boas práticas de arquitetura, componentização e organização de código.

---
# 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-Vite-blue)
![i18n](https://img.shields.io/badge/i18n-internationalization-green)

---
 🌐 Acesso ao Projeto

🔗 **Site publicado: https://portifolio-six-swart.vercel.app/**   
📂 **Repositório: https://github.com/LuizFagundesT/Portifolio.git** 

---
## 📚 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Protótipos](#-protótipos)
- [Autores](#-autores)
  
---

## ✨ Funcionalidades 

O portfólio possui as seguintes funcionalidades:

### 🏠 Página Inicial
Apresentação inicial do portfólio.

### 👨‍💻 Sobre
Informações sobre formação, interesses e trajetória profissional.

### 🛠 Habilidades
Lista das principais tecnologias dominadas.

### 📂 Projetos
Exibição de projetos desenvolvidos.

### 📩 Contato
Formulário de contato para envio de mensagens.

### 🌎 Internacionalização
Suporte para múltiplos idiomas utilizando **i18next**.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

| Tecnologia | Descrição |
|------------|----------|
| React + Vite | Biblioteca JavaScript para construção de interfaces modernas |
| React Router | Gerenciamento de rotas SPA |
| CSS Modules | Estilização modular por componente |
| i18next | Internacionalização (Português / Inglês) |
| React Icons | Biblioteca de ícones |
| Axios | Comunicação com API |

---

### 🐍 Back-end

| Tecnologia | Descrição |
|------------|----------|
| Python | Linguagem utilizada no backend |
| FastAPI | Framework para construção de APIs REST |
| Uvicorn | Servidor ASGI |
| SMTP / API de Email | Serviço para envio de mensagens do formulário |

---

## 🏗 Arquitetura

O projeto foi desenvolvida utilizando uma **arquitetura cliente-servidor**, separando responsabilidades entre **Front-end (interface)** e **Back-end (API)**.  

Essa abordagem permite maior **organização do código, manutenção facilitada e possibilidade de evolução do sistema**, pois cada camada pode evoluir de forma independente.

---

## 📂 Estrutura de Pastas

A seguir está a organização principal das pastas e arquivos do projeto, com uma breve descrição de sua finalidade.

```
.
├── PORTIFOLIO             
│
|   ├── my-portifolio                         # 📁 Diretório principal da aplicação
|   │   ├── /frontend                         # 💻 Aplicação Front-end desenvolvida com React + Vite
|   │   │   ├── /docs                         # 📂 Pasta contendo vídeo de demonstração da aplicação
|   │   │   ├── /src                          # 📂 Código-fonte principal da aplicação React
|   │   │   │   ├── /assets                   # 🖼️ Recursos estáticos como imagens e ícones.
|   │   │   │   ├── /components               # 🧱 Componentes reutilizáveis da interface.
|   │   │   │   |── /data                     # 📊 Arquivos de dados utilizados pelo sistema.
|   │   │   │   ├── /layout                   # 🏗️ Estrutura base das páginas da aplicação.
|   │   │   │   ├── /locales                  # 🌎 Arquivos de tradução da aplicação.
|   │   │   │   ├── /pages                    # 📄 Páginas principais do portfólio.
|   │   │   │   ├── app.jsx                   # 🧩 Componente raiz que organiza as páginas da aplicação.
|   │   │   │   ├── i18n.js                   # 🌎 Configuração da internacionalização (i18next).
|   │   │   │   ├── main.jsx                  # 🚀 Ponto de entrada da aplicação React.
|   │   │   └── .env                          # 🔐 Variáveis de ambiente do projeto.
|   │   │   ├── .gitignore                    # 🧹 Arquivos ignorados pelo Git no frontend.
|   │   │   ├── eslint.config.js              # ✨ Configuração do ESLint para padronização de código.
|   │   │   ├── index.css                     # 🎨 Estilos globais da aplicação.
|   │   │   ├── index.html                    # 🌐 Arquivo HTML principal carregado pela aplicação.
|   │   │   ├── package-lock.json             # 🔒 Lockfile das dependências instaladas.
|   │   │   ├── package.json                  # 📦 Dependências e scripts do projeto.
|   │   │   ├── README.md                     # 📘 Documentação específica do frontend.
|   │   │   ├── vite.config.js                # ⚡ Configuração da ferramenta de build Vite.
|   │   └── package-lock.json                 # 🔒 Lockfile das dependências do projeto.
|   ├── .gitignore                            # 🧹 Arquivos ignorados pelo Git.
|   ├── package-lock.json                     # 🔒 Controle de versões das dependências.
|   ├── README.md                             # 📘 Documentação principal do projeto.
|    
├──

```
---

## 📸 Protótipos 
Veja também o protótipo no [Figma](https://www.figma.com/design/COAKgSRbRgsxiYsUZUZx69/Wireframe-Portif%C3%B3lio---m%C3%A9dia-fid-?node-id=0-1&t=RorW6WAPHX1OuVqd-1)
Tela/Sessão | Protótipo
------------|-------
HOME | <img width="360" height="400" alt="HOME PAGE" src="https://github.com/user-attachments/assets/a0150670-9575-4f79-a1ee-2338d641877e" />
SOBRE | <img width="360" height="3438" alt="Group 4" src="https://github.com/user-attachments/assets/0cc2262e-349b-46c4-a365-0e50e79a1f5c" />
PROJETOS | <img width="360" height="400" alt="PROJETOS" src="https://github.com/user-attachments/assets/55489add-a41c-4339-b7f4-07ecc2d03cdf" />
HABILIDADES | <img width="360" height="2237" alt="HABILIDADES" src="https://github.com/user-attachments/assets/2fc996b6-f319-4a52-855b-58f33774234d" />
CONTATO | <img width="360" height="600" alt="CONTATO" src="https://github.com/user-attachments/assets/5bd17fc9-0d4e-4563-93e2-9af81b26ecd5" />

### 🎥 Demonstração da Aplicação

Vídeo demonstrando a navegação pelo portfólio e suas principais funcionalidades.

https://github.com/user-attachments/assets/41464261-8f0c-490d-9499-6ec091138621

---

## 👥 Autores

Este projeto foi desenvolvido pelos seguintes integrantes:

| 👤 Nome | 🖼️ Foto | 💻 GitHub | 💼 LinkedIn | 📧 Email |
|-------|-------|-------|-------|-------|
| **Caio Lima** | <div align="center"><img src="https://github.com/caiolima777.png" width="80px"></div> | <div align="center"><a href="https://github.com/caiolima777">GitHub</a></div> | <div align="center"><a href="https://www.linkedin.com/in/caio-lima-leal-989bb9276/">LinkedIn</a></div> | <div align="center"><a href="mailto:cllima3753@gmail.com">Email</a></div> |
| **Ian Nycolas** | <div align="center"><img src="https://github.com/IanNycolaspuc.png" width="80px"></div> | <div align="center"><a href="https://github.com/IanNycolaspuc">GitHub</a></div> | <div align="center"><a href="https://www.linkedin.com/in/ian-costa-8702b019b/">LinkedIn</a></div> | <div align="center"><a href="mailto:SEUEMAIL@gmail.com">Email</a></div> |
| **Erick Guedes** | <div align="center"><img src="https://github.com/Erickguedesc.png" width="80px"></div> | <div align="center"><a href="https://github.com/Erickguedesc">GitHub</a></div> | <div align="center"><a href="https://www.linkedin.com/in/erick-de-carvalho-658148258/">LinkedIn</a></div> | <div align="center"><a href="mailto:SEUEMAIL@gmail.com">Email</a></div> |
| **Luiz Fagundes** | <div align="center"><img src="https://github.com/LuizFagundesT.png" width="80px"></div> | <div align="center"><a href="https://github.com/LuizFagundesT">GitHub</a></div> | <div align="center"><a href="https://www.linkedin.com/in/luiz-gustavo-fagundes-teixeira-545225287/">LinkedIn</a></div> | <div align="center"><a href="mailto:SEUEMAIL@gmail.com">Email</a></div> |


