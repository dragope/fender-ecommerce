import React from "react";
import './Cart.css'
import { useState } from 'react'

function Cart(){

    const [load, setLoad] = useState(true)

    setTimeout(()=>{
        setLoad(false)
    }, 2000)

    return(
        <center>
            { load ?
                <div className="loader"></div>
                :
                <h1>CART</h1>
            }
        </center>
    )
}

export default Cart