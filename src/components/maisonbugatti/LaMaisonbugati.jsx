import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/La.css";

const LaMaisonbugati = ({ data }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (data.link) {
      navigate(data.link);
    }
  };

  return (
    <div className="card">
      <img src={data.img} alt={data.title} className="card-image" />
      <p className="card-description">{data.des}</p>
      <h2 className="card-title">{data.title}</h2>
      <button className="card-button" onClick={handleLearnMore}>
        {data.btn}
      </button>
    </div>
  );
};

export default LaMaisonbugati;
