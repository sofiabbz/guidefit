import { useNavigate } from 'react-router-dom'
import './SobreNos.css'

function SobreNos() {
  const navigate = useNavigate()

  return (
    <div className="sobre-page">
      <button className="btn-voltar" onClick={() => navigate(-1)}>←</button>

      <div className="sobre-logo-wrap">
        <svg className="logo-icon" viewBox="0 0 48 48" fill="none">
          <circle cx="30" cy="8" r="5" fill="#4a9688"/>
          <path d="M28 13 C24 18 20 22 18 28" stroke="#4a9688" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M28 18 C32 14 36 11 38 9" stroke="#4a9688" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M24 20 C20 22 16 22 14 21" stroke="#4a9688" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M18 28 C16 33 14 37 13 42" stroke="#4a9688" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M18 28 C22 32 26 34 30 35" stroke="#3a7a6e" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="logo-text">Guidefit</span>
      </div>

      <h2 className="sobre-titulo">Sobre nós</h2>

      <ul className="sobre-lista">
        <li>Software focado em te deixar mais confiante e com a saúde em dia, fazendo com que você se movimente independente de onde estiver.</li>
        <li>Treino personalizado focado no ideal que você sonha.</li>
        <li>Plataforma intuitiva para melhorar a sua experiência.</li>
      </ul>

      <footer>
        <a href="#" className="footer-row footer-cultura">Cultura</a>
        <a href="#" className="footer-row footer-sac">SAC</a>
      </footer>
    </div>
  )
}

export default SobreNos