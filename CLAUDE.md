# CLAUDE.md - Vivino Clone Shop Page

## Project Overview
A mobile-responsive React application replicating the Vivino wine app's Shop page. This project focuses on high-fidelity UI replication of the wine shopping experience.

## Architecture Decisions

### Tech Stack
- **React 19** with Vite for fast development and HMR
- **Tailwind CSS v4** for utility-first styling with CSS-first configuration
- **No state management library** - using React's built-in useState for cart state
- **No routing** - Shop page only (out of scope per requirements)

### Component Structure
```
src/
├── components/
│   ├── shared/
│   │   ├── BottomNav.jsx    # Fixed bottom navigation (burgundy theme)
│   │   └── Slider.jsx       # Reusable slider for filters
│   └── shop/
│       ├── ShopHeader.jsx   # Header with title, cart badge, search
│       ├── FilterBar.jsx    # Sort/Filter buttons with modal controls
│       ├── WineCardVertical.jsx  # Individual wine card
│       ├── WineList.jsx     # Scrollable container for cards
│       └── modals/
│           ├── SortModal.jsx    # Sort options bottom sheet
│           └── FilterModal.jsx  # Filter options bottom sheet
├── pages/
│   └── ShopPage.jsx         # Main page with filter/sort logic
├── data/
│   └── wines.json           # Mock wine data (25 wines)
└── utils/
    └── helpers.js           # Utility functions (country flags, etc.)
```

### Styling Approach
- Tailwind CSS v4 with custom theme colors defined in `@theme` block
- Mobile-first design targeting 375px viewport (iPhone SE/8)
- System font stack for native feel
- Brand colors: burgundy (#721C24), green (#008767), red (#DC3545)

## Assumptions

### Data
- Wine data provided via `wines.json` with 25 wines
- Image paths reference `/images/wines/` directory
- All wines have required fields: id, producer, name, year, price, rating, etc.

### UI/UX
- Cart badge shows total items count
- Add to Cart increments count by 1 per click
- Clicking wine card does NOT navigate (out of scope)
- **Sort functionality**: 6 sorting options (Best picks, Highest rated, Most popular, Price high/low, Most discounted)
- **Filter functionality**: Filter by wine type, rating, price range, offers, and country
- Filters and sorting are fully functional with real-time wine list updates
- Bottom nav tabs are UI-only except visual highlight on Shop
- Bottom nav has burgundy background with white icons
- Camera tab has inverted colors (white background, burgundy icon)

### Mobile Viewport
- Fixed width: 375px max
- Centered on larger screens with shadow
- Bottom nav: 65px height, fixed position
- Header: 56px height, fixed position
- Wine card image: ~160px width

## Recent Updates

### Sort & Filter Implementation
- **SortModal**: Bottom sheet with 6 sort options and radio button selection
- **FilterModal**: Bottom sheet with multiple filter sections:
  - Type pills (Red, White, Sparkling, Rosé, Dessert, Fortified, Natural)
  - Rating slider (0-5.0 range)
  - Price range slider (dual-handle, $0-$500)
  - Offers toggle switch
  - Country pills with counts (top 5 countries)
- **Filtering Logic**: Real-time filtering by type, rating, price, offers, and country
- **Sorting Logic**: 6 sorting algorithms applied to filtered results
- Wine count updates dynamically in filter modal
- Empty state shown when no wines match filters

### BottomNav Updates
- Background color changed to Vivino burgundy (#721C24)
- All icons now white for better contrast
- Camera tab inverted (white background, burgundy icon)
- Updated Shop icon to shopping bag design
- Updated My Wines icon to simple wine bottle design

### UI Polish (Latest Update)
- **Removed ALL emojis** - No more 🍷🥂🍾🌸🇺🇸🇫🇷⭐ anywhere
- **Burgundy buttons throughout** - All primary buttons use brand color instead of black
- **Taller modals** - Increased from 85vh to 92vh for better UX
- **Better visual hierarchy** - Added section dividers, stronger shadows, prominent handle bars
- **Professional icons** - All SVG-based, no emoji icons
- **Improved spacing** - Better padding and margins throughout
- **Consistent burgundy theme** - Toggle switches, sliders, pills all use burgundy

## Deviations from PRD

1. **No routing setup** - Only Shop page in scope
2. **No image gallery swipe** - Shop list cards show single thumbnail
3. **Wine images** - Using SVG placeholders (colored by wine type)
4. **Cart persistence** - State resets on page reload (no localStorage)

## Future Expansion Notes
Planned for future implementation:
- Wine Detail Page: Click wine card → navigate with wine ID
- My Wines Page: User collection with preferences editor
- Cart Context: Global state management for cart across pages
- React Router: Route-based navigation between pages
- Search functionality: Currently icon-only
- Real wine bottle images: Currently using SVG placeholders
- Filter persistence: Save filters to localStorage
- More filter options: Vintage year, wine style, food pairings

## Development Notes

### Running the Project
```bash
npm install
npm run dev
```

### Key Files
- `src/index.css` - Tailwind imports and custom theme
- `src/data/wines.json` - Mock wine data
- `src/App.jsx` - Root component rendering ShopPage

### Color Reference
| Name | Hex | Usage |
|------|-----|-------|
| vivino-burgundy | #721C24 | Nav bar, accents |
| vivino-green | #008767 | CTA buttons, add to cart |
| vivino-red | #DC3545 | Discount badges, sale prices |
| text-primary | #212529 | Main text, wine names |
| text-secondary | #6C757D | Producer names |
