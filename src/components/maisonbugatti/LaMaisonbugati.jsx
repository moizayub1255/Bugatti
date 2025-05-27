import React from 'react'
import '../../style/La.css'

const LaMaisonbugati = ({ data }) => {
    return (
        <div className="card">
            <img src={data.img} alt={data.title} className="card-image" />
            <p className="card-description">{data.des}</p>
            <h2 className="card-title">{data.title}</h2>
            <button className="card-button">{data.btn}</button>
        </div>
    )
}

export default LaMaisonbugati

