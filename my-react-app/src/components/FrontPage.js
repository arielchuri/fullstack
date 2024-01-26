import React, { useState } from 'react';

const FrontPage = () => {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayedText(inputText);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your text" value={inputText} onChange={handleInputChange} />
      <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      {displayedText && <p>User entered: {displayedText}</p>}
    </div>
  );
};

export default FrontPage;