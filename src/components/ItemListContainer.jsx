import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import ItemList from './ItemList'

function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true)
    const { type } = useParams();

    useEffect(()=>{
        if (type) {
            getFetch
                .then(resp => setProductos(resp.filter(prod => prod.category === type)))
                // .then(()=>setLoad(true))
                .catch(err => console.log(err))
                .finally(setTimeout(()=>{setLoad(false)},2000))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                // .then(()=>setLoad(true))
                .catch(err => console.log(err))
                .finally(setTimeout(()=>{setLoad(false)},2000))
        }
    }, [type])

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
                id={ producto.id }
            />) 
        }
        </div>   
    )
} 

export default ItemListContainer