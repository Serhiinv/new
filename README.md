# Auction Fusion Website

A modern, multi-page presentation website built with Next.js, TypeScript, and Material-UI, showcasing Auction Fusion's platform and services.

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

### 🧭 Navigation Flow
The website follows a linear navigation pattern:
1. **/** (index) → Loading screen → redirects to **/home**
2. **/home** → Introduction and hero section
3. **/features** → Key features with icon grid
4. **/design** → Design philosophy with visuals
5. **/improvement** → Customer testimonials
6. **/why-us** → Statistics and reasons to choose
7. **/contact** → Call-to-action and contact information

Each page includes:
- Previous/Next navigation buttons
- Contact button in header (except on contact page)
- Smooth transitions and animations

### 🎯 Component Architecture
- **Layout.tsx**: Reusable layout component with header, logo, navigation arrows, and contact button
- Modular page components for easy maintenance
- Separation of concerns (layout vs. content)
- Centralized theme configuration

## Page Breakdown

### index.tsx
Landing page with loading animation that redirects to `/home` after 1.5 seconds.

### home.tsx
Hero page with:
- Main value proposition
- Animated SVG quotes
- Introduction to Auction Fusion platform
- Navigation to features page

### features.tsx
Feature showcase with:
- Icon grid displaying 6 key features
- SEO/AI capabilities
- Conversion optimization
- Performance metrics
- Custom animations for each feature

### design.tsx
Design philosophy page with:
- Visual showcase (monitor mockup)
- "Designed for clicks. Built for people." messaging
- Image and text layout

### improvement.tsx
Customer testimonial page with:
- Real client feedback
- Success metrics (100% sold auctions)
- Testimonial in decorative SVG quotes
- Dark themed background

### why-us.tsx
Statistics and credibility page with:
- Key metrics (500+ clients, 99.9% uptime, 24/7 support)
- Animated stat cards
- Social proof

### contact.tsx
Final call-to-action page with:
- Contact information
- "Get Started" CTA button
- Email link: hello@auctionfusion.com
- No header contact button (user is already on contact page)

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

## Benefits of This Architecture

### ✅ Maintainability
- Clear page structure with logical navigation flow
- Shared layout component reduces duplication
- No CSS module files to maintain
- Easy to modify individual pages

### ✅ Performance
- Next.js 16 with Turbopack for fast dev builds
- Automatic code splitting per page
- Optimized images and assets
- Smooth page transitions

### ✅ SEO-Friendly
- Server-side rendering support
- Unique title and meta description per page
- Semantic HTML structure
- Fast load times

### ✅ Developer Experience
- TypeScript ensures type safety
- IntelliSense support for MUI props
- Hot reload works seamlessly
- No CSS class naming conflicts
- Built-in accessibility features from MUI

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

### Modifying Theme
Edit `theme/theme.ts` to change:
- Colors (primary, secondary)
- Typography (fonts, sizes)
- Spacing and padding
- Breakpoints for responsive design

### Updating Navigation Flow
Modify the `prevPage` and `nextPage` props in each page's Layout component to change the navigation sequence.

### Styling Components
All styles use Material-UI's `sx` prop with theme-aware values:
```tsx
<Box sx={{
  padding: { xs: "20px", md: "50px" },  // Responsive
  color: "primary.main",                 // Theme color
  backgroundColor: "#F5F5F5",            // Custom color
}}/>
```

## License
[Your License Here]
