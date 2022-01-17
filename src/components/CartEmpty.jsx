import React from 'react'
import { Link } from 'react-router-dom'

function CartEmpty(){
    return(
        <div className="cartpage-container">
            <h3>
                Your shopping cart is currently empty
            </h3>
            <Link to="/">
                <button className="start-shopping">
                    Start shopping here!
                </button>
            </Link>
        </div>
    )
}

export default CartEmpty