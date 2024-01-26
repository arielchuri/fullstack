// App.js
import React from 'react';
import FrontPage from './components/FrontPage.js';
// import './styles.css'; // Import Tailwind CSS styles
import './output.css'; // Import Tailwind CSS styles

function App() {
  return (
    <div className="container mx-auto p-4">
      <section>
        <FrontPage />
      </section>
    </div>
  );
}

export default App;
