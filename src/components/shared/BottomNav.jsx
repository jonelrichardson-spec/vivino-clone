import { useState } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('shop');

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 'camera',
      label: '',
      isCenter: true,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="12" cy="14" r="3" strokeWidth={2} />
          <path d="M7 8L9 5h6l2 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      ),
    },
    {
      id: 'mywines',
      label: 'My Wines',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 2h4M10 2v2M14 2v2M10 4h4v4c0 3 1 5 2 6v8h-8v-8c1-1 2-3 2-6V4z" />
        </svg>
      ),
    },
    {
      id: 'more',
      label: 'More',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-vivino-burgundy z-50 max-w-[375px] mx-auto">
      <div className="flex items-center justify-around h-[65px]">
        {tabs.map((tab) => {
          if (tab.isCenter) {
            return (
              <button
                key={tab.id}
                className="flex items-center justify-center w-14 h-14 -mt-5 bg-white rounded-full shadow-lg"
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-vivino-burgundy">{tab.icon}</span>
              </button>
            );
          }

          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className="flex flex-col items-center justify-center px-3 py-2 min-w-[60px] text-white"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : 'font-normal'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
