import React from 'react'
import Navbar from './Cartcomponents/Navbar'
import Amazon from './Cartcomponents/amazon'
import Shopcart from './Cartcomponents/shopcart'
import { useState } from 'react'
import Cart from './Cartcomponents/Cart'
const Cartform = () => {
  const [show, setShow] = useState(true);
  // use state cannot be used inside the nested function.
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    // cart.push(item)
    // if item clicked it will show in cart, if clicked again then not show in cart,
    if (cart.indexOf(item) !== -1 ) return;
    setCart([...cart, item]);
  };

  const handlechange = (item, d)=> {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount = +d;

    if(arr[ind].amount === 0) arr [ind].amount = 1;
    setCart([...arr]);
  }

  return (
    <div>
      {/* initial length of cart will be zero */}
      <Navbar setShow={setShow} size={cart.length}/>
      {/* amazon */}
     { show ? <Amazon handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handlechange={handlechange}/>}
      <Shopcart/>
    </div>
  )
}

export default Cartform
