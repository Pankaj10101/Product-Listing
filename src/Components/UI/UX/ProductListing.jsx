import React from 'react';
import './ProductListing.css'; 

const ProductListing = (props) => {
  const listedData = props.values;

  // Filter the data based on category
  const books = listedData.filter(product => product.category === 'Books');
  const fashion = listedData.filter(product => product.category === 'Fashion');
  const electronics = listedData.filter(product => product.category === 'Electronics');

  // Callback function to handle delete action
  const handleDelete = (productId) => {
    props.onDelete(productId);
  }

  return (
    <div className="product-listing-container">
      <div className="product-category">
        <h2>Books</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Selling Price</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map(product => (
              <tr className="product-row" key={product.id}>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td><button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="product-category">
        <h2>Fashion</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Selling Price</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fashion.map(product => (
              <tr className="product-row" key={product.id}>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td><button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="product-category">
        <h2>Electronics</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Selling Price</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {electronics.map(product => (
              <tr className="product-row" key={product.id}>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td><button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductListing;
