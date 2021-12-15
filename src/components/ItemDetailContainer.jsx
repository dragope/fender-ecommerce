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
                // .then(resp => setInstrument(resp.filter(prod => prod.id == parseInt(guitar))))
                .then(resp => setInstrument(resp[guitar-1]))
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
                <ItemDetail
                    key={ instrument.id }
                    title={ instrument.title }
                    price={ instrument.price }
                    pictureURL={ instrument.pictureURL }
                    stock= { instrument.stock }
                    pic1={ instrument.pictureDetail1 } 
                    pic2={ instrument.pictureDetail2 }
                    pic3={ instrument.pictureDetail3 }
                    category={ instrument.category }
                    description={ instrument.description }
                />
            } 
        </div>
    )
}

export default ItemDetailContainer