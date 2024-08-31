import { useEffect } from "react";
import { createContext, useState } from "react";
import UseFetch from "../components/UseFetch";

export const shoppingCartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {
    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState([])

    const fetchProducts = async() => {
        const response = await fetch("https://dummyjson.com/products")
        const result = await response.json()
        
        if(result){
            setData(result)
        }
    }
    useEffect(() => {
      fetchProducts()
      setCartItems(JSON.parse(localStorage.getItem("carItems")))
    }, [])
    

    return (
        <shoppingCartContext.Provider value={{data, cartItems, setCartItems}}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;