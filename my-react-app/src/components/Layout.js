// MainLayout.js
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-lg">
      {children}
    </div>
  );
};

export default MainLayout;