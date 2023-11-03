import React from 'react';
import './Header.css'; // Import the Header-specific CSS styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../Images/logo.png"; // Import the logo image

// Define the Header component that displays the header section of the app
const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Logo image */}
        <h1>EcoVibes</h1> {/* App name */}
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Home link */}
          <li><Link to="/products">Products</Link></li> {/* Products link */}
          {isLoggedIn ? (
            <> {/* If user is logged in */}
              <li><Link to="/profile">Profile</Link></li> {/* Profile link */}
              <li><Link to="/logout">Logout</Link></li> {/* Logout link */}
            </>
          ) : (
            <> {/* If user is not logged in */}
              <li><Link to="/login">Login</Link></li> {/* Login link */}
              <li><Link to="/signup">Sign Up</Link></li> {/* Sign Up link */}
            </>
          )}
          <li><Link to="/interest-calculator">Interest Calculator</Link></li> {/* Interest Calculator link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Export the Header component as the default export
