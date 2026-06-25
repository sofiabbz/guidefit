import { useNavigate } from 'react-router-dom'
import './Sac.css'

function Sac() {
  const navigate = useNavigate()

  return (
    <div className="sac-page">
      <button className="btn-voltar" onClick={() => navigate(-1)}>←</button>

      <div className="sac-logo-wrap">
        <svg className="logo-icon" viewBox="0 0 48 48" fill="none">
          <circle cx="30" cy="8" r="5" fill="white"/>
          <path d="M28 13 C24 18 20 22 18 28" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M28 18 C32 14 36 11 38 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M24 20 C20 22 16 22 14 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M18 28 C16 33 14 37 13 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M18 28 C22 32 26 34 30 35" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="logo-text">Guidefit</span>
      </div>

      <div className="sac-card">
        <p>Para quaisquer problemas, entrar em contato com o e-mail abaixo:</p>
        <a href="mailto:Guidefit@outlook.com" className="sac-email">
          Guidefit@outlook.com
        </a>
      </div>

      <footer className="sac-footer">
        <div className="footer-row footer-sac-label">SAC</div>
      </footer>
    </div>
  )
}

export default Sac