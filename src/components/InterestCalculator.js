// interestcalculator.js

// Import React and useState from React library
import React, { useState } from 'react';

// Define the InterestCalculator component
function InterestCalculator() {
  // State variables for input values and calculated results
  const [shoppingTotal, setShoppingTotal] = useState('');
  const [numMonths, setNumMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalAmountPaid, setTotalAmountPaid] = useState(0);

  // Function to calculate interest and update state
  const calculateInterest = () => {
    if (shoppingTotal && numMonths) {
      const nonCompoundingInterestRate = 0.20; // Define interest rate
      const principal = parseFloat(shoppingTotal); // Convert shoppingTotal to a number
      const months = parseInt(numMonths); // Convert numMonths to an integer
      const interest = principal * nonCompoundingInterestRate; // Calculate interest
      const totalPayment = principal + interest; // Calculate total payment
      const monthlyPayment = totalPayment / months; // Calculate monthly payment

      // Update state with calculated values
      setMonthlyPayment(monthlyPayment.toFixed(2)); // Set monthlyPayment with 2 decimal places
      setTotalAmountPaid(totalPayment.toFixed(2)); // Set totalAmountPaid with 2 decimal places
    }
  };

  // JSX for rendering the component
  return (
    <div>
      <h2>Interest Calculator</h2>
      <div>
        <label htmlFor="shoppingTotal">Shopping Total:</label>
        <input
          type="number"
          id="shoppingTotal"
          value={shoppingTotal}
          onChange={(e) => setShoppingTotal(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numMonths">Number of Months:</label>
        <input
          type="number"
          id="numMonths"
          value={numMonths}
          onChange={(e) => setNumMonths(e.target.value)}
        />
      </div>
      <button onClick={calculateInterest}>Calculate</button>
      <div>
        <p>Monthly Payment Amount: R{monthlyPayment}</p>
        <p>Total Amount Paid: R{totalAmountPaid}</p>
      </div>
    </div>
  );
}

// Export the InterestCalculator component
export default InterestCalculator;
