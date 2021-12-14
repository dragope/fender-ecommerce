import React from "react";
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCount from "./ItemCount";

function Item( props ){

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
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
            <Link to={`/detail/${props.id}`}><button className="card-container-button">Product Details</button></Link>
            <ItemCount className="itemCounter" stock={props.stock} initial={1} onAdd={handleAddQuantity}/>
           
        </div>
    )
}

export default Item