import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import './Item.css'
import ItemCount from "./ItemCount";
import ItemCountFinish from "./ItemCountFinish";
import { useCartContext } from '../context/CartContext'

function Item( {instrument} ){

    const { addToCart, cartList } = useCartContext()
    const [cart, setCart] = useState(true);
    
    const itemIndex = cartList.findIndex(i => i.id === instrument.id)
    const stock = itemIndex === -1 ? instrument.stock : cartList[itemIndex].stock

    const handleAddQuantity = (param)=>{
        param <= stock 
        &&
        addToCart( {...instrument, quantity:parseInt(param)} )
        setCart(!cart)
    }

    const buyMore = () =>{
        setCart(!cart)
    }

    return(
        <div key={instrument.id} className="card-container">
            <img src={instrument.pictureURL} alt="Product" />
            <div className="title-container">
                <h3>{instrument.title}</h3>
            </div>
            <h1>${instrument.price}.00</h1>
            <div className="stock-container">
                <h4>Available stock : {stock}</h4>
            </div>
            <Link to={`/item/${instrument.id}`}><button className="card-container-button">Product Details</button></Link>
            { cart ?
                <ItemCount 
                    stock={ itemIndex > -1 ? stock : instrument.stock } 
                    initial={ itemIndex === -1 ? 1 : stock >= 1 ? 1 : "No more stock available" } 
                    onAdd={ handleAddQuantity }
                />
            :
            !cart &&
                <ItemCountFinish onClick={buyMore} />
            }
           
        </div>
    )
}

export default Item