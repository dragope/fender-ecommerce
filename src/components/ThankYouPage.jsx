import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useCartContext} from '../context/CartContext'
import './ThankYouPage.css'
import { getDoc, getFirestore, doc } from "firebase/firestore"

function ThankYouPage(){

    const { emptyCart } = useCartContext()
    const [ order, setOrder ] = useState({})
    const [load, setLoad] = useState(true)
    const { idOrder } = useParams()

    useEffect(()=>{
        emptyCart()
        const db = getFirestore()
        const orderRef = doc(db, 'orders', idOrder)
        getDoc(orderRef)
            .then(resp => setOrder({ id: resp.id, ...resp.data()}))
            .catch(e => console.log(e))
            .finally(()=> setLoad(false))
    }, [idOrder])

    return(
        <center>
        { load ? 
            <div className="loader"></div>
            : 
        <center className="order-summary">
        <h1>CONGRATULATIONS, your purchase has been been processed!</h1>
        <h3>This is your order summary:</h3>
        <div className="order-summary-userdata">
            <h4>Order ID: {order.id}</h4>
            <h4>Name: {order.buyer.name}</h4>
            <h4>Phone: {order.buyer.phone}</h4>
            <h4>Email: {order.buyer.email}</h4>
        </div>
        {order.items.map(item => 
                <div className="tpcart-product-container" key={item.id}>
                    <div className="tpcart-product-title">
                        <p>Product</p>
                        <p>{item.title}</p>
                    </div>
                    <div className="tpcart-product-quantity">
                        <p>Quantity</p>
                        <p>{item.quantity}</p>
                    </div>
                    <div className="tpcart-product-unitprice">
                        <p>Unit Price</p>
                        <p>${item.price}.00</p>
                    </div>
                    <div className="tpcart-product-totalprice">
                        <p>Total Price</p>
                        <p>${item.price*item.quantity}.00</p>
                    </div>
                
                </div>
            
        )}
        <div className="cart-total-price"><p>FINAL PRICE</p> <p>${order.price}.00</p></div>
        <h1>Thank you for your purchase!</h1>
    </center>
    }
    </center>
    )
}

export default ThankYouPage