import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import jazzmaster2 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®.jpg'
import jazzmaster21 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_2.jpg'
import jazzmaster22 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_3.jpg'
import jazzmaster23 from '../components/images/guitarras/Road Worn® 60s Jazzmaster®/Road Worn® 60s Jazzmaster®_4.jpg'


function ItemDetailContainer(){

    const [producto, setProducto] = useState([]);
    const [load, setLoad] = useState(true)
    
    const prod = {id:9, title:"Road Worn® '60s Jazzmaster®", price:4250.00 , category: "jazzmazter", pictureURL: jazzmaster2, pictureDetail1: jazzmaster21, pictureDetail2: jazzmaster22, pictureDetail3: jazzmaster23, stock:5, description: "An elegantly put-together offset, complete with wonderful tones, looks and vibe - for an old-school Jazzmaster at a reasonable price, look this way."}
    
    const getItem = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(prod)
        }, 2000);
    })

    useEffect(()=>{
        getItem
        .then(resp => setProducto(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoad(false))
    }, [])

    return(
        <div className="item-detail-container">
            { load ? 
                <div className="loader"></div>
                : 
                <ItemDetail
                    key={ producto.id }
                    title={ producto.title }
                    price={ producto.price }
                    pictureURL={ producto.pictureURL }
                    stock= { producto.stock }
                    pic1={ producto.pictureDetail1 }
                    pic2={ producto.pictureDetail2 }
                    pic3={ producto.pictureDetail3 }
                    category={ producto.category }
                    description={ producto.description }
                />
            } 
        </div>
    )
}

export default ItemDetailContainer