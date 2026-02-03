import { useState } from 'react';
import SortModal from './modals/SortModal';
import FilterModal from './modals/FilterModal';

const FilterBar = ({ onSort, onFilter, currentSort, currentFilters, filteredWineCount }) => {
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-8 py-3 px-4 bg-white border-b border-gray-100">
        {/* Sort button */}
        <button
          className="flex items-center gap-2 text-text-primary hover:text-vivino-burgundy transition-colors"
          onClick={() => setSortModalOpen(true)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9M3 12h5m10-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
          <span className="text-sm font-medium">Sort</span>
        </button>

        {/* Filter button */}
        <button
          className="flex items-center gap-2 text-text-primary hover:text-vivino-burgundy transition-colors"
          onClick={() => setFilterModalOpen(true)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      {/* Modals */}
      <SortModal
        isOpen={sortModalOpen}
        onClose={() => setSortModalOpen(false)}
        onSort={onSort}
        currentSort={currentSort}
      />

      <FilterModal
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onFilter={onFilter}
        currentFilters={currentFilters}
        wineCount={filteredWineCount}
      />
    </>
  );
};

export default FilterBar;
