import { useEffect, useState } from "react";
import './Historico.css';

function Historico() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const dados =
      JSON.parse(localStorage.getItem("historicoTreinos")) || [];

    setHistorico(dados.reverse());
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📅 Histórico de Treinos</h2>

      {historico.length === 0 && <p>Nenhum treino registrado.</p>}

      {historico.map((item, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          marginBottom: 10,
          padding: 10,
          borderRadius: 8
        }}>
          <h3>{item.data} - {item.dia}</h3>

          {item.exercicios.map((ex, i) => (
            <p key={i}>
              • {ex.nome} ({ex.series} {ex.reps})
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Historico;