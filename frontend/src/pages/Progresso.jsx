import React from 'react';
import './Dashboard.css'; // Reaproveita o mesmo CSS para manter o design idêntico

function Progresso() {
  const nomeUsuario = localStorage.getItem("usuarioNome") || "Usuário";

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="brand-section">
          <span className="brand-logo"></span>
          <h1 className="brand-name">Guidefit</h1>
        </div>

        <hr className="brand-divider" />

        <h2 className="dashboard-title">Meu Progresso</h2>
        <p className="welcome-text">Olá, {nomeUsuario}. Acompanhe seus relatórios de desempenho.</p>

        {/* Espaço reservado para os gráficos */}
        <div className="workout-section" style={{ textAlign: 'center', padding: '30px 10px' }}>
          <p style={{ fontSize: '13px', color: '#666', margin: 0, lineHeight: '1.6' }}>
            Nenhum dado disponível para gerar relatório. Realize treinos para começar a acompanhar seu desempenho.
          </p>
        </div>

        {/* Botão de retorno rápido ao painel */}
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

export default Progresso;