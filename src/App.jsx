
import { useContext } from "react";
import Button from "./components/Button";
import { GlobalContext } from "./context/context";
import Reducer from "./components/Reducer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const {theme} = useContext(GlobalContext)

  return (
    <div style={{display:"flex", gap:"20px"}}>
      {/* <h1 style={{color: theme == 'light' ? 'gray': 'black'}}>Morvin Ian</h1>
      <Button/>
      <Reducer/> */}

      <Login/>
      <Register/>
    </div>
  );
}

export default App;
