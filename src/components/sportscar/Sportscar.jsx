import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/sportscar.css";

const Sportscar = ({ cars }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (cars.link) {
      navigate(cars.link);
    }
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${cars.img})` }}>
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="card-head">{cars.head}</div>
        <div className="card-title">{cars.title}</div>
        <button className="card-button" onClick={handleLearnMore}>
          {cars.btn}
        </button>
      </div>
    </div>
  );
};

export default Sportscar;
