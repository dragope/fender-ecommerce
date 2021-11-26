import React from 'react'
import './NavBar.css'
import logo from'./images/pngaaa.com-1300231.png'
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
                <li><a href="">GUITAR</a></li>
                <li><a href="">BASS</a></li>
                <li><a href="">AMPLIFICATION</a></li>
                <li><a href="">STRINGS</a></li>
                <li><a href="">PEDALS</a></li>
                <li><a href="">ACCESSORIES</a></li>
            </ul>
        </nav>
    )
}

export default NavBar