import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import visa from './images/tarjetas/visa.png'
import amex from './images/tarjetas/amex.png'
import master from './images/tarjetas/mastercard.png'
import gtr1 from './images/guitarras/Richie Kotzen Telecaster®/grande.jpg'
import gtr2 from './images/guitarras/Richie Kotzen Telecaster®/peq1.jpg'
import gtr3 from './images/guitarras/Richie Kotzen Telecaster®/peq2.jpg'

function ItemDetail(){

    const handleAddQuantity =(param)=>{
        alert("You added " + param + " product/s to your shopping cart")
    }

    return(
        <div className="detalles_producto">
            <div className="detalles_producto__fotos">
                <img alt="Guitarra" src={gtr2} className="foto_miniatura"/>
                <img alt="Guitarra" src={gtr3} className="foto_miniatura"/>
                <img alt="Guitarra" src={gtr1} className="foto_grande"/>
            </div>
            <div className="detalles_producto__detalles">
                <h1 className="detalles_producto__titulo">Richie Kotzen Telecaster®</h1>
                <h1 className="detalles_producto__precio">$3000</h1>
                <div className="detalles_producto__cuotas">
                    <h4>Payable with sevaral credit cards</h4>
                    <img alt="Tarjeta de Credito" src={visa}/>
                    <img alt="Tarjeta de Credito" src={master}/>
                    <img alt="Tarjeta de Credito" src={amex}/>
                    <h5>ALL ACCEPTED</h5>
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
                <ItemCount stock={5} initial={1} onAdd={handleAddQuantity}/>
            </div>
        </div>
        
    )
}

export default ItemDetail
