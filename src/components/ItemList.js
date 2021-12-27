import React from "react";
import './ItemList.css'
import Item from "./Item";


function ItemList({instrument}){
    return(
        <Item instrument={instrument}
        />
    )
}

export default ItemList