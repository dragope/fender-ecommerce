import React from 'react'
import './Footer.css'
import GitHub from './images/github.svg'

function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer'>
                <p>2022 - Designed by Pedro Drago</p>
                <a href='http://github.com/dragope/'><img src={GitHub} className='footer-github' alt="GitHub Logo"/></a>
            </div>
            
        </div>
    )
}

export default Footer