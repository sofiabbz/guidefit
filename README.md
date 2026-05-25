# GuideFit 🏋️

Sistema de treino personalizado desenvolvido com React, Node.js e PostgreSQL.

## Tecnologias

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Banco de dados:** PostgreSQL
- **ORM:** Prisma
- **Containerização:** Docker

## Pré-requisitos

- [Node.js 18+](https://nodejs.org)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com)

## Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/sofiabbz/guidefit.git
cd guidefit
```

### 2. Suba o banco de dados com Docker
```bash
docker-compose up -d
```

### 3. Configure o backend
Crie um arquivo `.env` dentro de `backend-node/` com o seguinte conteúdo:
```
DATABASE_URL="postgresql://guidefit_user:guidefit123@localhost:5432/guidefit"
JWT_SECRET="guidefit_secret_key_2024"
PORT=3000
```

### 4. Instale as dependências e rode o backend
```bash
cd backend-node
npm install
npx prisma db push
npm run dev
```

### 5. Rode o frontend
Abra um terminal novo e rode:
```bash
cd frontend
npm install
npm run dev
```

### 6. Acesse o sistema
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000/api/health

## Estrutura do projeto

```
guidefit/
├── docker-compose.yml
├── backend-node/          
│   ├── prisma/            
│   ├── src/
│   │   ├── controllers/   
│   │   └── routes/        
│   └── server.js          
└── frontend/              
    └── src/
        ├── pages/         
        ├── components/    
        └── services/      
```

## Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/health | Verifica se o servidor está rodando |
| POST | /api/auth/cadastro | Cadastra um novo usuário |
| POST | /api/auth/login | Realiza login |