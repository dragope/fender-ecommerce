import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useCartContext} from '../context/CartContext'
import './ThankYouPage.css'
import { getDoc, getFirestore, doc } from "firebase/firestore"

function ThankYouPage(){

    const { finalPrice, cartList, orderId } = useCartContext()
    const [ order, setOrder ] = useState({})
    const [load, setLoad] = useState(true)
    const { idOrder } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const orderRef = doc(db, 'orders', orderId)
        getDoc(orderRef)
            .then(resp => setOrder({ id: resp.id, ...resp.data()}))
            .catch(e => console.log(e))
            .finally(()=> setLoad(false))
    }, [orderId])
    
    console.log(order)
    console.log(finalPrice)
    console.log(cartList)

    return(
        <center>
        { load ?
            <div className="loader"></div>
            : 
        <center className="order-summary">
        <h1>CONGRATULATIONS, Your purchase has been made!</h1>
        <h3>This is your order summary:</h3>
        <div className="order-summary-userdata">
            <h4>Order ID: {order.id}</h4>
            <h4>Name: {order.buyer.name}</h4>
            <h4>Phone: {order.buyer.phone}</h4>
            <h4>Email: {order.buyer.email}</h4>
        </div>
        {order.items.map(item => 
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
                        <p>${item.price*item.quantity}.00</p>
                    </div>
                
                </div>
            
        )}
        <div className="cart-total-price"><p>FINAL PRICE</p> <p>${finalPrice}.00</p></div>
        <h1>Thank you for your purchase!</h1>
    </center>
    }
    </center>
    )
}

export default ThankYouPage