import React, { useState } from 'react';

const InputCard = () => {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayedText(inputText);
  };

  return (
<div className="flex flex-col justify-center items-center h-screen">
  <div class="card w-96 bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Hello, World!</h2>
      <p>This is the beginning of a new web project.</p>
      <div class="card-actions justify-end">
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