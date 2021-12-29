import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { getFetch } from '../helpers/getFetch'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const [load, setLoad] = useState(true)
    const { type } = useParams();

    // useEffect(()=>{
    //     if (type) {
    //         getFetch
    //             .then(resp => setProductos(resp.filter(prod => prod.category === type)))
    //             .then(()=>setLoad(true))
    //             .catch(err => console.log(err))
    //             .finally(setTimeout(()=>{setLoad(false)},2000))
    //     } else {
    //         getFetch
    //             .then(resp => setProductos(resp))
    //             .then(()=>setLoad(true))
    //             .catch(err => console.log(err))
    //             .finally(setTimeout(()=>{setLoad(false)},2000))
    //     }
    // }, [type])

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

    console.log(productos)

    return(
        <div className='itemlistcontainer'>
        { load ? 
            <div className="loader"></div>
            : 
            productos.map((producto) => <ItemList instrument={producto}
            />) 
        }
        </div>   
    )
} 

export default ItemListContainer