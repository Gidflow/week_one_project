import React from 'react'
import sedan from "../images/icon-sedans.svg"
import "./components.css"

const Sedan = ({name, lMore}) => {
  return (
    <div className='component sedans'>
      <img src={sedan} alt='sedan-icon' className='child'/>
      <h1 className='child'>{name}</h1>
      <p className='child'>Choose a sedan for its affordability and excellent
        fuel economy. Ideal for cruising in the city or on 
        your next road trip.
      </p>
      <div className="link">
     <a href='#d' className='child'>{lMore}</a>
     </div>
    </div>
  )
}

export default Sedan