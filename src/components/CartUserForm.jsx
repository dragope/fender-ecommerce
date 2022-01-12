import React, {useState} from 'react';
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';

const CartUserForm = () => {
    const { createOrder, orderId, setPurchaseStatus } = useCartContext()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmemail, setConfirmemail] = useState('')

    const handleInputName = (e) =>{
        setName(e.target.value)
        console.log(name)
    }
    const handleInputSurname = (e) =>{
        setSurname(e.target.value)
    }
    const handleInputPhone = (e) =>{
        setPhone(e.target.value)
    }
    const handleInputEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleInputConfirmemail = (e) =>{
        setConfirmemail(e.target.value)
    }



	return (
		<div className="user-data-provier-container">
                    <h2>Please complete your costumer information:</h2>
                    <div className="user-data-form-container">
                        <div id="name">
                            <label>
                                Name
                            </label>
                            <input 
                                id="user-name" 
                                type="text"
                                onChange={handleInputName}
                                placeholder="Your name" 
                                required
                            />
                        </div>
                        <div id="surname">
                            <label>
                                Surname
                            </label>
                            <input 
                                id="user-surname" 
                                type="text"
                                onChange={handleInputSurname}
                                placeholder="Your surname" 
                                required
                            />
                        </div>
                        <div id="phone">
                            <label>
                                Phone
                            </label>
                            <input 
                                id="user-phone" 
                                type="tel"
                                onChange={handleInputPhone}
                                placeholder="Your phone number" 
                                required
                            />
                        </div>
                        <div id="email">
                            <label>
                                Email
                            </label>
                            <input
                                id="user-email" 
                                type="text"
                                onChange={handleInputEmail}
                                placeholder="Your email address" 
                                required
                            />
                        </div>
                        <div id="confirmemail">
                            <label>
                                Confirm your email
                            </label>
                            <input
                                id="user-confirmemail" 
                                type="text"
                                onChange={handleInputConfirmemail}
                                placeholder="Confirm your email address" 
                                required
                            />
                        </div>
                    </div>

                    { orderId.length < 1 ?

                        <div className="user-data-form-buttons">
                            <button 
                                className="user-data-edit-button" 
                                onClick={()=> setPurchaseStatus('Checking Cart')}
                            >
                                Continue editing my Cart
                            </button>
                            <button 
                                className="user-data-submit-button" 
                                onClick={createOrder}
                            >
                                SUBMIT AND CONFIRM PURCHASE
                            </button>
                        </div>

                        :

                        <Link to={`/thankyou/${orderId}`}>
                            <button 
                                className="user-data-submit-button-done"
                            >
                                    CONGRATULATIONS! YOUR PURCHASE IS CONFIRMED! <br></br> View your order '{orderId}'' 
                            </button>
                        </Link>

                    }
        </div>
	);
}
 
export default CartUserForm;