// App.js
import React from 'react';
import HomePage from './pages/HomePage';
// import './styles.css'; // Import Tailwind CSS styles
import './output.css'; // Import Tailwind CSS styles

function App() {
  return (
    <div className="container mx-auto p-4">
      <section>
        <HomePage />
      </section>
    </div>
  );
}

export default App;
