import { useState, useEffect } from 'react';
import Slider from '../../shared/Slider';

const FilterModal = ({ isOpen, onClose, onFilter, currentFilters, wineCount }) => {
  const [filters, setFilters] = useState({
    types: [],
    rating: 0,
    priceRange: [0, 500],
    onlyOffers: false,
    countries: [],
  });

  const [showAllCountries, setShowAllCountries] = useState(false);

  useEffect(() => {
    if (currentFilters) {
      setFilters(currentFilters);
    }
  }, [currentFilters]);

  const wineTypes = [
    { id: 'Red', label: 'Red' },
    { id: 'White', label: 'White' },
    { id: 'Sparkling', label: 'Sparkling' },
    { id: 'Rosé', label: 'Rosé' },
    { id: 'Dessert', label: 'Dessert' },
    { id: 'Fortified', label: 'Fortified' },
    { id: 'Natural', label: 'Natural' },
  ];

  const topCountries = [
    { code: 'US', name: 'United States', count: 7705 },
    { code: 'FR', name: 'France', count: 6961 },
    { code: 'IT', name: 'Italy', count: 5472 },
    { code: 'ES', name: 'Spain', count: 1835 },
    { code: 'DE', name: 'Germany', count: 845 },
  ];

  const toggleType = (typeId) => {
    setFilters((prev) => ({
      ...prev,
      types: prev.types.includes(typeId)
        ? prev.types.filter((t) => t !== typeId)
        : [...prev.types, typeId],
    }));
  };

  const toggleCountry = (countryCode) => {
    setFilters((prev) => ({
      ...prev,
      countries: prev.countries.includes(countryCode)
        ? prev.countries.filter((c) => c !== countryCode)
        : [...prev.countries, countryCode],
    }));
  };

  const handleClear = () => {
    const clearedFilters = {
      types: [],
      rating: 0,
      priceRange: [0, 500],
      onlyOffers: false,
      countries: [],
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
    onClose();
  };

  const handleApply = () => {
    onFilter(filters);
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
        className="bg-white rounded-t-[28px] w-full max-w-[375px] min-h-[95vh] overflow-hidden shadow-[0_-8px_32px_rgba(0,0,0,0.24)] animate-slide-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle Bar */}
        <div className="sticky top-0 bg-white z-20 flex justify-center pt-4 pb-3 border-b border-gray-100">
          <div className="w-14 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
          {/* Type Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Type</h3>
            <div className="flex flex-wrap gap-2.5">
              {wineTypes.map((type) => (
                <button
                  key={type.id}
                  className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filters.types.includes(type.id)
                      ? 'bg-vivino-burgundy text-white shadow-lg shadow-vivino-burgundy/30 scale-105'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-vivino-burgundy hover:bg-vivino-burgundy/5 active:scale-95'
                  }`}
                  onClick={() => toggleType(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Rating Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Rating</h3>
              <div className="flex items-center gap-2 bg-vivino-burgundy/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-vivino-burgundy" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-vivino-burgundy font-bold text-base">
                  {filters.rating.toFixed(1)}+
                </span>
              </div>
            </div>
            <div className="px-1">
              <Slider
                min={0}
                max={5}
                value={filters.rating}
                onChange={(val) => setFilters({ ...filters, rating: val })}
                step={0.1}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Price Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Price</h3>
              <span className="text-gray-600 font-semibold text-base bg-gray-100 px-4 py-2 rounded-full">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </span>
            </div>
            <div className="px-1">
              <Slider
                min={0}
                max={500}
                value={filters.priceRange}
                onChange={(val) => setFilters({ ...filters, priceRange: val })}
                step={5}
                dual={true}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Only shows offers */}
          <div className="mb-8">
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4 border-2 border-gray-100">
              <span className="text-base text-gray-900 font-semibold">Only show offers</span>
              <button
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
                  filters.onlyOffers ? 'bg-vivino-burgundy shadow-lg shadow-vivino-burgundy/40' : 'bg-gray-300'
                }`}
                onClick={() => setFilters({ ...filters, onlyOffers: !filters.onlyOffers })}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-all duration-300 shadow-md ${
                    filters.onlyOffers ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

          {/* Country Section */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Country</h3>
            <div className="flex flex-wrap gap-2.5">
              {(showAllCountries ? topCountries : topCountries.slice(0, 4)).map((country) => (
                <button
                  key={country.code}
                  className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filters.countries.includes(country.code)
                      ? 'bg-vivino-burgundy text-white shadow-lg shadow-vivino-burgundy/30 scale-105'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-vivino-burgundy hover:bg-vivino-burgundy/5 active:scale-95'
                  }`}
                  onClick={() => toggleCountry(country.code)}
                >
                  {country.name} ({country.count})
                </button>
              ))}
            </div>
            {!showAllCountries && (
              <button
                className="text-vivino-burgundy text-sm font-bold mt-4 hover:underline underline-offset-2"
                onClick={() => setShowAllCountries(true)}
              >
                Show all countries
              </button>
            )}
          </div>
        </div>

        {/* Bottom Actions - Fixed */}
        <div className="sticky bottom-0 bg-white border-t-2 border-gray-100 px-6 py-5 flex items-center justify-between shadow-[0_-4px_24px_rgba(0,0,0,0.08)] z-20">
          <button
            className="text-gray-500 font-bold text-base hover:text-gray-700 active:scale-95 transition-all px-2"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="bg-vivino-burgundy text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-vivino-burgundy/40 hover:shadow-xl hover:shadow-vivino-burgundy/50 active:scale-95 transition-all"
            onClick={handleApply}
          >
            Show {wineCount || 0} wines
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
