import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './images/pngaaa.com-1300231.png'
import CartWidget from './CartWidget'

function NavBar(){
    
    return(
        <nav className='nav-container'>
            <div className="nav-top">
                <Link to="/"><img src={logo} alt="Fender Logo" className="nav-logo" /></Link>
                <CartWidget/>
            </div>
            <ul>
                <li><Link to="/category/stratocaster">STRATOCASTER</Link></li>
                <li><Link to="/category/telecaster">TELECASTER</Link></li>
                <li><Link to="/category/jaguar">JAGUAR</Link></li>
                <li><Link to="/category/jazzmaster">JAZZMASTER</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar