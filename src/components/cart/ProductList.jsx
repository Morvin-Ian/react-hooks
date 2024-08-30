import React, { useContext } from 'react'
import { shoppingCartContext } from '../../context/ShoppingCart'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    const {data} = useContext(shoppingCartContext)
    const navigate = useNavigate()

    const navigateDetails = (id) => {
        navigate(`/product/${id}`)
    }
    return (
    <div>
        <h1>Featured Products</h1>
        <div >
            <div style={{display:"flex", flexWrap:'wrap', justifyContent:"space-evenly"}} className='product'>
                {
                    data?.products?.length > 0 && 
                    data?.products.map(product =>
                        <div key={product.id} style={{border:"1px solid gray", borderRadius:"5px", margin:"10px", padding:"10px"}}>
                            <img src={product.thumbnail} alt="" height="auto" />
                            <h5>{product.title}</h5>
                            <small>Price: ${product.price}</small>
                            {/* <p>Availability: {product.availabilityStatus}</p> */}
                            <button onClick={() => navigateDetails(product.id)}>View Details</button>
                        </div>
                    )
                
                }

            </div>

        </div>

    </div>
  )
}

export default ProductList