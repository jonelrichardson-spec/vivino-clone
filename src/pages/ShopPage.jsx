import { useState, useMemo } from 'react';
import ShopHeader from '../components/shop/ShopHeader';
import FilterBar from '../components/shop/FilterBar';
import WineList from '../components/shop/WineList';
import BottomNav from '../components/shared/BottomNav';
import wines from '../data/wines.json';

const ShopPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentSort, setCurrentSort] = useState('best');
  const [currentFilters, setCurrentFilters] = useState({
    types: [],
    rating: 0,
    priceRange: [0, 500],
    onlyOffers: false,
    countries: [],
  });

  const handleAddToCart = (wineId) => {
    setCartCount((prev) => prev + 1);
  };

  const handleSort = (sortType) => {
    setCurrentSort(sortType);
  };

  const handleFilter = (filters) => {
    setCurrentFilters(filters);
  };

  // Filter wines based on current filters
  const filteredWines = useMemo(() => {
    let result = [...wines];

    // Filter by type
    if (currentFilters.types.length > 0) {
      result = result.filter((wine) => currentFilters.types.includes(wine.type));
    }

    // Filter by rating
    if (currentFilters.rating > 0) {
      result = result.filter((wine) => wine.rating >= currentFilters.rating);
    }

    // Filter by price range
    result = result.filter(
      (wine) =>
        wine.price >= currentFilters.priceRange[0] &&
        wine.price <= currentFilters.priceRange[1]
    );

    // Filter by offers only
    if (currentFilters.onlyOffers) {
      result = result.filter((wine) => wine.discountPercent > 0);
    }

    // Filter by country
    if (currentFilters.countries.length > 0) {
      result = result.filter((wine) => currentFilters.countries.includes(wine.countryCode));
    }

    return result;
  }, [currentFilters]);

  // Sort filtered wines
  const sortedWines = useMemo(() => {
    let result = [...filteredWines];

    switch (currentSort) {
      case 'best':
        // Keep original order (default)
        break;

      case 'highest-rated':
        result.sort((a, b) => b.rating - a.rating);
        break;

      case 'most-popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;

      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'most-discounted':
        result.sort((a, b) => b.discountPercent - a.discountPercent);
        break;

      default:
        break;
    }

    return result;
  }, [filteredWines, currentSort]);

  return (
    <div className="flex flex-col h-screen bg-background-gray">
      <ShopHeader cartCount={cartCount} />
      <FilterBar
        onSort={handleSort}
        onFilter={handleFilter}
        currentSort={currentSort}
        currentFilters={currentFilters}
        filteredWineCount={filteredWines.length}
      />
      <WineList wines={sortedWines} onAddToCart={handleAddToCart} />
      <BottomNav />
    </div>
  );
};

export default ShopPage;
