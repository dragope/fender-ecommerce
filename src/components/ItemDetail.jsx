import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { useState } from 'react'
import visa from './images/cards/visa.png'
import amex from './images/cards/amex.png'
import master from './images/cards/mastercard.png'
import ItemCountFinish from './ItemCountFinish'
import { useCartContext } from '../context/CartContext'

function ItemDetail({instrument}){

    const { addToCart, cartList } = useCartContext()
    const [cart, setCart] = useState(true);
    
    const itemIndex = cartList.findIndex(i => i.id === instrument.id)
    const stock = itemIndex === -1 ? instrument.stock : cartList[itemIndex].stock

    const handleAddQuantity =(param)=>{
        param <= stock 
        &&
        addToCart( {...instrument, quantity:parseInt(param)} )
        setCart(!cart)
    }

    const buyMore = () =>{
        setCart(!cart)
    }

    return(
                <div className="detail_product">
                    <div className="detail_product__photos">
                        <img alt="Guitar" src={ instrument.pictureDetail1 } className="photo_miniature"/>
                        <img alt="Guitar" src={ instrument.pictureDetail2 } className="photo_miniature"/>
                        <img alt="Guitar" src={ instrument.pictureDetail3 } className="photo_big"/>
                    </div>
                    <div className="detail_product__detail">
                        <h1 className="detail_product__title">{ instrument.title }</h1>
                        <h1 className="detail_product__price">${ instrument.price }.00</h1>
                        <div className="detail_product__cards">
                            <img alt="Credit Card" src={ visa }/>
                            <img alt="Credit Card" src={ master }/>
                            <img alt="Credit Card" src={ amex }/>
                            <h5>ALL ACCEPTED</h5>
                            <h4>{ instrument.description }</h4>
                        </div>
                        <div className="stockdetail-container">
                            <h4>Available stock : {stock}</h4>
                        </div>
                        <hr/>
                        { cart ?
                            <ItemCount 
                                stock={ itemIndex > -1 ? stock : instrument.stock } 
                                initial={ itemIndex === -1 ? 1 : stock >= 1 ? 1 : "No more stock available" } 
                                onAdd={ handleAddQuantity }
                            />
                        :
                        !cart &&
                            <ItemCountFinish onClick={buyMore} />
                        }
                    </div>
                </div>    
    )
}

export default ItemDetail
