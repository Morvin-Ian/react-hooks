
import { useContext } from "react";
import Button from "./components/Button";
import { GlobalContext } from "./context/context";
import Reducer from "./components/Reducer";

function App() {
  const {theme} = useContext(GlobalContext)

  return (
    <div>
      <h1 style={{color: theme == 'light' ? 'gray': 'black'}}>Morvin Ian</h1>
      <Button/>
      <Reducer/>
    </div>
  );
}

export default App;
