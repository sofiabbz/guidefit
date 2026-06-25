-- DropForeignKey
ALTER TABLE "perfil_fisico" DROP CONSTRAINT "perfil_fisico_usuarioId_fkey";

-- CreateTable
CREATE TABLE "plano_treino" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "dataGeracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "plano_treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dia_treino" (
    "id" TEXT NOT NULL,
    "planoTreinoId" TEXT NOT NULL,
    "diaSemana" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "dia_treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercicio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "grupoMuscular" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "instrucoes" TEXT,

    CONSTRAINT "exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dia_exercicio" (
    "id" TEXT NOT NULL,
    "diaId" TEXT NOT NULL,
    "exercicioId" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "dia_exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_treino" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duracao" INTEGER NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false,
    "dataConclusao" TIMESTAMP(3),

    CONSTRAINT "registro_treino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_exercicio" (
    "id" TEXT NOT NULL,
    "registroId" TEXT NOT NULL,
    "exercicioId" TEXT NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "registro_exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progresso" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "totalTreinos" INTEGER NOT NULL DEFAULT 0,
    "totalExercicios" INTEGER NOT NULL DEFAULT 0,
    "frequenciaSemanal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dataAtualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "progresso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_peso" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "dataRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registro_peso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "progresso_usuarioId_key" ON "progresso"("usuarioId");

-- AddForeignKey
ALTER TABLE "perfil_fisico" ADD CONSTRAINT "perfil_fisico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plano_treino" ADD CONSTRAINT "plano_treino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dia_treino" ADD CONSTRAINT "dia_treino_planoTreinoId_fkey" FOREIGN KEY ("planoTreinoId") REFERENCES "plano_treino"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dia_exercicio" ADD CONSTRAINT "dia_exercicio_diaId_fkey" FOREIGN KEY ("diaId") REFERENCES "dia_treino"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dia_exercicio" ADD CONSTRAINT "dia_exercicio_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "exercicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_treino" ADD CONSTRAINT "registro_treino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_exercicio" ADD CONSTRAINT "registro_exercicio_registroId_fkey" FOREIGN KEY ("registroId") REFERENCES "registro_treino"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_exercicio" ADD CONSTRAINT "registro_exercicio_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "exercicio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progresso" ADD CONSTRAINT "progresso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_peso" ADD CONSTRAINT "registro_peso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
