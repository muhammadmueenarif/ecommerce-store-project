import React from 'react'
import '../styles/shopcart.css'
const Shopcart = ({ item, handleClick }) => {
    // use if else condition else error will occur.
    //   this is called restructuring, like using title, price, img =list. 

    if (item) {
        const { title, price, img } = item;

        const newhandleclick = ()=> {
            handleClick(item);
        }

        return (
            <div className='cards'>
                <div className='image_box'>
                    {/* if use p and {img}, img will not be responsive due to cdn links */}
                    <img className='imgbottle' src={img} alt="" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>Price:$ {price}</p>
                    <button onClick={()=>handleClick(item)}>Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default Shopcart
