import React from "react";
import './Cart.css'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import CartUserForm from "./CartUserForm";
import CartProducts from "./CartProducts";
import CartEmpty from "./CartEmpty"

function Cart(){

    const [load, setLoad] = useState(true)
    const { cartList, purchaseStatus } = useCartContext()
    

    setTimeout(()=>{
        setLoad(false)
    }, 2000)

    return(
        <center>
            { load ?

                <div className="loader"></div>

                :

                cartList[0] === undefined ?

                <CartEmpty/>

                :

                <CartProducts/>

            }
            {
                purchaseStatus === 'Finishing Purchase' && !load && cartList.length >= 1 &&

                <CartUserForm/>

            }
        </center>
    )
}

export default Cart