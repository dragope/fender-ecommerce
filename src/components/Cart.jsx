import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'


function Cart(){

    const [load, setLoad] = useState(true)
    const { cartList, emptyCart } = useCartContext()

    setTimeout(()=>{
        setLoad(false)
    }, 2000)

    return(
        <center>
            { load ?
    <div className="loader"></div>
    :
    cartList[0] === undefined ?
    <div className="cartpage-container">
        <h3>Your shopping cart is currently empty</h3>
        <Link to="/"><button className="start-shopping">Start shopping here!</button></Link>
    </div>
    :
    <div className="cartpage-container">
        { cartList.map(prod => 

        <div className="cart-product-container">
            <img className="cart-product-image" alt="Guitar" src={prod.pictureDetail1}/>
            <p className="cart-product-title">{prod.title}</p>
            <p className="cart-product-quantity">{prod.quantity}</p>
            <p className="cart-product-price">${prod.price}.00</p>
        </div>
        )}
        <button onClick={emptyCart}>Empty Shopping Cart</button>
    </div>
    
}
        </center>
    )
}

export default Cart






// { load ?
//     <div className="loader"></div>
//     :
//     <div className="cartpage-container">
//         { cartList.map(prod => 

//         <div className="cart-product-container">
//             <img className="cart-product-image" alt="Guitar" src={prod.pictureDetail1}/>
//             <p className="cart-product-title">{prod.title}</p>
//             <p className="cart-product-quantity">{prod.quantity}</p>
//             <p className="cart-product-price">${prod.price}.00</p>
//         </div>
//         )}
//         <button onClick={emptyCart}>Empty Shopping Cart</button>
//     </div>
    
// }