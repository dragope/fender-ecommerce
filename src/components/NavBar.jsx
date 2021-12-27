import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './images/pngaaa.com-1300231.png'
import CartWidget from './CartWidget'
import {useCartContext} from '../context/CartContext'

function NavBar(){
    const { cartList } = useCartContext()
    return(
        <nav className='nav-container'>
            <div className="nav-top">
                <div className="nav-login">
                    <a href="">Login</a>
                    <p>|</p>
                    <a href="">Register</a>
                </div>
                <Link to="/"><img src={logo} alt="Fender Logo" className="nav-logo" /></Link>
                { cartList[0] === undefined ? 
                <div className='cart-widget-empty'></div>
                :
                <CartWidget/>
                }
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