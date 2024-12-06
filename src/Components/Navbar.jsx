import React from 'react'
import { Link } from 'react-router-dom'
import Imgrefresher from './images/logo.avif'
const Navbar = () => {
    return (
        <div>
            <div className='navbar_div'>
                <div>
                    <input type='text' placeholder='Search here' />
                    {/* search icon */}
                    {/* hamburger menu icon */}
                </div>

                <div>
                    <div className='navbar_main'>
                        <div>
                            <div>
                                {/* search icon */}
                            </div>
                            {/* menu icon */}
                        </div>
                        <div>
                            <img src={Imgrefresher} className='heading_logo' alt="Logo" />
                        </div>
                        <div className='bad_search'>
                            {/* search icon */}
                            {/* local icon */}
                        </div>

                    </div>
                </div>
            </div>
            <Link to="/">Home</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/loginform">Loginform</Link>
            <Link to="/signup">SignUp</Link>
        </div>
    )
}

export default Navbar
