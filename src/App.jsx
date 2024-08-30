
import { useContext } from "react";
import Button from "./components/Button";
import { GlobalContext } from "./context/context";
import Reducer from "./components/Reducer";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import UseFetch from "./components/UseFetch";
import ReactHookForm from "./components/ReactHookForm";
import ProductList from "./components/cart/ProductList";
import CartList from "./components/cart/CartList";
import ProductDetails from "./components/cart/ProductDetails";

function App() {
  const { theme } = useContext(GlobalContext)
  const navigate = useNavigate()
  // const { data, loading, errro } = UseFetch('https://dummyjson.com/recipes')
  // if (loading) return <h1>Fetching Data ....</h1>

  return (
    <>
      {/* <div style={{ display: "flex", gap: "20px" }}> */}
      {/* <h1 style={{color: theme == 'light' ? 'gray': 'black'}}>Morvin Ian</h1>
        <Button/>
        <Reducer/> */}

      {/* <Login/>
        <Register/> */}
      {/* </div> */}


      {/* <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button> */}

      {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
      {/* <div>
        <h1>Data List</h1>
        <ul>
          {data?.recipes?.length > 0 ?
            data?.recipes.map(recipe =>
              <div key={recipe.id}>
                <img src={recipe?.image} alt="" style={{objectFit:"cover"}}  width="200px" height="100px"/>
                <label htmlFor="">{recipe?.name}</label>
              </div>): null
          }
        </ul>
      </div> */}

      {/* <ReactHookForm/> */}

      <Routes>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<CartList/>}/>
      </Routes>
    </>

  );
}

export default App;

