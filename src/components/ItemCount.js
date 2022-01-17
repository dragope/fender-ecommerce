import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial,  onAdd }) {

    const [counter, setCounter] = useState(initial);

    const handleSuma=()=>{
            counter < stock &&
                setCounter(prev => prev + 1)
    }

    const handleResta=()=>{
        counter > initial &&
            setCounter(prev => prev - 1)
    }

    return(
        <div className='itemcount-container'>
            <div className='counter-container'>
                <button onClick={handleResta}>-</button>
                <h3>{counter}</h3>
                <button onClick={handleSuma}>+</button>
            </div>
            <button className='counter-button' onClick={()=>onAdd(counter)}>Add to cart</button>
        </div>
    )
}

export default ItemCount