const mockBottleImages = {
  red: [
    '/images/wines/mock/red-heritage-01.svg',
    '/images/wines/mock/red-altitude-02.svg',
  ],
  white: [
    '/images/wines/mock/white-citrine-01.svg',
    '/images/wines/mock/white-seabreeze-02.svg',
  ],
  sparkling: [
    '/images/wines/mock/sparkling-nocturne-01.svg',
    '/images/wines/mock/sparkling-aurora-02.svg',
  ],
  natural: [
    '/images/wines/mock/natural-orchard-01.svg',
    '/images/wines/mock/natural-clay-02.svg',
  ],
};

const fallbackTypeMap = {
  rose: 'sparkling',
};

export const getMockBottleImage = (type, id) => {
  const normalizedType = fallbackTypeMap[type] || type;
  const variants = mockBottleImages[normalizedType] || mockBottleImages.red;
  const index = Math.abs(id - 1) % variants.length;
  return variants[index];
};
