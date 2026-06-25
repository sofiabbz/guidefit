import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Onboarding from './paginas/Onboarding';
import Dashboard from './paginas/Dashboard';
import Progresso from './paginas/Progresso';
import Historico from './paginas/Historico';
import SobreNos from './paginas/SobreNos';      
import Cultura from './paginas/Cultura';        
import Sac from './paginas/Sac';                

function Aplicacao() {
  return (
    <BrowserRouter>
      <Routes>

        {/* REDIRECIONAMENTO INICIAL */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* AUTENTICAÇÃO */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        {/* ONBOARDING */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* NOVAS FUNCIONALIDADES */}
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/historico" element={<Historico />} />

        {/* PÁGINAS INFORMATIVAS */}
        <Route path="/sobre-nos" element={<SobreNos />} />  
        <Route path="/cultura" element={<Cultura />} />    
        <Route path="/sac" element={<Sac />} />             

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Aplicacao;