import React from "react";
import Sportscar from "./Sportscar";
import "../../style/sportscar.css";
const IteratorSports = () => {
  const card = [
    {
      img: "https://bugatti.imgix.net/6733871ced9d56f31c5f0182/bugatti-tourbillon-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "TIMELESS ELEGANCE AND SPEED",
      head: "Tourbillion",
    },
    {
      img: "https://bugatti.imgix.net/677e8130e825e63ca2bd56fe/bugatti-w16mistral-card_v3.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "THE ULTIMATE ROADSTER",
      head: "Mistral",
    },
    {
      img: "https://bugatti.imgix.net/6733878496f2c0c4a773f58b/bugatti-bolide-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "LA PUR SANG DES AUTOMOBILES",
      head: "Bolide",
    },
    {
      img: "https://bugatti.imgix.net/67338aa2ed9d56f31c5f0689/bugatti-chiron-card-02.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "FACETS OF PERFORMANCE",
      head: "Chiron",
    },
    {
      img: "https://bugatti.imgix.net/673387e8ed9d56f31c5f01c5/bugatti-divo-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "MODERN COACHBUILDING AT ITS BEST",
      head: "Divo",
    },
    {
      img: "https://bugatti.imgix.net/6733881f96f2c0c4a773f5b2/bugatti-centodieci-card.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=688&fp-x=0.5&fp-y=0.5&dpr=1.5",
      btn: "LEARN MORE",
      title: "REMINISCENCE OF AN ICON",
      head: "Centodieci",
    },
  ];
  return (
    <div className="main_car_section">
      <div className="headdings">
        <h3>OUR HYPER SPORTS CARS</h3>
        <p>The quintessence of luxury and speed.</p>
      </div>
      <div className="card_section">
        {card.map((ele, key) => {
          return (
            <div key={key}>
              <Sportscar cars={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IteratorSports;
