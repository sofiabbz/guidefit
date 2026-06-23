import React from "react";

function Progresso() {
  const historico =
    JSON.parse(localStorage.getItem("historicoTreinos")) || [];

  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const contagem = {
    Dom: 0, Seg: 0, Ter: 0, Qua: 0, Qui: 0, Sex: 0, Sab: 0
  };

  historico.forEach((t) => {
    if (!t.data) return;

    const data = new Date(t.data + "T00:00:00");
    const dia = dias[data.getDay()];

    contagem[dia]++;
  });

  const max = Math.max(...Object.values(contagem), 1);

  return (
    <div style={{ padding: 20 }}>
      <h2>📊 Progresso</h2>

      <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
        {dias.map((d) => (
          <div key={d} style={{ textAlign: "center" }}>
            <div
              style={{
                height: (contagem[d] / max) * 200,
                width: 30,
                background: "#499388"
              }}
            />
            <small>{d}</small>
            <div>{contagem[d]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Progresso;