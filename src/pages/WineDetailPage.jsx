import React from 'react';
import { useParams } from 'react-router-dom';
import WineHero from '../components/detail/WineHero';
import ActionButtons from '../components/detail/ActionButtons';
import winesData from '../data/wines.json';

const WineDetailPage = () => {
  const { id } = useParams();
  const wine = winesData.find(w => w.id === parseInt(id));

  if (!wine) {
    return <div className="p-4">Wine not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <WineHero wine={wine} />
      <ActionButtons />
      
      {/* Product Info Section - Coming next */}
      <div className="p-4">
        <p className="text-gray-500 text-sm">{wine.producer}</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {wine.name} {wine.year}
        </h1>
        <p className="text-gray-600 mb-4">
          🇺🇸 Red wine from {wine.region}, {wine.country}
        </p>
        
        <div className="text-3xl font-bold text-gray-900 mb-2">
          ${wine.price.toFixed(2)} <span className="text-base font-normal text-gray-500">/bottle</span>
        </div>
        {wine.discountPercent > 0 && (
          <p className="text-gray-500 mb-4">
            <span className="line-through">${wine.originalPrice.toFixed(2)}</span>
            <span className="text-vivino-green font-medium ml-2">-{wine.discountPercent}%</span>
          </p>
        )}
        
        <button className="w-full bg-vivino-green text-white py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90">
          Buy now
        </button>
        
        <p className="text-gray-500 mt-8">More sections coming soon...</p>
      </div>
    </div>
  );
};

export default WineDetailPage;