import React from 'react';
import { Link } from 'react-router-dom';

const AppComponent: React.FC = () => {
  return (
    <div>
      <h1>{/* SECOND AGENT: [MISSING CONTEXT] - Title should be provided here */}</h1>
      <nav>
        <Link to="/home">Go Back to Homepage</Link>
        <Link to="/all-countries">List of all Countries</Link>
      </nav>
      <div>
        <RouterOutlet />
      </div>
    </div>
  );
};

export default AppComponent;