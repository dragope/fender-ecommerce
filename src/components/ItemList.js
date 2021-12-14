import React from "react";
import './ItemList.css'
import Item from "./Item";


function ItemList(props){
    return(
        <Item
            key={ props.id }
            title={ props.title }
            price={ props.price }
            pictureURL={ props.pictureURL }
            stock= { props.stock }
            id={ props.id }
        />
    )
}

export default ItemList