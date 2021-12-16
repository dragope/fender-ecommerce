import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import cart from './images/shopping cart.svg'

function CartWidget(){
    return(
        
        <div className="cart-container">
            <label>Shopping Cart</label>
            <Link to="/cart">
                <img className="cart-container-cart" src={cart} alt="Shopping Cart Icon"/>
            </Link>
            <div className="cart-container-circle"><p>0</p></div>
        </div>   
    )
}

export default CartWidget