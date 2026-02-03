import { useNavigate } from 'react-router-dom';
import { getCountryFlag, formatPrice } from '../../utils/helpers';
import { getMockBottleImage } from '../../utils/wineImages';

const WineCardVertical = ({ wine, onAddToCart }) => {
  const navigate = useNavigate();
  
  const {
    id,
    producer,
    name,
    year,
    type,
    region,
    countryCode,
    rating,
    reviewCount,
    price,
    originalPrice,
    discountPercent,
  } = wine;

  const hasDiscount = discountPercent > 0;
  const flag = getCountryFlag(countryCode);
  const mockBottleImage = getMockBottleImage(type, id);

  const handleCardClick = () => {
    navigate(`/wine/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click when clicking cart button
    onAddToCart(id);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="flex bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-3 mx-3 cursor-pointer hover:shadow-md transition-shadow"
    >
      {/* Wine Image Section */}
      <div className="relative flex-shrink-0 w-[140px] h-[180px]">
        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1 text-xs font-bold text-white bg-vivino-red rounded-md">
            -{discountPercent}%
          </span>
        )}

        {/* Wine Bottle Mockup */}
        <div
          className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden"
          style={{ backgroundColor: '#f8f8f8' }}
        >
          <img
            src={mockBottleImage}
            alt={`${producer} ${name} bottle`}
            className="h-[172px] w-auto object-contain drop-shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Wine Details Section */}
      <div className="flex-1 ml-3 flex flex-col justify-between min-w-0">
        {/* Top section with bookmark */}
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0 pr-2">
            {/* Producer */}
            <p className="text-sm text-text-secondary truncate">{producer}</p>

            {/* Wine Name */}
            <h3 className="text-base font-semibold text-text-primary leading-tight mt-0.5 line-clamp-2">
              {name} {year}
            </h3>

            {/* Region */}
            <p className="text-sm text-text-secondary mt-1 flex items-center gap-1">
              <span>{flag}</span>
              <span className="truncate">{region}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1.5">
              <svg className="w-4 h-4 text-rating-star fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-text-primary">{rating}</span>
              <span className="text-sm text-text-secondary">({reviewCount})</span>
            </div>
          </div>

          {/* Bookmark icon */}
          <button 
            onClick={(e) => e.stopPropagation()}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Bottom section with price and cart */}
        <div className="flex items-end justify-between mt-3">
          {/* Price */}
          <div>
            <span className="text-lg font-bold text-vivino-red">{formatPrice(price)}</span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-text-secondary line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-11 h-11 bg-vivino-green rounded-full shadow-md hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCardVertical;