import React from "react";
import './ItemList.css'
import Item from "./Item";
import { getFetch } from '../helpers/getFetch'
import { useState, useEffect } from 'react'

function ItemList({ items }){

    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoad(false))
    })

    return(
        <div class="itemlist">
            { load === true ? 
                <div className="loader"></div>
                : 
                productos.map((producto) => <Item
                    key={ producto.id }
                    title={ producto.title }
                    price={ producto.price }
                    pictureURL={ producto.pictureURL }
                    stock= { producto.stock }
                />) 
            } 
        </div>
    )
}

export default ItemList


                