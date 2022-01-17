import React from 'react'
import { Link } from 'react-router-dom'
import './ItemCountFinish.css'

function ItemCountFinish({ onClick }) {

    return(
        <div className='itemcount-container'>
            <button className='counter-button-finish' onClick={onClick}>Buy More</button>
            <Link to='/cart'><button className='counter-button-finish'>Go to Cart</button></Link>
        </div>
    )
}

export default ItemCountFinish