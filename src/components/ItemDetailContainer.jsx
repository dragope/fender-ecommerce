import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(){

    const [instrument, setInstrument] = useState([]);
    const [load, setLoad] = useState(true)
    const { guitar } = useParams()

    useEffect(()=>{

        if(guitar){
            getFetch
                .then(resp => setInstrument(resp.find(prod => prod.id == parseInt(guitar))))
                .catch(err => console.log(err))
                .finally(()=> setLoad(false))
        } else {
            getFetch
                .then(resp => setInstrument(resp))
                .catch(err => console.log(err))
                .finally(()=> setLoad(false))
        }
    }, [guitar])

    return(
        <div className="item-detail-container">
            { load ? 
                <div className="loader"></div>
                : 
                <ItemDetail instrument={instrument} />
            } 
        </div>
    )
}

export default ItemDetailContainer