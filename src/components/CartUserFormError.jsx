import React from 'react'
import { useCartContext } from '../context/CartContext'
import './CartUserDataFormError.css'

function CartUserFormError(){

    const { error, setError } = useCartContext()

    const resetError = () =>{
        setError('')
    }

    return(
        <div className='user-data-form-error'>
            <p>{error}</p>
            <button onClick={resetError}>OK</button>
        </div>
    )
}

export default CartUserFormError