import React from 'react'
import './ItemListContainer.css'
// import ItemCount from './ItemCount'
import { useState } from 'react'
import ItemList from './ItemList'

function ItemListContainer( { greeting } ){

    return(
        <div className='itemlistcontainer'>
            {/* <h1>{ greeting }</h1> */}
            <ItemList/>
        </div>
        
    )
} 

export default ItemListContainer