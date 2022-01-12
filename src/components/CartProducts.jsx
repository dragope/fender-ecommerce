import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import eraseItem from './images/remove-cross.svg'

function CartProducts(){

    const { purchaseStatus, cartList, setPurchaseStatus, deleteItem, finalPrice, emptyCart } = useCartContext()

    return(
        <div className="cartpage-container">
            <h2>
                You have selected the following products:
            </h2>

            { cartList.map(prod => 
                <div className="cart-product-container" key={prod.id}>
                    <img 
                        className="cart-product-image" 
                        alt="Guitar" 
                        src={prod.pictureDetail1}
                    />
                    <div className="cart-product-title">
                        <p>Product</p>
                        <p>{prod.title}</p>
                    </div>
                    <div className="cart-product-quantity">
                        <p>Quantity</p>
                        <p>{prod.quantity}</p>
                    </div>
                    <div className="cart-product-unitprice">
                        <p>Unit Price</p>
                        <p>${prod.price}.00</p>
                    </div>
                    <div className="cart-product-totalprice">
                        <p>Total Price</p>
                        <p>${prod.accprice}.00</p>
                    </div>

                    { purchaseStatus === 'Checking Cart' &&

                    <img 
                        className="cart-deleteItem" 
                        src={eraseItem} alt="Delete Item Button" 
                        onClick={() => deleteItem(prod)}
                    />
                    }

                </div>
            )}

            <div className="cart-total-price">
                <p>FINAL PRICE</p> <p>${finalPrice}.00</p>
            </div>
        
            { purchaseStatus === 'Checking Cart' &&
                <div className="cart-button-container">
                    <button 
                        className="empty-cart-button" 
                        onClick={emptyCart}
                    >
                        Empty Shopping Cart
                    </button>
                    <Link to="/">
                        <button 
                            className="continue-shopping-button"
                        >
                            CONTINUE SHOPPING
                        </button>
                    </Link>
                    <button 
                        className="continue-shopping-button" 
                        onClick={()=>setPurchaseStatus('Finishing Purchase')}
                    >  
                        FINISH PURCHASE
                    </button>
                </div>
            }
            
        </div>
    )
}

export default CartProducts