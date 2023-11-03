// Import necessary modules and components
import React from 'react';
import Header from './components/Header'; // Importing the Header component from './Header'
import LandingPage from './components/LandingPage'; // Importing the LandingPage component from './LandingPage'
import Product from './components/Product'; // Importing the Product component from './Product'
import InterestCalculator from './components/InterestCalculator'; // Import the InterestCalculator component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import the necessary elements
import './App.css'; // Importing the App-specific styles

// Import images for products
import tshirtImage from './Images/product-tshirt.jpeg'; // Importing the image for t-shirt
import dressImage from './Images/product-dress.jpeg'; // Importing the image for dress
import jacketImage from './Images/product-jacket.jpeg'; // Importing the image for jacket

// Define the main App component
const App = () => {
  // Array of product objects
  const products = [
    {
      name: 'Everyday Comfy T-Shirt',
      description: 'Embrace effortless style with our ultra-soft Everyday Comfort T-Shirt, perfect for any laid-back occasion',
      price: 125.00,
      image: tshirtImage,
    },
    {
      name: 'Graceful Evening Elegance Dress',
      description: 'Make a lasting impression with our Graceful Evening Elegance Dress, exuding sophistication with delicate lace detailing.',
      price: 450.00,
      image: dressImage,
    },
    {
      name: 'Classic Cool Denim Jacket',
      description: 'Elevate your style with our Classic Cool Denim Jacket, a timeless wardrobe staple blending fashion and functionality.',
      price: 350.00,
      image: jacketImage,
    },
  ];

  const isLoggedIn = false; // Set whether the user is logged in or not, change to true if the user is logged in

  // Render the App component's content
  return (
    <Router>
      <div className="app"> {/* The main app container */}
        <Header isLoggedIn={isLoggedIn} /> {/* Render the Header component and pass isLoggedIn prop */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Render the LandingPage component */}
          <Route path="/products" element={<div className="products-container"> {/* Container for displaying products */}
            {/* Map through the products array and render Product components with respective data */}
            {products.map((product, index) => (
              <Product key={index} {...product} /> // Pass product data as props to Product component
            ))}
          </div>} />
          <Route path="/interest-calculator" element={<InterestCalculator />} /> {/* Container for displaying interest calculator */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export the App component as the default export
