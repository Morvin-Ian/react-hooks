import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalState from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCartProvider>
      <GlobalState>
        <App />
      </GlobalState>
    </ShoppingCartProvider>
  </BrowserRouter>
);
