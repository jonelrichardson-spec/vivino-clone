import { useState, useEffect } from 'react';

const SortModal = ({ isOpen, onClose, onSort, currentSort }) => {
  const [selectedSort, setSelectedSort] = useState(currentSort || 'best');

  useEffect(() => {
    setSelectedSort(currentSort || 'best');
  }, [currentSort]);

  const sortOptions = [
    { id: 'best', label: 'Best picks (default)' },
    { id: 'highest-rated', label: 'Highest rated' },
    { id: 'most-popular', label: 'Most popular' },
    { id: 'price-high', label: 'Price: Highest first' },
    { id: 'price-low', label: 'Price: Lowest first' },
    { id: 'most-discounted', label: 'Most discounted' },
  ];

  const handleDone = () => {
    onSort(selectedSort);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-t-[28px] w-full max-w-[375px] min-h-[75vh] shadow-[0_-8px_32px_rgba(0,0,0,0.24)] animate-slide-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle Bar */}
        <div className="flex justify-center pt-4 pb-5 border-b border-gray-100">
          <div className="w-14 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Sort Options */}
        <div className="flex-1 px-6 py-4">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              className="flex items-center w-full py-5 px-5 hover:bg-gray-50 rounded-2xl transition-all duration-200 active:scale-98 group"
              onClick={() => setSelectedSort(option.id)}
            >
              <div className="flex items-center justify-center w-7 h-7 mr-5">
                {selectedSort === option.id ? (
                  <div className="w-7 h-7 rounded-full bg-vivino-burgundy flex items-center justify-center shadow-lg shadow-vivino-burgundy/40 scale-110 transition-all">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full border-[3px] border-gray-300 group-hover:border-vivino-burgundy transition-all"></div>
                )}
              </div>
              <span className={`text-base leading-snug transition-all ${
                selectedSort === option.id
                  ? 'text-vivino-burgundy font-bold'
                  : 'text-gray-700 font-medium group-hover:text-vivino-burgundy'
              }`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>

        {/* Done Button */}
        <div className="px-6 pb-8 pt-4 border-t-2 border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
          <button
            className="w-full bg-vivino-burgundy text-white py-4 rounded-full font-bold text-base shadow-lg shadow-vivino-burgundy/40 hover:shadow-xl hover:shadow-vivino-burgundy/50 active:scale-95 transition-all"
            onClick={handleDone}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
