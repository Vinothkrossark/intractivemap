# Interactive US Map - State Resources

A modern, responsive web application for viewing state-specific resources across the United States. Built with Next.js 14, TypeScript, Tailwind CSS, and Zustand.

## Features

- ✅ **Interactive SVG Map** - Click on states to view resources
- ✅ **Multi-State Support** - Easily scalable to all 50 states
- ✅ **6 Data Layers** - IBEW districts, NECA chapters, contacts, projects, and licensing
- ✅ **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ✅ **Touch-Friendly** - Mobile-first interactions with bottom sheet UI
- ✅ **State Management** - Powered by Zustand with localStorage persistence
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Vercel-Ready** - Optimized for deployment on Vercel

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd interactivemap
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
interactivemap/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Map/
│   │   ├── USMap.tsx       # Interactive map component
│   │   └── map-paths.ts    # SVG path data for states
│   └── Sidebar/
│       ├── DesktopSidebar.tsx    # Desktop sidebar
│       ├── MobileSidebar.tsx     # Mobile bottom sheet
│       ├── LayerSelector.tsx     # Layer checkbox list
│       └── LayerOption.tsx       # Individual checkbox
├── data/
│   └── map-config.ts       # State and layer configuration
├── stores/
│   └── mapStore.ts         # Zustand state management
├── hooks/
│   └── useMediaQuery.ts    # Responsive design hook
├── types/
│   └── index.ts            # TypeScript type definitions
└── lib/
    └── utils.ts            # Utility functions
```

## Adding New States

To add support for additional states:

1. Open `data/map-config.ts`
2. Add a new entry to `MAP_CONFIG`:

```typescript
FL: {
  code: "FL",
  name: "Florida",
  resources: {
    ibewDistricts: {
      id: "fl-ibew-1",
      type: "pdf",
      title: "IBEW Florida Districts",
      url: "https://example.com/FL_Districts.pdf",
    },
    // ... add other resources
  },
}
```

3. The state will automatically become interactive on the map!

## Updating SVG Map Paths

The current `components/Map/map-paths.ts` contains placeholder SVG paths. To use a complete US map:

1. Download a US map SVG from [simplemaps.com](https://simplemaps.com) or Wikipedia
2. Extract the `<path>` elements for each state
3. Update `MAP_PATHS` in `map-paths.ts` with the correct coordinates

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the Vercel Platform:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required for the basic setup.

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  navy: {
    950: "#0a0e27",  // Darkest background
    900: "#0f1429",  // Main background
    800: "#1a1f3a",  // Sidebar background
    700: "#252d4f",  // Borders
  },
  gold: {
    500: "#f59e0b",  // Primary accent
    400: "#fbbf24",  // Hover state
    300: "#fcd34d",  // Light accent
  },
}
```

### Data Layers

Edit `data/map-config.ts` to add or modify data layers:

```typescript
export const LAYER_CONFIG = {
  newLayer: {
    id: "newLayer",
    label: "New Layer Name",
    icon: "IconName",  // Lucide icon
    defaultChecked: false,
    color: "blue",
  },
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.
