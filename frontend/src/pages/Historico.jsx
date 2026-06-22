import React from 'react';
import './Dashboard.css'; // Usa o mesmo layout visual padronizado

function Historico() {
  const nomeUsuario = localStorage.getItem("usuarioNome") || "Usuário";

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="brand-section">
          <span className="brand-logo"></span>
          <h1 className="brand-name">Guidefit</h1>
        </div>

        <hr className="brand-divider" />

        <h2 className="dashboard-title">Histórico de Treinos</h2>
        <p className="welcome-text">Confira os registros de suas atividades anteriores.</p>

        {/* Estrutura de lista em branco para o histórico cronológico */}
        <div className="workout-section">
          <h3 className="workout-header">Sessões Concluídas</h3>
          <div className="exercises-container" style={{ textAlign: 'center', padding: '15px 0' }}>
            <span style={{ fontSize: '12px', color: '#888' }}>
              Nenhum treino registrado no histórico até o momento.
            </span>
          </div>
        </div>

        <button className="btn-primary" onClick={() => window.location.href = '/dashboard'}>
          Voltar para o Início
        </button>
      </div>

      <footer className="custom-footer">
        <div className="footer-bar bar-top">SOBRE NÓS</div>
        <div className="footer-bar bar-middle">CULTURA</div>
        <div className="footer-bar bar-bottom">SAC</div>
      </footer>
    </div>
  );
}

export default Historico;