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
            setCartList([...cartList, {...item, quantity: item.quantity + prevQuant}])
        } else {
            setCartList([...cartList, item])
        }
    }
     
    function emptyCart() { 
        setCartList([])
    }
    

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart
        }}>
            { children }
        </CartContext.Provider>
    )
}
export default CartContextProvider