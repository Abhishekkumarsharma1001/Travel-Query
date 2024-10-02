import React, { useState } from 'react';
import './cost.css'; // Optional: Add your custom CSS for styling

const Cost = () => {
  const [distance, setDistance] = useState(0);
  const [transportMode, setTransportMode] = useState('bus');
  const [days, setDays] = useState(1);
  const [people, setPeople] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const calculateCost = () => {
    let transportationCost = 0;
    let accommodationCost = 0;
    let activitiesCost = 0;

    // Transportation cost per kilometer
    switch (transportMode) {
      case 'bus':
        transportationCost = distance * 5; // Example cost per kilometer
        break;
      case 'train':
        transportationCost = distance * 10; // Example cost per kilometer
        break;
      case 'plane':
        transportationCost = distance * 20; // Example cost per kilometer
        break;
      default:
        transportationCost = distance * 5; // Default cost
    }

    // Accommodation costs (example ₹2000 per night per person)
    accommodationCost = days * people * 2000;

    // Estimate activities (example ₹1000 per day per person)
    activitiesCost = days * people * 1000;

    // Calculate total cost in INR
    const total = transportationCost + accommodationCost + activitiesCost;
    setTotalCost(total);
  };

  return (
    <div className="cost-container">
      <h2>Cost Estimation for Your Trip</h2>
      <div>
        <label>Distance to Travel (in km):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
        />
      </div>
      <div>
        <label>Means of Transport:</label>
        <select value={transportMode} onChange={(e) => setTransportMode(e.target.value)}>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="plane">Plane</option>
        </select>
      </div>
      <div>
        <label>Number of Days:</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          min="1"
        />
      </div>
      <div>
        <label>Number of People:</label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={calculateCost}>Estimate Cost</button>

      {totalCost > 0 && (
        <div className="total-cost">
          <h3>Total Estimated Cost: ₹{totalCost}</h3>
        </div>
      )}
    </div>
  );
};

export default Cost;
