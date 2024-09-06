import React from 'react';

const CardIndividual = () => (
  <div className="card card-individual">
    <h3>Individual</h3>
    <div className="dropdown">
      <p className="dropdown-title">1 Usuário</p>
      <button className="dropdown-button">10 Vídeos R$15</button>
      <div className="dropdown-content">
        <a href="#">5 Vídeos R$10</a>
        <a href="#">10 Vídeos R$15</a>
        <a href="#">20 Vídeos R$25</a>
      </div>
    </div>
    <a className="register-button register-button-individual">Cadastrar</a>
  </div>
);

const CardProfissional = () => (
  <div className="card card-profissional">
    <h3>Profissional - Times</h3>
    <div className="dropdown">
      <p className="dropdown-title">1-10 Usuários</p>
      <button className="dropdown-button">10 Vídeos R$15</button>
      <div className="dropdown-content">
        <a href="#">5 Vídeos R$10</a>
        <a href="#">10 Vídeos R$15</a>
        <a href="#">20 Vídeos R$25</a>
      </div>
    </div>
    <div className="dropdown">
      <p className="dropdown-title">+10 Usuários</p>
      <button className="dropdown-button">1 Usuário</button>
      <div className="dropdown-content">
        <a href="#">1 Usuário</a>
        <a href="#">5 Usuários</a>
        <a href="#">10 Usuários</a>
      </div>
    </div>
    <a className="register-button register-button-profissional">Cadastrar</a>
  </div>
);

const CardCorporativo = () => (
  <div className="card card-corporativo">
    <h3>Corporativo</h3>
    <img src="corp.png" alt="Imagem Corporativa" className="card-image" />
    <a className="register-button register-button-corporativo">Entre em contato</a>
  </div>
);

const Planos = () => (
  <section className="planos">
    <div className="container">
      <h1>Planos</h1>
      <div className="cards-container">
        <CardIndividual />
        <CardProfissional />
        <CardCorporativo />
      </div>
    </div>
  </section>
);

export default Planos;