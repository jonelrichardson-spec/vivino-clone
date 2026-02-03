import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import WineDetailPage from './pages/WineDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/wine/:id" element={<WineDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;