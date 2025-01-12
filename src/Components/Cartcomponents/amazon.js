import React, { useState } from "react";
import list from "../data";
import Shopcart from "./shopcart";
import "../styles/amazon.css";
const Amazon = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    cart.push(item)
  };

  return (
    <section>
      {list.map((list) => (
        // if we don;t use id we get error in console that each list item has unique key id.
        <Shopcart key={list.id} item={list} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
