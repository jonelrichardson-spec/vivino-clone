// Country code to flag emoji mapping
const countryFlags = {
  US: '🇺🇸',
  FR: '🇫🇷',
  IT: '🇮🇹',
  NZ: '🇳🇿',
  DE: '🇩🇪',
  AU: '🇦🇺',
  ES: '🇪🇸',
  PT: '🇵🇹',
  AR: '🇦🇷',
  CL: '🇨🇱',
  ZA: '🇿🇦',
  AT: '🇦🇹',
};

export const getCountryFlag = (countryCode) => {
  return countryFlags[countryCode] || '🏳️';
};

// Format price with currency
export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

// Format review count
export const formatReviewCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

// Get wine type color for placeholder bottles
export const getWineTypeColor = (type) => {
  const colors = {
    red: {
      glass: '#2C1810',
      label: '#722F37',
    },
    white: {
      glass: '#C4B896',
      label: '#F5F5DC',
    },
    rose: {
      glass: '#FFB6C1',
      label: '#FFC0CB',
    },
    sparkling: {
      glass: '#2F4F4F',
      label: '#C0C0C0',
    },
  };
  return colors[type] || colors.red;
};
