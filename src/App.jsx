import { useState } from "react";
import "./App.css";
import DummyJsonProduct from "./components/DummyJsonProduct";

function App() {
  return (
    <>
      <div className="product-display-container">
        <DummyJsonProduct />
      </div>
    </>
  );
}

export default App;
