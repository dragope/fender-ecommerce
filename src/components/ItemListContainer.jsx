import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true)
    const { type } = useParams();

    useEffect(()=>{
        const db = getFirestore()
        if(type){
            const queryCollection = query(collection(db, 'items'), where('category', '==', type))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod =>  ({ id: prod.id, ...prod.data() }) )))
            .catch(e => console.log(e))
            .finally(()=> setLoad(false))
        } else {
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
            .catch(e => console.log(e))
            .finally(setLoad(false))
        }
    }, [type])

    return(
        <div className='itemlistcontainer'>
        { load ? 
            <div className="loader-container"><div className="loader"></div></div>
            : 
            productos.map((producto) => <ItemList key={producto.id} instrument={producto}
            />) 
        }
        </div>   
    )
} 

export default ItemListContainer