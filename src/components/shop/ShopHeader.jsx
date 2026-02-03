const ShopHeader = ({ cartCount = 0 }) => {
  return (
    <header className="sticky top-0 bg-white z-40 px-4 py-3 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Title and count */}
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold text-text-primary">Shop</h1>
          <span className="text-lg text-text-secondary">30,910</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Cart icon with badge */}
          <button className="relative p-1">
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-vivino-burgundy rounded-full">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          {/* Search icon */}
          <button className="p-1">
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
