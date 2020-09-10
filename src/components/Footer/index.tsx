import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Button from "../Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Envie um e-mail para a gente!
        </p>
        <p className="footer-subscription-text">
          Retornaremos o contato o mais breve possível.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Enviar</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre</h2>
            <Link to="/sign-up">Como trabalhamos</Link>
            <Link to="/">Termos de serviço</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contacte-nos</h2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
            <Link to="/">Patrocínios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Vídeos</h2>
            <Link to="/">Envie um vídeo</Link>
          </div>
          <div className="footer-link-items">
            <h2>Redes Sociais</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TMRec <i className="fas fa-music" />
            </Link>
          </div>
          <small className="website-rights">TMRec © 2020</small>
          <div className="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="YouTube"
              className="social-icon-link youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="LinkedIn"
              className="social-icon-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
