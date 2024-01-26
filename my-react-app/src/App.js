// App.js
import React from 'react';
import './styles.css'; // Import Tailwind CSS styles
import './output.css'; // Import Tailwind CSS styles

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Site!</h1>
        <p className="text-gray-600">Explore and discover amazing content.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <p>We are a passionate team dedicated to delivering exceptional experiences to our users.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p>Our mission is to provide valuable and engaging content to our audience.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
