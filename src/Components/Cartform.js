import React from 'react'
import Navbar from './Cartcomponents/Navbar'
import Amazon from './Cartcomponents/amazon'
import Shopcart from './Cartcomponents/shopcart'
import { useState } from 'react'
const Cartform = () => {
  const [show, setShow] = useState(true);
  // use state cannot be used inside the nested function.
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    cart.push(item)
  };
  return (
    <div>
      <Navbar setShow={setShow}/>
      {/* amazon */}
     { show ? <Amazon handleClick={handleClick}/> : "Cart"}
      <Shopcart/>
    </div>
  )
}

export default Cartform
