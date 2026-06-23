import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Onboarding from './paginas/Onboarding';
import Dashboard from './paginas/Dashboard';
import Progresso from './paginas/Progresso';
import Historico from './paginas/Historico';

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

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Aplicacao;