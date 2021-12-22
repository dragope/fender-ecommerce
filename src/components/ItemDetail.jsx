import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react'
import visa from './images/tarjetas/visa.png'
import amex from './images/tarjetas/amex.png'
import master from './images/tarjetas/mastercard.png'
import ItemCountFinish from './ItemCountFinish'

function ItemDetail({instrument}){

    const [load, setLoad] = useState(true)
    const [cart, setCart] = useState(true);

    useEffect(()=>{
        const waitLoader = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(setLoad(!load))
            }, 2000)
        })
    }, [])

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
        setCart(false)
        console.log(param)
    }

    return(
        <div>
            { load ? 
                <div className="loader"></div>
                : 
                <div className="detalles_producto">
                    <div className="detalles_producto__fotos">
                        <img alt="Guitarra" src={ instrument.pictureDetail1 } className="foto_miniatura"/>
                        <img alt="Guitarra" src={ instrument.pictureDetail2 } className="foto_miniatura"/>
                        <img alt="Guitarra" src={ instrument.pictureDetail3 } className="foto_grande"/>
                    </div>
                    <div className="detalles_producto__detalles">
                        <h1 className="detalles_producto__titulo">{ instrument.title }</h1>
                        <h1 className="detalles_producto__precio">${ instrument.price }.00</h1>
                        <div className="detalles_producto__cuotas">
                            <img alt="Tarjeta de Credito" src={ visa }/>
                            <img alt="Tarjeta de Credito" src={ master }/>
                            <img alt="Tarjeta de Credito" src={ amex }/>
                            <h5>ALL ACCEPTED</h5>
                            <h4>{ instrument.description }</h4>
                        </div>
                        <hr/>
                        <div className="detalles_producto__colores">
                            <h4>COLORS</h4>
                            <button>Red</button>
                            <button>Black</button>
                            <button>Blue</button>
                            <button>Yellow</button>
                            <button>Green</button>
                            <button>Sunburst</button>
                        </div>
                        <div className="detalles_producto__final">
                            <input type="text" placeholder="Zip Code"/>
                            <button>CALCULATE SHIPPING COST</button>
                            <p><a href="https://tools.usps.com/zip-code-lookup.htm">Check you Zip Code</a></p>
                        </div>
                        { cart ?
                            <ItemCount stock={ instrument.stock } initial={ 1 } onAdd={ handleAddQuantity }/>
                            :
                            <ItemCountFinish />
                        }
                        
                    </div>
                </div>
            }
        </div>
        
    )
}

export default ItemDetail
