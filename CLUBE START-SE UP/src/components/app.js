import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/LoginPage';
import ControlPanel from './components/Dashboard/ControlPanel';
import MyAccount from './components/Dashboard/MyAccount';
import MyLicense from './components/Dashboard/MyLicense';
import SalesTeam from './components/Dashboard/SalesTeam';
import Financial from './components/Dashboard/Financial';
import InternalStore from './components/Dashboard/InternalStore';
import Support from './components/Dashboard/Support';
import University from './components/Dashboard/University';
import LicenseeUpdatePanel from './components/Dashboard/LicenseeUpdatePanel';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/painel-de-controle" element={<ControlPanel />} />
            <Route path="/minha-conta" element={<MyAccount />} />
            <Route path="/minha-licenca" element={<MyLicense />} />
            <Route path="/equipe-de-vendas" element={<SalesTeam />} />
            <Route path="/financeiro" element={<Financial />} />
            <Route path="/loja-interna" element={<InternalStore />} />
            <Route path="/suporte" element={<Support />} />
            <Route path="/universidade" element={<University />} />
            <Route path="/atualizacao-licenciados" element={<LicenseeUpdatePanel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;