import React from 'react'
import './NavBar.css'
import logo from './images/pngaaa.com-1300231.png'
import CartWidget from './CartWidget'

function NavBar(){
    return(
        <nav className='nav-container'>
            <div className="nav-top">
                <div className="nav-login">
                    <a href="">Login</a>
                    <p>|</p>
                    <a href="">Register</a>
                </div>
                <img src={logo} alt="Fender Logo" className="nav-logo" />
                <CartWidget/>
            </div>
            <ul>
                <li><a href="">STRATOCASTER</a></li>
                <li><a href="">TELECASTER</a></li>
                <li><a href="">JAGUAR</a></li>
                <li><a href="">JAZZMASTER</a></li>
            </ul>
        </nav>
    )
}

export default NavBar