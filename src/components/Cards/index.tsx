import React from "react";

import CardItem from "../CardItem";

import "./styles.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Veja os artistas que já alçaram vôo conosco!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../assets/images/img-4.jpeg")}
              text="Toni Braki"
              label="Rock 'n Roll/Pop Rock"
              path="/products"
            />
            <CardItem
              src={require("../../assets/images/img-1.jpg")}
              text="Rickson"
              label="Hip-hop Lo-fi/Raggae/EDM"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../assets/images/img-2.jpg")}
              text="Hot Kiss"
              label="Heavy Rock"
              path="/products"
            />
            <CardItem
              src={require("../../assets/images/img-3.jpg")}
              text="Tolonei"
              label="Heavy Metal"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
