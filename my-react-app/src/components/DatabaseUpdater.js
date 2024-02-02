import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DatabaseUpdater = () => {
  const [data, setData] = useState([]); // Initialize data state with an empty array
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch data from the backend API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data'); // Replace '/api/data' with your actual backend API endpoint
        setData(response.data); // Update the state with the fetched data
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Use an empty dependency array to only run the effect once when the component mounts

  return (
    <div>
      <h2>Database Information:</h2>
      {loading ? ( // Check loading state
        <p>Loading...</p>
      ) : (
        data.length > 0 ? ( // Check if data array is not empty
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.udata}</li> // Replace 'item.id' and 'item.name' with the actual properties of your data
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )
      )}
    </div>
  );
};

export default DatabaseUpdater;