import React from 'react';
import './Footer.css'; // Crie este arquivo CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="support">
          <a href="https://wa.me/SEUNUMEROWHATSAPP" target="_blank" rel="noopener noreferrer">Suporte WhatsApp</a>
        </div>
        <div className="contact">
          Contato: seuemail@exemplo.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;