import { useNavigate } from 'react-router-dom';
import './Historico.css';

function Historico() {
  const navegar = useNavigate();
  const historico =
    JSON.parse(localStorage.getItem('historicoTreinos')) || [];

  return (
    <div className="historico-page">
      <div className="historico-card">
        <h1 className="historico-title">Histórico de Treinos</h1>

        {historico.length === 0 ? (
          <p className="historico-vazio">
            Você ainda não realizou nenhum check-in.
          </p>
        ) : (
          <div className="historico-lista">
            {[...historico].reverse().map((treino) => (
              <div className="historico-item" key={treino.id}>
                <div className="historico-data">{treino.data}</div>
                <div className="historico-dia">{treino.dia}</div>
                <p className="historico-exercicio">{treino.foco}</p>
              </div>
            ))}
          </div>
        )}

        <button
          className="btn-voltar"
          onClick={() => navegar('/dashboard')}
        >
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
}

export default Historico;