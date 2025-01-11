import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import '../styles/navbar.css'
const Navbar = () => {
    return <nav>
        <div className='nav_box'>
            <span className='my_shop'>My Shop</span>
            <div className='cart'>
                <span>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </span>
                <span>0</span>
            </div>
        </div>
    </nav>
}

export default Navbar
