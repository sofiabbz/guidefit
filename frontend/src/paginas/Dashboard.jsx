import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { obterChaveSemana } from '../utilitarios/semana';
import './Dashboard.css';

function Dashboard() {
  const nomeUsuario = localStorage.getItem("usuarioNome") || "Usuário";
  const navegar = useNavigate();

  const [temPlanoGerado, setTemPlanoGerado] = useState(false);
  const [diaAtivo, setDiaAtivo] = useState("Segunda-feira");
  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [exercicioSelecionado, setExercicioSelecionado] = useState("");
  const [videoSelecionado, setVideoSelecionado] = useState("");
  const [tempo, setTempo] = useState(60);
  const [cronometroRodando, setCronometroRodando] = useState(false);
  const [exerciciosConcluidos, setExerciciosConcluidos] = useState({});

  // Vídeos do YouTube para cada exercício (IDs verificados)
  const videosExercicios = {
    "Flexão de braço": "https://www.youtube.com/embed/TbVWMhyax2U",
    "Remada com garrafa ou mochila": "https://www.youtube.com/embed/Yr9-bLzEsCI",
    "Rosca bíceps com garrafa ou elástico": "https://www.youtube.com/embed/Os0CbdSre6I",
    "Tríceps banco (apoio em cadeira)": "https://www.youtube.com/embed/0326dy_-CzM",
    "Agachamento livre": "https://www.youtube.com/embed/v_raQBqybiY",
    "Agachamento sumô": "https://www.youtube.com/embed/Xa1XwBsj0q0",
    "Ponte de glúteo no chão": "https://www.youtube.com/embed/wPM8icPu6H8",
    "Elevação de panturrilha em pé": "https://www.youtube.com/embed/gwLzBJYoWlI"
  };

  useEffect(() => {
    let intervalo = null;
    if (cronometroRodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((prev) => prev - 1);
      }, 1000);
    } else if (tempo === 0) {
      setCronometroRodando(false);
      alert("Tempo de descanso concluído!");
      setTempo(60);
    }
    return () => clearInterval(intervalo);
  }, [cronometroRodando, tempo]);

  const abrirVideoExecucao = (nomeExercicio) => {
    setExercicioSelecionado(nomeExercicio);
    setVideoSelecionado(videosExercicios[nomeExercicio] || "");
    setTempo(60);
    setCronometroRodando(false);
    setModalVideoAberto(true);
  };

  const fecharModal = () => {
    setModalVideoAberto(false);
    setCronometroRodando(false);
    setVideoSelecionado("");
  };

  const alternarConcluido = (dia, index) => {
    const chave = `${dia}-${index}`;
    setExerciciosConcluidos((prev) => ({
      ...prev,
      [chave]: !prev[chave]
    }));
  };

  const formatarTempo = (segundos) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs
      .toString()
      .padStart(2, '0')}`;
  };

  const rotinaSemanal = {
    "Segunda-feira": {
      foco: "BRAÇOS e PEITO",
      tipo: "exercicios",
      exercicios: [
        { nome: "Flexão de braço", series: "3x", reps: "8 a 12 rep" },
        { nome: "Remada com garrafa ou mochila", series: "3x", reps: "10 a 12 rep" },
        { nome: "Rosca bíceps com garrafa ou elástico", series: "3x", reps: "10 a 12 rep" },
        { nome: "Tríceps banco (apoio em cadeira)", series: "3x", reps: "10 a 12 rep" }
      ]
    },
    "Terça-feira": {
      foco: "CARDIOVASCULAR",
      tipo: "corrida",
      descricao: "30 MIN DE CORRIDA NA RUA"
    },
    "Quarta-feira": {
      foco: "PERNAS E GLÚTEOS",
      tipo: "exercicios",
      exercicios: [
        { nome: "Agachamento livre", series: "3x", reps: "10 a 12 rep" },
        { nome: "Agachamento sumô", series: "3x", reps: "10 a 12 rep" },
        { nome: "Ponte de glúteo no chão", series: "3x", reps: "12 a 15 rep" },
        { nome: "Elevação de panturrilha em pé", series: "3x", reps: "12 a 15 rep." }
      ]
    },
    "Quinta-feira": {
      foco: "CARDIOVASCULAR",
      tipo: "corrida",
      descricao: "30 MIN DE CORRIDA NA RUA"
    },
    "Sexta-feira": {
      foco: "BRAÇOS e PEITO",
      tipo: "exercicios",
      exercicios: [
        { nome: "Flexão de braço", series: "3x", reps: "8 a 12 rep" },
        { nome: "Remada com garrafa ou mochila", series: "3x", reps: "10 a 12 rep" },
        { nome: "Rosca bíceps com garrafa ou elástico", series: "3x", reps: "10 a 12 rep" },
        { nome: "Tríceps banco (apoio em cadeira)", series: "3x", reps: "10 a 12 rep" }
      ]
    },
    "Sábado": {
      foco: "CARDIOVASCULAR",
      tipo: "corrida",
      descricao: "30 MIN DE CORRIDA NA RUA"
    }
  };

  const dadosDia = rotinaSemanal[diaAtivo];

  const todosExerciciosConcluidos = () => {
    if (dadosDia.tipo === "corrida") return true;
    return dadosDia.exercicios.every((_, index) =>
      exerciciosConcluidos[`${diaAtivo}-${index}`]
    );
  };

  const fazerCheckin = () => {
    const historicoSalvo =
      JSON.parse(localStorage.getItem("historicoTreinos")) || [];

    const dataAtual = new Date();

    const novoTreino = {
      id: Date.now(),
      dia: diaAtivo,
      foco: dadosDia.foco,
      data: dataAtual.toLocaleDateString("pt-BR"),
      dataISO: dataAtual.toISOString(),
      semana: obterChaveSemana(dataAtual)
    };

    const jaFezCheckinHoje = historicoSalvo.some(
      (treino) => treino.dia === diaAtivo && treino.data === novoTreino.data
    );

    if (jaFezCheckinHoje) {
      alert("Você já fez check-in deste treino hoje.");
      return;
    }

    localStorage.setItem(
      "historicoTreinos",
      JSON.stringify([...historicoSalvo, novoTreino])
    );

    alert(`Check-in realizado com sucesso para ${diaAtivo}!`);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="brand-section">
          <h1 className="brand-name">Guidefit</h1>
        </div>
        <hr className="brand-divider" />
        <h2 className="dashboard-title">Olá, {nomeUsuario}.</h2>
        <p className="welcome-text">
          Acompanhe seu planejamento de atividades físicas.
        </p>

        {!temPlanoGerado ? (
          <div className="sem-treino-container">
            <p className="sem-treino-texto">
              Você ainda não possui um plano de treino. Clique aqui para criar o seu
            </p>
            <button className="btn-primary" onClick={() => setTemPlanoGerado(true)}>
              Gerar Plano de Treino
            </button>
          </div>
        ) : (
          <div className="com-treino-container">
            <div className="dias-abas-navegacao">
              {Object.keys(rotinaSemanal).map((dia) => (
                <button
                  key={dia}
                  className={`aba-dia-btn ${dia === diaAtivo ? 'aba-ativa' : ''}`}
                  onClick={() => setDiaAtivo(dia)}
                >
                  {dia.split('-')[0].substring(0, 3)}
                </button>
              ))}
            </div>

            <div className="workout-section">
              <h3 className="workout-header">Planejamento — {diaAtivo}</h3>
              <p className="workout-focus">{dadosDia.foco}</p>

              <div className="exercises-container">
                {dadosDia.tipo === "exercicios" ? (
                  dadosDia.exercicios.map((ex, index) => {
                    const estaConcluido = exerciciosConcluidos[`${diaAtivo}-${index}`];
                    return (
                      <div
                        key={index}
                        className={`exercise-row ${estaConcluido ? 'row-concluida' : ''}`}
                      >
                        <div className="exercise-main-info">
                          <span className="exercise-name">{ex.nome}</span>
                          <span className="exercise-sub">{ex.series} {ex.reps}</span>
                        </div>
                        <div className="exercise-actions-group">
                          <button className="btn-ver-execucao" onClick={() => abrirVideoExecucao(ex.nome)}>
                            Ver Execução
                          </button>
                          <button
                            className={`btn-concluido-check ${estaConcluido ? 'checked' : ''}`}
                            onClick={() => alternarConcluido(diaAtivo, index)}
                          >
                            {estaConcluido ? "✓" : "Concluir"}
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="exercise-row">
                    <div className="exercise-main-info">
                      <span className="exercise-name" style={{ color: '#499388', fontWeight: '700' }}>
                        {dadosDia.descricao}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={fazerCheckin}
              disabled={!todosExerciciosConcluidos()}
              style={{
                opacity: todosExerciciosConcluidos() ? 1 : 0.5,
                cursor: todosExerciciosConcluidos() ? "pointer" : "not-allowed"
              }}
            >
              {todosExerciciosConcluidos()
                ? "Fazer Check-in"
                : "Conclua todos os exercícios para fazer check-in"}
            </button>
          </div>
        )}

        <div className="shortcuts-links">
          <span className="link-item" onClick={() => navegar('/progresso')}>
            Meu Progresso
          </span>
          <span className="link-item-space"></span>
          <span className="link-item" onClick={() => navegar('/historico')}>
            Histórico
          </span>
        </div>
      </div>

      {modalVideoAberto && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h3 className="modal-title">{exercicioSelecionado}</h3>
            <p className="modal-subtitle">Demonstração da execução correta do exercício.</p>

            {videoSelecionado ? (
              <div className="video-player-placeholder">
                <iframe
                  width="100%"
                  height="260"
                  src={videoSelecionado}
                  title={`Vídeo: ${exercicioSelecionado}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="video-player-placeholder">
                <span className="video-text-placeholder">
                  Vídeo não encontrado para este exercício.
                </span>
              </div>
            )}

            <div className="cronometro-container">
              <p className="cronometro-label">⏱️ TEMPO DE DESCANSO</p>
              <div className="cronometro-display">{formatarTempo(tempo)}</div>
              <div className="cronometro-botoes">
                <button className="btn-cronometro-acao" onClick={() => setCronometroRodando(!cronometroRodando)}>
                  {cronometroRodando ? "Pausar" : "Iniciar"}
                </button>
                <button
                  className="btn-cronometro-reset"
                  onClick={() => { setCronometroRodando(false); setTempo(60); }}
                >
                  Resetar
                </button>
              </div>
            </div>

            <button className="btn-primary" onClick={fecharModal}>
              Fechar Janela
            </button>
          </div>
        </div>
      )}

      <footer className="custom-footer">
        <div className="footer-bar bar-top">SOBRE NÓS</div>
        <div className="footer-bar bar-middle">CULTURA</div>
        <div className="footer-bar bar-bottom">SAC</div>
      </footer>
    </div>
  );
}

export default Dashboard;