import React from 'react'
import '../../style/sportscar.css'

const Sportscar = ({ cars }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${cars.img})` }}
    >
      <div className="card-overlay"></div>
      <div className="card-content">
        <div className="card-head">{cars.head}</div>
        <div className="card-title">{cars.title}</div>
        <button className="card-button">{cars.btn}</button>
      </div>
    </div>
  )
}

export default Sportscar