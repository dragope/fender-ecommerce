import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import cart from './images/shopping cart.svg'
import {useCartContext} from '../context/CartContext'

function CartWidget(){

    const { cartList } = useCartContext()
    const totalItems = cartList.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)

    return(
        <div className="cart-container">
            <Link to="/cart">
                <img className="cart-container-cart" src={cart} alt="Shopping Cart Icon"/>
            </Link>
            { cartList[0] !== undefined && 
            <div className="cart-container-circle"><p>{totalItems}</p></div>
            }
        </div>
    )
}

export default CartWidget