import React from 'react'
import '../styles/shopcart.css'
const Shopcart = ({ list }) => {
    // use if else condition else error will occur.
    //   this is called restructuring, like using title, price, img =list. 

    if (list) {
        const { title, price, img } = list;

        return (<section>
            <div className='cards'>
                <div className='image_box'>
                    {/* if use p and {img}, img will not be responsive due to cdn links */}
                    <img className='imgbottle' src={img} alt="" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>{price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </section>
        )
    }
}

export default Shopcart
