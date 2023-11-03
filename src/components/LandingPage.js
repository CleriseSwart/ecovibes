// LandingPage.js

import React from 'react';
import './LandingPage.css'; // Importing the CSS file for styling the LandingPage component

// Define the LandingPage component which provides information about the company
const LandingPage = () => {
  return (
    <div className="landing-page"> {/* Container for the landing page content */}
      <h2>About Our Company</h2> {/* Title */}
      <p>
        {/* Company description */}
        At EcoVibes, we believe in the power of fashion to inspire and empower. Our journey began with a vision to create a brand that not only celebrates elegance but also fosters confidence in every individual.
        <br /><br />
        Drawing inspiration from the world around us, we curate collections that blend timeless sophistication with contemporary trends. Each piece we craft is a testament to our commitment to quality and craftsmanship. We take pride in creating clothing that not only looks exceptional but also feels exceptional to wear.
        <br /><br />
        {/* More information about the clothing brand */}
        But EcoVibes is more than just a fashion label. It's a community united by a shared passion for style and self-expression. We celebrate diversity and inclusivity, encouraging everyone to embrace their individuality and embark on their journey with confidence.
        <br /><br />
        With every creation, we strive to empower our customers to conquer the world with grace and poise. Join us on this inspiring voyage as we redefine fashion and empower each other to shine brightly and make a difference.
        <br /><br />
        Welcome to EcoVibes - Where Elegance Meets Empowerment.
      </p>
    </div>
  );
};

export default LandingPage; // Export the LandingPage component as the default export
