import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore, query, where } from 'firebase/firestore'

function ItemDetailContainer(){

    const [instrument, setInstrument] = useState([]);
    const [load, setLoad] = useState(true)
    const { guitar } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const guitarRef = doc(db, 'items', guitar) 
        getDoc(guitarRef)
            .then(resp => setInstrument({ id: resp.id, ...resp.data() }))
            .catch(e => console.log(e))
            .finally(()=> setLoad(false))
 
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