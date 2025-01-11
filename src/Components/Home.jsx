import React from 'react'
import './Home.css'
import Cartform from './Cartform'
const Home = () => {
  return (
    <div>
      <div className='home_header'>
        <div className='data'>
        <div className="header_container">
          <h1>Hair</h1>
          <p>Starting from top, we covered range of formulas, to keep your hair 
            in tip-top shape and style in mint condition</p>
            <button className="Shampoobtn">Shop Shampoo</button>
        </div>
        </div>
      </div>
      <Cartform/>
    </div>
  )
}

export default Home
