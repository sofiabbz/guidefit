import { useNavigate } from 'react-router-dom';
import { obterIntervaloSemana } from '../utilitarios/semana';
import './Progresso.css';

function Progresso() {
  const navegar = useNavigate();
  const historico =
    JSON.parse(localStorage.getItem('historicoTreinos')) || [];

  const semanas = {};
  historico.forEach((treino) => {
    if (!semanas[treino.semana]) {
      semanas[treino.semana] = {
        quantidade: 0,
        primeiraData: treino.dataISO || treino.data
      };
    }
    semanas[treino.semana].quantidade += 1;
  });

  const dadosGrafico = Object.entries(semanas)
    .map(([semana, info]) => ({
      semana,
      quantidade: info.quantidade,
      intervalo: obterIntervaloSemana(info.primeiraData)
    }))
    .sort((a, b) => a.semana.localeCompare(b.semana));

  const maiorQuantidade = Math.max(
    ...dadosGrafico.map((item) => item.quantidade),
    1
  );

  return (
    <div className="progresso-page">
      <div className="progresso-card">
        <h1 className="progresso-title">Meu Progresso</h1>
        <p className="progresso-info">
          Quantidade de treinos realizados por semana, com base nos seus check-ins.
        </p>

        {dadosGrafico.length === 0 ? (
          <p className="progresso-info">
            Faça check-in nos seus treinos para acompanhar seu progresso.
          </p>
        ) : (
          <div className="progresso-grafico">
            {dadosGrafico.map((item) => {
              const altura = (item.quantidade / maiorQuantidade) * 220;
              return (
                <div className="progresso-coluna" key={item.semana}>
                  <span className="progresso-numero-coluna">{item.quantidade}</span>
                  <div className="progresso-barra" style={{ height: `${altura}px` }} />
                  <span className="progresso-semana-label">{item.intervalo}</span>
                </div>
              );
            })}
          </div>
        )}

        <button className="btn-voltar" onClick={() => navegar('/dashboard')}>
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
}

export default Progresso;