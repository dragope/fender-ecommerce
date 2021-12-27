import { createContext, useState, useContext } from 'react'

const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

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
    }
    
    function deleteItem(item){
        const itemIndex = cartList.findIndex(i => i.id === item.id)
        cartList.splice(itemIndex, 1)
        setCartList([...cartList])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            deleteItem
        }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider