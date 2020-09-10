import React from "react";

import Button from "../Button";

import "./styles.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <video
        src={require("../../assets/videos/video-1.mp4")}
        autoPlay
        loop
        muted
      />
      <h1>TORNAMOS SEU SONHO REALIDADE</h1>
      <p>Está esperando o quê?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          COMEÇAR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          NOSSO TRABALHO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
