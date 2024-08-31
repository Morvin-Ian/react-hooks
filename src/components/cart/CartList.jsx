import React, { useContext } from 'react'
import { shoppingCartContext } from '../../context/ShoppingCart'

const CartList = () => {
  const { cartItems } = useContext(shoppingCartContext)

  const addQuantity = (id) => {

  }

  const removeQuantity = (id) => {

  }

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {
          cartItems.length ?
            cartItems.map(item =>
              <div>
                <h4>{item.title}</h4>
                <h4>{item.total_price}</h4>
                <h4>{item.quantity}</h4>
                <div style={{display:"flex"}}>
                  <button>+</button>
                  <button>-</button>
                </div>
                <button>Remove</button>
              </div>
            ) : "No Items in Cart"
        }

      </div>
    </div>
  )
}

export default CartList