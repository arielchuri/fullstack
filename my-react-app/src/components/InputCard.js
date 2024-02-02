import React, { useState } from 'react';

const InputCard = () => {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Send a POST request to the server when the user submits the input
    fetch('http://localhost:3000/submit-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInput: inputText }) // Send the user input in the request body
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Log the response from the server
      setDisplayedText(inputText); // Update the displayed text based on the server response
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors from the server
    });
  };

  // The JSX code for rendering the component
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Hello, World!</h2>
          <p>This is the beginning of a new web project.</p>
          <div className="card-actions justify-end">
            <input type="text" placeholder="Enter your text" className="input input-bordered w-full max-w-xs" value={inputText} onChange={handleInputChange} />
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
      <div>
        <code>
          {displayedText && <p>User entered: {displayedText}</p>}
        </code>
      </div>
    </div>
  );
};

export default InputCard;