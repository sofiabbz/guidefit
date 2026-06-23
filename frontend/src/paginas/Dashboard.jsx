import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const nomeUsuario = localStorage.getItem("usuarioNome") || "Usuário";

  const [temPlanoGerado, setTemPlanoGerado] = useState(false);
  const [diaAtivo, setDiaAtivo] = useState("Segunda-feira");

  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [exercicioSelecionado, setExercicioSelecionado] = useState("");
  const [videoSelecionado, setVideoSelecionado] = useState("");

  const [tempo, setTempo] = useState(60);
  const [cronometroRodando, setCronometroRodando] = useState(false);

  const [exerciciosConcluidos, setExerciciosConcluidos] = useState({});

  useEffect(() => {
    let intervalo = null;

    if (cronometroRodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [cronometroRodando, tempo]);

  const abrirVideoExecucao = (exercicio) => {
    setExercicioSelecionado(exercicio.nome);
    setVideoSelecionado(exercicio.video);
    setTempo(60);
    setModalVideoAberto(true);
  };

  const alternarConcluido = (dia, index) => {
    const chave = `${dia}-${index}`;
    setExerciciosConcluidos((prev) => ({
      ...prev,
      [chave]: !prev[chave]
    }));
  };

  const rotinaSemanal = {
    "Segunda-feira": {
      foco: "BRAÇOS e PEITO",
      tipo: "exercicios",
      exercicios: [
        { nome: "Flexão", series: "3x", reps: "8-12", video: "https://www.youtube.com/embed/IODxDxX7oi4" },
        { nome: "Remada", series: "3x", reps: "10-12", video: "https://www.youtube.com/embed/GZbfZ033f74" }
      ]
    },

    "Terça-feira": {
      foco: "CARDIO",
      tipo: "cardio",
      descricao: "30 min corrida"
    }
  };

  const dadosDia = rotinaSemanal[diaAtivo];

  // ✔ cardio agora CONTA como conclusão manual também
  const todosConcluidos =
    dadosDia.tipo === "cardio"
      ? !!exerciciosConcluidos[diaAtivo]
      : dadosDia.exercicios.every((_, i) =>
          exerciciosConcluidos[`${diaAtivo}-${i}`]
        );

  const fazerCheckin = () => {
    const hoje = new Date().toISOString().split("T")[0];

    const historico =
      JSON.parse(localStorage.getItem("historicoTreinos")) || [];

    const novo = {
      data: hoje,
      dia: diaAtivo,
      foco: dadosDia.foco,
      tipo: dadosDia.tipo,
      concluido: true
    };

    const atualizado = [...historico, novo];

    localStorage.setItem("historicoTreinos", JSON.stringify(atualizado));

    alert("Check-in realizado!");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">

        <h2>Olá {nomeUsuario}</h2>

        <button onClick={() => setTemPlanoGerado(true)}>
          Gerar Plano
        </button>

        {temPlanoGerado && (
          <>
            {/* DIAS */}
            {Object.keys(rotinaSemanal).map((dia) => (
              <button key={dia} onClick={() => setDiaAtivo(dia)}>
                {dia.slice(0, 3)}
              </button>
            ))}

            <h3>{diaAtivo}</h3>

            {/* TREINO */}
            {dadosDia.tipo === "exercicios" ? (
              dadosDia.exercicios.map((ex, index) => {
                const key = `${diaAtivo}-${index}`;
                const feito = exerciciosConcluidos[key];

                return (
                  <div key={index}>
                    <span>{ex.nome}</span>

                    <button onClick={() => abrirVideoExecucao(ex)}>
                      vídeo
                    </button>

                    <button onClick={() => alternarConcluido(diaAtivo, index)}>
                      {feito ? "✔" : "concluir"}
                    </button>
                  </div>
                );
              })
            ) : (
              <div>
                <p>{dadosDia.descricao}</p>

                {/* 🔥 BOTÃO CARDIO */}
                <button onClick={() =>
                  setExerciciosConcluidos((prev) => ({
                    ...prev,
                    [diaAtivo]: !prev[diaAtivo]
                  }))
                }>
                  {exerciciosConcluidos[diaAtivo] ? "✔ Concluído" : "Concluir cardio"}
                </button>
              </div>
            )}

            <button disabled={!todosConcluidos} onClick={fazerCheckin}>
              Check-in
            </button>
          </>
        )}

        {/* MODAL */}
        {modalVideoAberto && (
          <div>
            <h3>{exercicioSelecionado}</h3>

            <iframe src={videoSelecionado} width="300" height="200" />

            <button onClick={() => setModalVideoAberto(false)}>
              fechar
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;