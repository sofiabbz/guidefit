import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import Progresso from './pages/Progresso';
import Historico from './pages/Historico';

function App() {
  return (
    <Router>
      <Routes>
        {/* Se entrar no link puro, redireciona direto para o seu Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Rotas oficiais do site */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </Router>
  );
}

export default App;