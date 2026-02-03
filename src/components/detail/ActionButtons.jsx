import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 py-4 border-t border-b border-gray-200 bg-white">
      {/* Rate Button */}
      <button className="flex items-center space-x-2 px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
        <span className="text-orange-400 text-xl">⭐</span>
        <span className="font-medium text-gray-700">Rate</span>
      </button>

      {/* Actions Button */}
      <button className="flex items-center space-x-2 px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="font-medium text-gray-700">Actions</span>
      </button>
    </div>
  );
};

export default ActionButtons;