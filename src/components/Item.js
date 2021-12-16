import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import './Item.css'
import ItemCount from "./ItemCount";
import ItemCountFinish from "./ItemCountFinish";

function Item( props ){

    const [cart, setCart] = useState(true);

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
        setCart(false)
    }

    return(
        <div key={props.id} className="card-container">
            <img src={props.pictureURL} alt="Foto de producto" />
            <div className="title-container">
                <h3>{props.title}</h3>
            </div>
            <h1>${props.price}.00</h1>
            <div className="stock-container">
                <h4>Available stock : {props.stock}</h4>
            </div>
            <Link to={`/item/${props.id}`}><button className="card-container-button">Product Details</button></Link>
            { cart ?
                <ItemCount stock={ props.stock } initial={ 1 } onAdd={ handleAddQuantity }/>
                :
                <ItemCountFinish />
            }
           
        </div>
    )
}

export default Item