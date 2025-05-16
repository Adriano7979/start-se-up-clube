import React from 'react';
import { Link } from 'react-router-dom';
import './ControlPanel.css'; // Crie este arquivo CSS

function ControlPanel() {
  return (
    <div className="control-panel">
      <h2>Painel de Controle</h2>
      <div className="dashboard-links">
        <Link to="/minha-conta">Minha Conta</Link>
        <Link to="/minha-licenca">Minha Licença</Link>
        <Link to="/equipe-de-vendas">Equipe de Vendas</Link>
        <Link to="/financeiro">Financeiro</Link>
        <Link to="/loja-interna">Loja Interna</Link>
        <Link to="/suporte">Suporte</Link>
        <Link to="/universidade">Universidade</Link>
        <Link to="/atualizacao-licenciados">Atualização de Licenciados</Link>
      </div>
    </div>
  );
}

export default ControlPanel;