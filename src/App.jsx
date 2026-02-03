import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WineHero from './components/detail/WineHero';
import ActionButtons from './components/detail/ActionButtons';
import winesData from './data/wines.json';

function App() {
  // Use the first wine for testing
  const wine = winesData[0];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <WineHero wine={wine} />
        <ActionButtons />
        <div className="p-4">
          <p className="text-gray-600">More sections coming next...</p>
        </div>
      </div>
    </Router>
  );
}

export default App;