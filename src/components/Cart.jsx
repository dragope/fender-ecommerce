import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'
import eraseItem from './images/remove-cross.svg'


function Cart(){

    const [load, setLoad] = useState(true)
    const { cartList, emptyCart, deleteItem } = useCartContext()

    setTimeout(()=>{
        setLoad(false)
    }, 2000)

    const finalPrice = cartList.map(item => item.accprice).reduce((prev, curr) => prev + curr, 0)

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
                    <h2>You have selected the following products:</h2>
                    { cartList.map(prod => 
                    <div className="cart-product-container" key={prod.id}>
                        <img className="cart-product-image" alt="Guitar" src={prod.pictureDetail1}/>
                        <div className="cart-product-title">
                            <p>Product</p>
                            <p>{prod.title}</p>
                        </div>
                        <div className="cart-product-quantity">
                            <p>Quantity</p>
                            <p>{prod.quantity}</p>
                        </div>
                        <div className="cart-product-unitprice">
                            <p>Unit Price</p>
                            <p>${prod.price}.00</p>
                        </div>
                        <div className="cart-product-totalprice">
                            <p>Total Price</p>
                            <p>${prod.accprice}.00</p>
                        </div>
                        <img className="cart-deleteItem" src={eraseItem} alt="Delete Item Button" onClick={() => deleteItem(prod)}/>
                    </div>
                    )}
                    <div className="cart-total-price"><p>FINAL PRICE</p> <p>${finalPrice}.00</p></div>
                    <button className="empty-cart-button" onClick={emptyCart}>Empty Shopping Cart</button>
                    <Link to="/"><button className="continue-shopping-button">CONTINUE SHOPPING</button></Link>
                </div>
            }
        </center>
    )
}

export default Cart