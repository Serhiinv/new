# Auction Fusion Website

A modern, multi-page presentation website built with Next.js, TypeScript, and Material-UI

## Project Structure

```
📦 new/
├── 📂 components/
│   └── Layout.tsx                # Shared layout with header, navigation, and contact button
├── 📂 pages/
│   ├── _app.tsx                  # App wrapper with MUI ThemeProvider
│   ├── _document.tsx             # Document with custom fonts
│   ├── index.tsx                 # Landing page with loading screen (redirects to /home)
│   ├── home.tsx                  # Homepage - main introduction
│   ├── features.tsx              # Features page with icon grid
│   ├── design.tsx                # Design philosophy page
│   ├── improvement.tsx           # Customer testimonial page
│   ├── why-us.tsx                # Why choose us page with stats
│   └── contact.tsx               # Contact/CTA page
├── 📂 config/
│   └── basePath.ts               # Base path configuration (empty for local, '/new' for GitHub Pages)
├── 📂 theme/
│   └── theme.ts                  # Material-UI theme configuration
├── 📂 styles/
│   └── globals.css               # Global styles
└── 📂 public/
    ├── logo.jpeg                 # Company logo
    ├── design.jpeg               # Design page image
    ├── monitor-screen.jpeg       # Monitor mockup
    ├── monitor.png               # Monitor image
    └── img.png                   # Additional assets
```

## Technology Stack

- **Next.js 16** - React framework with Turbopack for fast development
- **TypeScript** - Type-safe development
- **Material-UI (MUI)** - React component library
- **Emotion** - CSS-in-JS styling

## Key Features

### 🎨 Material-UI Integration
- All components use MUI components (Box, Typography, Button, Paper, etc.)
- Consistent theming via ThemeProvider
- Responsive design with MUI's breakpoint system
- Built-in animations and transitions

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly navigation
- Optimized for desktop and mobile viewing

### 🎯 Component Architecture
- **Layout.tsx**: Reusable layout component with header, logo, navigation arrows, and contact button
- Modular page components for easy maintenance
- Separation of concerns (layout vs. content)
- Centralized theme configuration

## Theme Configuration

Centralized theme in `theme/theme.ts`:
- **Primary Color**: `#0A1E3F` (Dark blue)
- **Secondary Color**: `#E91E63` (Pink/Magenta)
- Custom typography settings
- Schibsted Grotesk font family
- Responsive breakpoint values

## Configuration

### basePath.ts
Handles different base paths for:
- **Local development**: Empty string `''` → `http://localhost:3000/`
- **GitHub Pages**: `'/new'` → `https://username.github.io/new/`

This ensures the site works correctly in both environments without manual URL adjustments.

## Running the Project

### Development
```bash
npm install
npm run dev
```
Navigate to `http://localhost:3000/` (not `/new` - that's only for production)

### Production Build
```bash
npm run build
npm start
```

### Deploy to GitHub Pages
The project is configured to deploy to GitHub Pages with the proper base path:
```bash
npm run build
npm run export  # If using static export
```


## Customization

### Adding a New Page
1. Create a new file in `pages/` (e.g., `pages/pricing.tsx`)
2. Use the Layout component with `prevPage` and `nextPage` props
3. Add Head component with SEO metadata
4. Use MUI components for consistent styling

Example:
```tsx
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Typography } from "@mui/material";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Auction Fusion</title>
        <meta name="description" content="Affordable pricing plans" />
      </Head>
      
      <Layout showContactButton={true} prevPage="/why-us" nextPage="/contact">
        <Box sx={{ padding: "100px 70px" }}>
          <Typography variant="h2">Pricing</Typography>
          {/* Your content */}
        </Box>
      </Layout>
    </>
  );
}
```

