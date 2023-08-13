import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { CartProvider } from "./Contexts/CartContext";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <div style={{ marginTop: "56px" }} className="app">
          <Routes>
            <Route path="/" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
