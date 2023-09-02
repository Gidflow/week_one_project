
import React from 'react';
import suv from "../images/icon-suvs.svg"
import "./components.css"

const Suv = ({name, lMore}) => {
  return (
    <div className="component suv">
      <img src={suv} alt='suv-icon' className='child'/>
      <h1 className='child'>{name}</h1>
      <p className='child'>Take an Suv its spacious interior, power
        , and versatility. Perfect for your next family
        vacation and off-road adventures.
      </p>
      <div className="link">
     <a href='#d' className='child'>{lMore}</a>
     </div>
    </div>
  )
}

export default Suv