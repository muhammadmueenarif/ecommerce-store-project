import React, { useEffect, useState } from 'react'
import '../styles/cart.css'
const Cart = ({cart, setCart, handlechange}) => {
    const [price, setprice] = useState(0);

    const handleremove =(id)=> {
        const arr = cart.filter((item)=> item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item)=> (ans += item.price*item.amount));
        setprice(ans);
    };
    useEffect(()=>{
        handlePrice();
    })
  return (
    <div>
      <article>
        {
            cart.map((item) => (
              <div className='cart_box'>
               <div className='cart_img'>
                 <img src={item.img} alt={item.title} />
                 <p>{item.img}</p>
               </div>
               <div>
                <button onClick={()=> handlePrice(item, 1)}>+</button>
                <button onClick={()=> handlePrice(item, -1)}>-</button>
                <button onClick={()=> handleremove(item.id)}>Remove</button>
               </div>
              </div>
            ))}
            <div className="total">
                <span>Total price of the cart</span>
                <span>$ {price}</span>
            </div>
      </article>
    </div>
  )
}

export default Cart
