import React from 'react';
import { useNavigate } from 'react-router-dom';

const BottomNav = ({ activeTab = 'shop' }) => {
  const navigate = useNavigate();

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠', path: '/' },
    { id: 'shop', label: 'Shop', icon: '🏪', path: '/shop' },
    { id: 'camera', label: '', icon: '📷', path: '/camera', isCenter: true },
    { id: 'mywines', label: 'My Wines', icon: '🍷', path: '/my-wines' },
    { id: 'more', label: 'More', icon: '•••', path: '/more' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-vivino-burgundy shadow-lg z-50" style={{ maxWidth: '375px', margin: '0 auto' }}>
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeTab === tab.id
                ? 'bg-opacity-80 text-white'
                : 'text-white text-opacity-70 hover:text-opacity-100'
            } ${tab.isCenter ? 'relative' : ''}`}
          >
            {tab.isCenter ? (
              <div className="absolute -top-4 bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">{tab.icon}</span>
              </div>
            ) : (
              <>
                <span className="text-xl mb-1">{tab.icon}</span>
                <span className="text-xs">{tab.label}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;