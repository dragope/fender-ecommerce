import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useState } from 'react'
import visa from './images/tarjetas/visa.png'
import amex from './images/tarjetas/amex.png'
import master from './images/tarjetas/mastercard.png'
import ItemCountFinish from './ItemCountFinish'
import { useCartContext } from '../context/CartContext'

function ItemDetail({instrument}){

    const [cart, setCart] = useState(true);

    const { addToCart } = useCartContext()

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
        setCart(false)
        addToCart( {...instrument, quantity:parseInt(param)} )
    }

    return(
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
                        { cart ?
                            <ItemCount stock={ instrument.stock } initial={ 1 } onAdd={ handleAddQuantity }/>
                            :
                            <ItemCountFinish />
                        }
                        
                    </div>
                </div>    
    )
}

export default ItemDetail
