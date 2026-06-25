import { useNavigate } from 'react-router-dom'
import './Cultura.css'

function Cultura() {
  const navigate = useNavigate()

  return (
    <div className="cultura-page">
      <button className="btn-voltar" onClick={() => navigate(-1)}>←</button>

      <div className="cultura-logo-wrap">
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

      <h2 className="cultura-titulo">Cultura</h2>

      <div className="cultura-content">
        <div className="cultura-valores">
          <span className="icone">🤝</span>
          <div>
            <strong>Nossos valores:</strong>
            <ul>
              <li>Acessibilidade</li>
              <li>Eficácia</li>
              <li>Inovação</li>
              <li>Melhoria da sua performance</li>
            </ul>
          </div>
        </div>

        <div className="cultura-missao">
          <div className="cultura-item">
            <span className="icone">🎯</span>
            <p>Nossa missão é capacitar indivíduos a transformar sua saúde e bem-estar, oferecendo programas de treino funcional personalizados, adaptáveis e eficazes para serem realizados em casa ou na academia, com o objetivo de alcançar seus resultados específicos de forma segura e motivadora.</p>
          </div>
          <div className="cultura-item">
            <span className="icone">👁️</span>
            <p>Ser a plataforma líder e mais confiável de treinamento funcional personalizado, reconhecida por sua inovação, interface intuitiva e pela capacidade de inspirar e guiar milhões de pessoas globalmente a viverem uma vida mais ativa e plena até 2030.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cultura