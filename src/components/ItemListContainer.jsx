import React from 'react'
import './ItemListContainer.css'
import ItemCount from './ItemCount'

function ItemListContainer( { greeting } ){

    const handleAddQuantity =(param)=>{
        alert("Agregaste " + param + " productos al carrito")
    }

    return(
        <div className='itemlistcontainer'>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={handleAddQuantity}/>
        </div>
        
    )
}

export default ItemListContainer