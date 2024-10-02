import React, { useState } from 'react';
import axios from 'axios';
import './TripPlanner.css'; // Import CSS for styling

const TripPlanner = () => {
    const [start, setStart] = useState('');
    const [destination, setDestination] = useState('');
    const [response, setResponse] = useState(null);  // Store backend response
    const [loading, setLoading] = useState(false);  // Loading state
  
    const handleStartChange = (e) => setStart(e.target.value);
    const handleDestinationChange = (e) => setDestination(e.target.value);
  
    const handleSubmit = async () => {
      if (!start.trim() || !destination.trim()) return;  // Prevent empty inputs
  
      setLoading(true);  // Show loading while request is being processed
  
      try {
        const data = { start, destination };
        const res = await axios.post('http://localhost:5000/api/index', data);  // Send request to backend
        setResponse(res.data.recommendations);  // Store recommendations from backend
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
      setLoading(false);  // Stop loading
    };
  
    // Function to format the response, making text bold where necessary
    const formatResponse = (text) => {
      // Replace **text** with <strong>text</strong> and remove asterisks
      return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };
  
  return (
    <div className="travel-assistant">
      <h1 className="title">Travel Recommendation Assistant</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Starting Place"
          value={start}
          onChange={handleStartChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={handleDestinationChange}
          className="input-field"
        />
        <button onClick={handleSubmit} className="submit-button" disabled={loading}>
          {loading ? 'Loading...' : 'Get Travel Advice'}
        </button>
      </div>
      <div className="response-container">
        {response && (
          <div className="recommendation-card">
            <h3>Travel Recommendations:</h3>
            <div
              className="recommendation-content"
              dangerouslySetInnerHTML={{ __html: formatResponse(response.replace(/\n/g, '<br />')) }} // Format response
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;
