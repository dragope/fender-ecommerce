import React from 'react'
import { Link } from 'react-router-dom'
import './ItemCountFinish.css'

function ItemCountFinish() {


    return(
        <div className='itemcount-container'>
            <Link to='/cart'><button className='counter-button-finish'>FINISH PURCHASE</button></Link>
        </div>
    )
}

export default ItemCountFinish