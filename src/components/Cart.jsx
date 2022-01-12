import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'
import eraseItem from './images/remove-cross.svg'
import CartUserForm from "./CartUserForm";

function Cart(){

    const [load, setLoad] = useState(true)
    const { cartList, emptyCart, deleteItem, finalPrice, createOrder, orderId, purchaseStatus, setPurchaseStatus } = useCartContext()
    

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
                    <h3>
                        Your shopping cart is currently empty
                    </h3>
                    <Link to="/">
                        <button 
                            className="start-shopping"
                        >
                            Start shopping here!
                        </button>
                    </Link>
                </div>

                :

                <div className="cartpage-container">
                    <h2>
                        You have selected the following products:
                    </h2>

                    { cartList.map(prod => 
                        <div className="cart-product-container" key={prod.id}>
                            <img 
                                className="cart-product-image" 
                                alt="Guitar" 
                                src={prod.pictureDetail1}
                            />
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

                            { purchaseStatus === 'Checking Cart' &&

                            <img 
                                className="cart-deleteItem" 
                                src={eraseItem} alt="Delete Item Button" 
                                onClick={() => deleteItem(prod)}
                            />
                            }

                        </div>
                    )}

                    <div className="cart-total-price">
                        <p>FINAL PRICE</p> <p>${finalPrice}.00</p>
                    </div>
                   
                    { purchaseStatus === 'Checking Cart' &&
                        <div className="cart-button-container">
                            <button 
                                className="empty-cart-button" 
                                onClick={emptyCart}
                            >
                                Empty Shopping Cart
                            </button>
                            <Link to="/">
                                <button 
                                    className="continue-shopping-button"
                                >
                                    CONTINUE SHOPPING
                                </button>
                            </Link>
                            <button 
                                className="continue-shopping-button" 
                                onClick={()=>setPurchaseStatus('Finishing Purchase')}
                            >  
                                FINISH PURCHASE
                            </button>
                        </div>
                    }
                    
                </div>
            }
            {
                (purchaseStatus === 'Finishing Purchase') && cartList.length >= 1 &&

                <div className="user-data-provier-container">
                    <h2>Please complete your costumer information:</h2>
                    <div className="user-data-form-container">
                        <div id="name">
                            <label>
                                Name
                            </label>
                            <input 
                                id="user-name" 
                                type="text" 
                                placeholder="Your name" 
                                required
                            />
                        </div>
                        <div id="surname">
                            <label>
                                Surname
                            </label>
                            <input 
                                id="user-surname" 
                                type="text" 
                                placeholder="Your surname" 
                                required
                            />
                        </div>
                        <div id="phone">
                            <label>
                                Phone
                            </label>
                            <input 
                                id="user-phone" 
                                type="tel" 
                                placeholder="Your phone number" 
                                required
                            />
                        </div>
                        <div id="email">
                            <label>
                                Email
                            </label>
                            <input
                                id="user-email" 
                                type="text" 
                                placeholder="Your email address" 
                                required
                            />
                        </div>
                        <div id="confirmemail">
                            <label>
                                Confirm your email
                            </label>
                            <input
                                id="user-confirmemail" 
                                type="text" 
                                placeholder="Confirm your email address" 
                                required
                            />
                        </div>
                    </div>

                    { orderId.length < 1 ?

                        <div className="user-data-form-buttons">
                            <button 
                                className="user-data-edit-button" 
                                onClick={()=> setPurchaseStatus('Checking Cart')}
                            >
                                Continue editing my Cart
                            </button>
                            <button 
                                className="user-data-submit-button" 
                                onClick={createOrder}
                            >
                                SUBMIT AND CONFIRM PURCHASE
                            </button>
                        </div>

                        :

                        <Link to={`/thankyou/${orderId}`}>
                            <button 
                                className="user-data-submit-button-done"
                            >
                                    CONGRATULATIONS! YOUR PURCHASE IS CONFIRMED! <br></br> View your order '{orderId}'' 
                            </button>
                        </Link>

                    }
                </div>

            }
        </center>
    )
}

export default Cart