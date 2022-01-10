import { createContext, useState, useContext } from 'react'
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"

const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [orderId, setOrderId] = useState('')

    function addToCart(item) {  
        const itemIndex = cartList.findIndex(i => i.id === item.id)
        if(itemIndex > -1){
            const prevQuant = parseInt(cartList[itemIndex].quantity)
            cartList.splice(itemIndex, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + prevQuant, accprice: item.price*(item.quantity+prevQuant)}])
        } else {
            setCartList([...cartList, {...item, accprice: item.price*item.quantity}])
        }
    }
     
    function emptyCart() { 
        setCartList([])
        setOrderId('')
    }
    
    function deleteItem(item){
        const itemIndex = cartList.findIndex(i => i.id === item.id)
        cartList.splice(itemIndex, 1)
        setCartList([...cartList])
    }

    const finalPrice = cartList.map(item => item.accprice).reduce((prev, curr) => prev + curr, 0)

    const createOrder = (e) => {
        e.preventDefault()

        let userName = document.getElementById('user-name').value + " " + document.getElementById('user-surname').value
        let userPhone = document.getElementById('user-phone').value
        let userEmail = document.getElementById('user-email').value
        let userConfirmEmail = document.getElementById('user-confirmemail').value
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = { name: userName, phone: userPhone, email: userEmail }
        order.price = finalPrice

        if (userName === "" || userPhone === "" || userEmail === "" ){
            alert("Please complete all the required fields")
        } else if (userEmail !== userConfirmEmail ){
            alert("The emails provided do not match")
        } else if (!userEmail.includes("@") && !userEmail.includes(".") ){
            alert("Invalid email")
        }else {
            order.items = cartList.map(cartItem =>{
                const id = cartItem.id;
                const quantity = cartItem.quantity;
                const title = cartItem.title;
                const price = cartItem.price;
                return {id, quantity, title, price}
            } )
            const db = getFirestore()
            const ordenColeccion = collection(db, 'orders')
            addDoc(ordenColeccion, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err))
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            deleteItem,
            finalPrice,
            createOrder,
            orderId,
            setOrderId
        }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider