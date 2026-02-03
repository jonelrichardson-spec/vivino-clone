import WineCardVertical from './WineCardVertical';

const WineList = ({ wines, onAddToCart }) => {
  return (
    <div className="flex-1 overflow-y-auto pb-[80px] pt-2">
      {wines && wines.length > 0 ? (
        wines.map((wine) => (
          <WineCardVertical
            key={wine.id}
            wine={wine}
            onAddToCart={onAddToCart}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <p className="text-text-secondary text-center">
            No wines found matching your filters.
          </p>
          <p className="text-text-tertiary text-sm mt-2 text-center">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
};

export default WineList;
