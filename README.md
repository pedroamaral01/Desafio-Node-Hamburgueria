# Desafio Node - Dev Club

## Sobre o Projeto

Este projeto é uma aplicação desenvolvida em Node.js utilizando o framework Express para gerenciar os pedidos de uma hamburgueria. A aplicação permite criar, listar, atualizar, deletar e alterar o status dos pedidos.

## Instalação

1. Clone o repositório:
    - `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Navegue até o diretório do projeto:
    - `cd seu-repositorio`

3. Instale as dependências:
    - `npm install`

4. Inicie o servidor:
    - `npm start`
    - O servidor estará rodando na porta 4000.

## Rotas

### POST /order

- **Descrição:** Cria um novo pedido.
- **Requisição:**
  - Corpo (body):
    - order: "X- Salada, 2 batatas grandes, 1 coca-cola"
    - clientName: "José"
    - price: 44.50
    - status: "Em preparação"
- **Resposta:**
    - newOrder:
        - id: "uuid-gerado"
        - order: "X- Salada, 2 batatas grandes, 1 coca-cola"
        - clientName: "José"
        - price: 44.50
        - status: "Em preparação"

### GET /order

- **Descrição:** Lista todos os pedidos.
- **Requisição:** Não requer parâmetros.
- **Resposta:**
    - orders:
        - id: "uuid"
        - order: "X- Salada, 2 batatas grandes, 1 coca-cola"
        - clientName: "José"
        - price: 44.50
        - status: "Em preparação"

### PUT /order/:id

- **Descrição:** Altera um pedido existente.
- **Requisição:**
  - Parâmetros: `id` do pedido a ser alterado.
  - Corpo (body):
    - order: "X- Bacon"
    - clientName: "Maria"
    - price: 39.90
    - status: "Em preparação"
- **Resposta:**
    - orderUpdate:
        - id: "uuid"
        - order: "X- Bacon"
        - clientName: "Maria"
        - price: 39.90
        - status: "Em preparação"

### DELETE /order/:id

- **Descrição:** Deleta um pedido existente.
- **Requisição:**
  - Parâmetros: `id` do pedido a ser deletado.
- **Resposta:**
    - message: "User removed"

### GET /order/:id

- **Descrição:** Retorna um pedido específico.
- **Requisição:**
  - Parâmetros: `id` do pedido desejado.
- **Resposta:**
    - id: "uuid"
    - order: "X- Salada, 2 batatas grandes, 1 coca-cola"
    - clientName: "José"
    - price: 44.50
    - status: "Em preparação"

### PATCH /order/:id

- **Descrição:** Altera o status de um pedido para "Pronto".
- **Requisição:**
  - Parâmetros: `id` do pedido a ser alterado.
  - Corpo (body):
    - status: "Pronto"
- **Resposta:**
    - id: "uuid"
    - order: "X- Salada, 2 batatas grandes, 1 coca-cola"
    - clientName: "José"
    - price: 44.50
    - status: "Pronto"

## Middlewares

### Middleware de Verificação de ID

- **Descrição:** Verifica se o ID passado existe em todas as rotas que recebem o parâmetro ID.
- **Comportamento:** Se o ID não existir, retorna um erro; caso contrário, permite que a requisição continue.

### Middleware de Log de Requisições

- **Descrição:** Exibe o método da requisição (GET, POST, PUT, DELETE, etc) e a URL da requisição.
- **Comportamento:** Mostra a seguinte mensagem no console: [GET] - /order

## Como Executar

1. Clone o repositório e instale as dependências conforme as instruções acima.
2. Execute o comando `npm start` para iniciar o servidor.
3. Use um cliente HTTP como Postman ou Insomnia, ou ferramentas como cURL para interagir com a API através das rotas descritas acima.
