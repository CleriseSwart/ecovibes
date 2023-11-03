// Product.js

import React from 'react';
import './Product.css'; // Importing the component-specific styles

// Define the Product component which displays product information
const Product = ({ name, description, price, image }) => {
  return (
    <div className="product"> {/* Container for a single product */}
      <img src={image} alt={name} /> {/* Display the product image */}
      <h3>{name}</h3> {/* Display the product name */}
      <p>{description}</p> {/* Display the product description */}
      <p>R{price}</p> {/* Display the product price */}
    </div>
  );
};

export default Product; // Export the Product component as the default export
