import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getFetch } from '../helpers/getFetch'
import ItemList from './ItemList'

function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoad(false))
    }, [])

    return(
        <div className='itemlistcontainer'>
        { load ? 
            <div className="loader"></div>
            : 
            productos.map((producto) => <ItemList
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

export default ItemListContainer