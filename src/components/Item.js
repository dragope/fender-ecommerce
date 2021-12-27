import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import './Item.css'
import ItemCount from "./ItemCount";
import ItemCountFinish from "./ItemCountFinish";
import { useCartContext } from '../context/CartContext'

function Item( {instrument} ){

    const [cart, setCart] = useState(true);
    const {cartList, addToCart} = useCartContext()

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
        setCart(false)
        addToCart( {...instrument, quantity:parseInt(param)} )
    }

    return(
        <div key={instrument.id} className="card-container">
            <img src={instrument.pictureURL} alt="Foto de producto" />
            <div className="title-container">
                <h3>{instrument.title}</h3>
            </div>
            <h1>${instrument.price}.00</h1>
            <div className="stock-container">
                <h4>Available stock : {instrument.stock}</h4>
            </div>
            <Link to={`/item/${instrument.id}`}><button className="card-container-button">Product Details</button></Link>
            { cart ?
                <ItemCount stock={ instrument.stock } initial={ 1 } onAdd={ handleAddQuantity }/>
                :
                <ItemCountFinish />
            }
           
        </div>
    )
}

export default Item