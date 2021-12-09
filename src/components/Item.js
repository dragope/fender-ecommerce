import React from "react";
import './Item.css'
import ItemCount from "./ItemCount";

function Item( props ){

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
    }

    return(
        <div key={props.id}class="card-container">
            <img src={props.pictureURL} alt="Foto de producto" />
            <div class="title-container">
                <h3>{props.title}</h3>
            </div>
            <h1>${props.price}</h1>
            <div class="stock-container">
                <h4>Available stock : {props.stock}</h4>
            </div>
            <button>Product Details</button>
            <ItemCount className="itemCounter" stock={props.stock} initial={1} onAdd={handleAddQuantity}/>
           
        </div>
    )
}

export default Item