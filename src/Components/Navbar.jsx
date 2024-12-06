import React from 'react'
import { Link } from 'react-router-dom'
import Imgrefresher from './images/logo.avif'
import "./Navbar.css"
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
                    <div className="navbar_main">
                        <div>
                            <div>
                                {/* search icon */}
                            </div>
                            {/* menu icon */}
                        </div>

                        <div>
                            <img src={Imgrefresher} className="heading_logo" alt="Logo" />
                        </div>

                        <div className="bad_search">
                            {/* search icon */}
                            {/* local icon */}
                        </div>
                    </div>

                    <div className="Nav_links">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/contact" className="link">Contact</Link>
                        <Link to="/privacy" className="link">Privacy</Link>
                        <Link to="/loginform" className="link">Login</Link>
                        <Link to="/signup" className="link">SignUp</Link>
                    </div>

                    <div>
                        <Link to="/" className="sidebar_link">Home</Link>
                        <Link to="/contact" className="sidebar_link">Contact</Link>
                        <Link to="/privacy" className="sidebar_link">Privacy</Link>
                        <Link to="/loginform" className="sidebar_link">Login</Link>
                        <Link to="/signup" className="sidebar_link">SignUp</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
