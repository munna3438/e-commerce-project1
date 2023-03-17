import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { ShopContextProvider } from "./context/ShopContext";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
