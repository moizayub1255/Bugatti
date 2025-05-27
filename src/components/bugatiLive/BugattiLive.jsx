import React from 'react'
import '../../style/bugatilive.css'

const BugattiLive = ({instacars}) => {
  return (
    <div className='live_cards'>
        <img src={instacars.img} alt="" />
    </div>
  )
}

export default BugattiLive
