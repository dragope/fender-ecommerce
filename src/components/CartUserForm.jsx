import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import CartUserFormError from './CartUserFormError'

function CartUserForm(){

    const { createOrder, orderId, setPurchaseStatus, error } = useCartContext()
    
    return(
            <div className="user-data-provier-container">
                <h2>Please complete your costumer information:</h2>
                <form className="user-data-form-container">
                    <div id="name">
                        <label>Name</label>
                        <input id="user-name" type="text" placeholder="Your name" />
                    </div>
                    <div id="surname">
                        <label>Surname</label>
                        <input id="user-surname" type="text" placeholder="Your surname" />
                    </div>
                    <div id="phone">
                        <label>Phone</label>
                        <input id="user-phone" type="tel" placeholder="Your phone number" />
                    </div>
                    <div id="email">
                        <label>Email</label>
                        <input id="user-email" type="text" placeholder="Your email address" />
                    </div>
                    <div id="confirmemail">
                        <label>Confirm your email</label>
                        <input id="user-confirmemail" type="text" placeholder="Confirm your email address" />
                    </div>
                </form>

                { orderId.length < 1 && error.length < 1 ?

                    <div className="user-data-form-buttons">
                        <button className="user-data-edit-button" onClick={()=> setPurchaseStatus('Checking Cart')}>
                            Continue editing my Cart
                        </button>
                        <button className="user-data-submit-button" onClick={createOrder}>
                            SUBMIT AND CONFIRM PURCHASE
                        </button>
                    </div>

                    : orderId.length < 1 && error.length > 1 ?

                    <CartUserFormError/>

                    :

                    <Link to={`/thankyou/${orderId}`}>
                        <button className="user-data-submit-button-done">
                            CONGRATULATIONS! YOUR PURCHASE IS CONFIRMED! <br></br> View your order '{orderId}'' 
                        </button>
                    </Link>
                    
                }

            </div>
    )
}

export default CartUserForm