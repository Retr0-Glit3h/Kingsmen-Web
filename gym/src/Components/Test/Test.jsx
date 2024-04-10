// Import React and other necessary libraries
import React, { useState } from 'react';


// Define the SizePage component
const SizePage = () => {
  // Define state variables for user sizes
  const [chestSize, setChestSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [inseamSize, setInseamSize] = useState('');
  const [shoulderSize, setShoulderSize] = useState('');
  const [sleeveSize, setSleeveSize] = useState('');

  // Define a function to handle submitting sizes
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle submitting sizes, for example, sending them to a server
    alert('Sizes submitted!');
  };

  return (
    <div className="size-page">
      
      <form onSubmit={handleSubmit}>
        <label>
          Chest Size:
          <input
            type="text"
            value={chestSize}
            onChange={(event) => setChestSize(event.target.value)}
          />
        </label>
        <label>
          Waist Size:
          <input
            type="text"
            value={waistSize}
            onChange={(event) => setWaistSize(event.target.value)}
          />
        </label>
        <label>
          Inseam Size:
          <input
            type="text"
            value={inseamSize}
            onChange={(event) => setInseamSize(event.target.value)}
          />
        </label>
        <label>
          Shoulder Size:
          <input
            type="text"
            value={shoulderSize}
            onChange={(event) => setShoulderSize(event.target.value)}
          />
        </label>
        <label>
          Sleeve Size:
          <input
            type="text"
            value={sleeveSize}
            onChange={(event) => setSleeveSize(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Export the SizePage component
export default SizePage;
