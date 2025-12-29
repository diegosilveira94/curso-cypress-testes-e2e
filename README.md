# Cypress - Automatizando Testes E2E

Projeto de automação de testes end-to-end (E2E) utilizando **Cypress**.

## 📋 Sobre

Este repositório contém testes automatizados para validar funcionalidades de login, cadastro e APIs. O projeto utiliza Cypress como framework de testes e Mochawesome para geração de relatórios.

**Desenvolvido em conjunto com o curso:** [Cypress: Automatizando Testes E2E](https://www.alura.com.br/curso-online-cypress-automatizando-testes-e2e?srsltid=AfmBOoo4vns0oSNafNbaL_zikaB2RukXjK4eRKUkLsHhabiC-nvU6gpR) - Alura

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd cypress_automatizando_testes_e2e
```

2. Instale as dependências:

```bash
npm install
```

## 📝 Scripts Disponíveis

- **Abrir Cypress UI:**

```bash
npm run cy:open
```

## 🧪 Testes Disponíveis

Os testes estão organizados em `/cypress/e2e/`:

- `login-correto.cy.js` - Testa login com credenciais válidas
- `login-incorreto.cy.js` - Testa login com credenciais inválidas
- `cadastro-correto.cy.js` - Testa cadastro com dados válidos
- `cadastro-incorreto.cy.js` - Testa cadastro com dados inválidos
- `cadastro-massa.cy.js` - Testa cadastro com massa de dados
- `api-mensagens.cy.js` - Testa endpoints de API
- Testes de exemplo: `ex01.cy.js`, `ex02.cy.js`, `ex03.cy.js`

## 📊 Relatórios

Os relatórios são gerados automaticamente em `/cypress/results/` em formato HTML e JSON.

## ⚙️ Configuração

O arquivo `cypress.config.js` contém as configurações do projeto, incluindo:

- Projeto ID para integração com Cypress Cloud
- Reporter: Mochawesome
- Diretório de resultados

Variáveis de ambiente podem ser configuradas em `cypress.env.json`.

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/              # Testes E2E
├── fixtures/         # Dados de teste
├── support/          # Configurações e comandos customizados
├── screenshots/      # Capturas de tela
└── results/          # Relatórios gerados
```

## 📦 Dependências

- **cypress** ^13.6.4
- **mochawesome** ^7.1.4

## 📧 Contato

Autor: Diego Silveira
