import React from "react";
import Customers from "./components/Customers";
import PaymentMethods from "./components/PaymentMethods";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="container-fluid bg-light">
      <div className="rounded d-flex flex-column align-self-center bg-white">
        <h1 className="text-center m-2">PoS App</h1>
        <Customers />
        <PaymentMethods />
        <Cart />
        <Checkout />
      </div>
    </div>
  );
}

export default App;
