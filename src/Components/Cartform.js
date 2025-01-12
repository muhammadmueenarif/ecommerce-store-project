import React from 'react'
import Navbar from './Cartcomponents/Navbar'
import Amazon from './Cartcomponents/amazon'
import Shopcart from './Cartcomponents/shopcart'
import { useState } from 'react'
const Cartform = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar setShow={setShow}/>
      {/* amazon */}
     { show ? <Amazon/> : "Cart"}
      <Shopcart/>
    </div>
  )
}

export default Cartform
