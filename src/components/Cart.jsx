import React from "react";
import './Cart.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import {useCartContext} from '../context/CartContext'
import eraseItem from './images/remove-cross.svg'
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"

function Cart(){

    const [orderId, setOrderId] = useState('')
    const [load, setLoad] = useState(true)
    const { cartList, emptyCart, deleteItem } = useCartContext()

    setTimeout(()=>{
        setLoad(false)
    }, 2000)

    const finalPrice = cartList.map(item => item.accprice).reduce((prev, curr) => prev + curr, 0)

    // CREAR ORDEN
    const createOrder = (e) => {
        e.preventDefault()
        let userName = document.getElementById('user-name').value + " " + document.getElementById('user-surname').value
        let userPhone = document.getElementById('user-phone').value
        let userEmail = document.getElementById('user-email').value
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = { name: userName, phone: userPhone, email: userEmail }
        order.price = finalPrice

        order.items = cartList.map(cartItem =>{
            const id = cartItem.id;
            const title = cartItem.title;
            const price = cartItem.price;

            return {id, title, price}
        } )

        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))   
    }

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
                <div hidden="hidden" className="cartpage-container">
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
                    <div className="cart-button-container">
                    <button className="empty-cart-button" onClick={emptyCart}>Empty Shopping Cart</button>
                        <Link to="/"><button className="continue-shopping-button">CONTINUE SHOPPING</button></Link>
                        <button className="continue-shopping-button" onClick={()=>setOrderId('2')}> FINISH PURCHASE</button>
                    </div>
                </div>
            }
            {
                orderId.length >= 1 ?

                <div hidden="hidden" className="user-data-provier-container">
                    <h2>Please complete your costumer information:</h2>
                    <div className="user-data-form-container">
                        <div id="name">
                            <label>Name</label><input id="user-name" type="text" placeholder="Your name"></input>
                        </div>
                        <div id="surname">
                            <label>Surname</label><input id="user-surname"type="text" placeholder="Your surname"></input>
                        </div>
                        <div id="phone">
                            <label>Phone</label><input id="user-phone" type="number" placeholder="Your phone number"></input>
                        </div>
                        <div id="email">
                            <label>Email</label><input id="user-email" type="text" placeholder="Your email address"></input>
                        </div>
                    </div>
                    <button className="user-data-submit-button" onClick={createOrder}>SUBMIT AND CONTINUE</button>
                </div>
                :
                <div className="user-data-provier-container"></div>
            }
            {
                orderId.length > 2 ?
                <center className="order-summary">
                    <h1>CONGRATULATIONS, Your purchase has been made!</h1>
                    <h2>This is your order summary:</h2>
                    <div className="order-summary-userdata">
                        <h4>Order ID: {orderId}</h4>
                        <h4>Name: {document.getElementById("user-name").value + " " + document.getElementById("user-surname").value}</h4>
                        <h4>Phone: {document.getElementById("user-phone").value}</h4>
                        <h4>Email: {document.getElementById("user-email").value}</h4>
                    </div>
                    {cartList.map(item => 
                            <div className="cart-product-container" key={item.id}>
                                <div className="cart-product-title">
                                    <p>Product</p>
                                    <p>{item.title}</p>
                                </div>
                                <div className="cart-product-quantity">
                                    <p>Quantity</p>
                                    <p>{item.quantity}</p>
                                </div>
                                <div className="cart-product-unitprice">
                                    <p>Unit Price</p>
                                    <p>${item.price}.00</p>
                                </div>
                                <div className="cart-product-totalprice">
                                    <p>Total Price</p>
                                    <p>${item.accprice}.00</p>
                                </div>
                            
                            </div>
                        
                    )}
                    <div className="cart-total-price"><p>FINAL PRICE</p> <p>${finalPrice}.00</p></div>
                    <h1>Thank you for your purchase!</h1>
                </center>
                :
                <h4>Order ID: NONE</h4>
                
                /* {
                orderId.length > 2 ?

                    <div className="order-summary">
                    <h1>CONGRATULATIONS! Your purchase has been made</h1>
                    <h2>This is your order summary:</h2>
                    <h4>Order ID: {orderId}</h4>
                    <div className="order-userinfo">
                        <p>Name: {document.getElementById("user-name") + " " + document.getElementById("user-surname")}</p>
                        <p>Phone: {document.getElementById("user-phone")}</p>
                        <p>Email: {document.getElementById("user-email")}</p>
                    </div>
                    {cartList.map(item => 
                        <div className="cart-product-container" key={item.id}>
                        <img className="cart-product-image" alt="Guitar" src={item.pictureDetail1}/>
                        <div className="cart-product-title">
                            <p>Product</p>
                            <p>{item.title}</p>
                        </div>
                        <div className="cart-product-quantity">
                            <p>Quantity</p>
                            <p>{item.quantity}</p>
                        </div>
                        <div className="cart-product-unitprice">
                            <p>Unit Price</p>
                            <p>${item.price}.00</p>
                        </div>
                        <div className="cart-product-totalprice">
                            <p>Total Price</p>
                            <p>${item.accprice}.00</p>
                        </div>
                        
                    </div>
                    )}
                    <div className="cart-total-price"><p>FINAL PRICE</p> <p>${finalPrice}.00</p></div>
                    <h1>Thank you for your purchase!</h1>
                    </div>
                    :
                    <div className="order-summary"></div>
            } */}

        </center>
    )
}

export default Cart