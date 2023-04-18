import React, { useState, useEffect } from "react";
import ProductInput from "./Components/UI/UX/ProductInput";
import ProductListing from "./Components/UI/UX/ProductListing";
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const storedData = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setData(storedData);
  }, []);

  const productData = (data) => {
    setData((prevData) => [...prevData, data]);
    localStorage.setItem(data.id, JSON.stringify(data));
  };

  const handleDelete = (productId) => {
    setData(prevData => prevData.filter(product => product.id !== productId));
    localStorage.removeItem(productId)
}
  return (
    <div className="App">
    <ProductInput data = {productData} />
    <ProductListing values = {data} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
