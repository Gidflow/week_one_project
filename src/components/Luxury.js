import React from 'react'
import luxury from "../images/icon-luxury.svg"
import "./components.css"

const Luxury = (props) => {

  let {name, lMore} = props;
  return (
    <div className='component luxury'>
      <img  src={luxury} alt='luxury-icon' className='child'/>
     <h1 className='child'>{name}</h1>
     <p className='child'> Cruise in the best car brands without 
      the bloated prices. Enjoy the enhanced comfort
      of a luxury rental and arrive in style.
     </p>
     <div className="link">
     <a href='#d' className='child'>{lMore}</a>
     </div>
    

    </div>
  )
}

export default Luxury