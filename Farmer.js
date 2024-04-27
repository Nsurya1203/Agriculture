// Farmer.js
import React, { useState } from 'react';
import './farmer.css'; // Import CSS file

const Farmer = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    const newProduct = {
      name: productName,
      price: price,
      description: description,
      image: image,
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <div>
      <h2>Farmer</h2>
      <div className="add-product-container">
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <h3>Products:</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmer;
