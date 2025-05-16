import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Crie este arquivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Meu Escritório</Link>
        <ul className="menu">
          <li><Link to="/painel-de-controle">Painel de Controle</Link></li>
          <li><Link to="/minha-conta">Minha Conta</Link></li>
          <li><Link to="/minha-licenca">Minha Licença</Link></li>
          <li><Link to="/equipe-de-vendas">Equipe de Vendas</Link></li>
          <li><Link to="/financeiro">Financeiro</Link></li>
          <li><Link to="/loja-interna">Loja Interna</Link></li>
          <li><Link to="/suporte">Suporte</Link></li>
          <li><Link to="/universidade">Universidade</Link></li>
          <li><Link to="/atualizacao-licenciados">Atualização Licenciados</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;