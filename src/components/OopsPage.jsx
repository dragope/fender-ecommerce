import React from 'react'
import './OopsPage.css'
import { Link } from 'react-router-dom'
import error from '../components/images/404-error.svg'

function OopsPage(){
    return(
        <div className='oops-page-container'>
            <img src={error} alt='Error'/>
            <h2>Oops! It seems the page you are trying to access is inaccessible or does not exist</h2>
            <Link to="/"><button className='oops-page-button'>Go back and continue shopping</button></Link>
        </div>
    )
}

export default OopsPage