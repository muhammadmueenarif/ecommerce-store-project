import React from 'react'
import Navbar from './Cartcomponents/Navbar'
import Amazon from './Cartcomponents/amazon'
import Shopcart from './Cartcomponents/shopcart'
import { useState } from 'react'
import Cart from './Cartcomponents/Cart'
import './cartform.css'
const Cartform = () => {
  const [show, setShow] = useState(true);
  // use state cannot be used inside the nested function.
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let ispresent = false;
    // cart.push(item)
    // if item clicked it will show in cart, if clicked again then not show in cart,
    // if (cart.indexOf(item) !== -1 ) return;
    // setCart([...cart, item]);
    cart.forEach((product=> {
      if(item.id === product.id) ispresent = true;
    }))
    if(ispresent) {
      setWarning(true);
      setTimeout(()=> {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item])
  };

  const handlechange = (item, d)=> {
    let ind = -1;
    cart.forEach((data, index)=> {
      if(data.id === item.id) ind = index;
    })
    const tempArr = cart;
    tempArr[ind].amount += d;
    if(tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);

  };

  return (
    <div>
      {/* initial length of cart will be zero */}
      <Navbar setShow={setShow} size={cart.length}/>
      <h1 className='heading_content'>Meet your favourite skincare</h1>

      {/* amazon */}
     { show ? (<Amazon handleClick={handleClick}/>) 
     : (<Cart cart={cart} setCart={setCart} handlechange={handlechange}/>)}
      {warning && (<div className='Warning'>Item already added in cart</div>)}
      <Shopcart/>
    </div>
  )
}

export default Cartform
