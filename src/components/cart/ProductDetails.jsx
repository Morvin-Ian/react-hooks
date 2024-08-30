import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { shoppingCartContext } from '../../context/ShoppingCart'

const ProductDetails = () => {
  const {cartItems, setCartItems} = useContext(shoppingCartContext)
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({})
  const {id} = useParams();
  const fetchProductDetails = async() => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await response.json()
    setProductDetail(result)
  }

  useEffect(() => {
    fetchProductDetails()
  }, [])
  
  const handleAddCart = () => {
    const existingCartItems = [...cartItems]
    const existingCart = existingCartItems.findIndex(cart => cart.id === productDetail.id)
    if(existingCart == -1){
      existingCartItems.push({
        ...productDetail,
        quantity: 1, 
        total_price:productDetail.price
      })
    }else{

    }

    setCartItems(existingCartItems)
    localStorage.setItem("carItems", JSON.stringify(existingCartItems))
    navigate("/cart")
  }

  return (
    <div>
      <h1>{productDetail.title}</h1>
      <p>{productDetail.price}</p>
      <button onClick={handleAddCart}>Add to Cart</button>
    </div>
  )
}

export default ProductDetails