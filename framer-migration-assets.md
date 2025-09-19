# Framer Migration Guide - Katarzyna Celeda Website

## Color System (Copy to Framer Design Tokens)

### Light Theme
```css
--background: hsl(35, 60%, 97%)     /* #FCF9F5 */
--foreground: hsl(30, 30%, 28%)     /* #5C5047 */
--primary: hsl(30, 45%, 55%)        /* #B39E8F */
--secondary: hsl(30, 30%, 85%)      /* #DBD5CF */
--accent: hsl(30, 45%, 65%)         /* #C7B5A7 */
--muted: hsl(30, 35%, 93%)          /* #F3EEE9 */
--card: hsl(35, 50%, 94%)           /* #F5F0EA */
--border: hsl(30, 35%, 88%)         /* #E8E1D9 */
```

### Dark Theme
```css
--background: hsl(220, 25%, 12%)    /* #171A21 */
--foreground: hsl(35, 50%, 92%)     /* #F2EDE8 */
--primary: hsl(30, 55%, 70%)        /* #D9B38C */
--secondary: hsl(220, 15%, 25%)     /* #363A45 */
--accent: hsl(30, 55%, 78%)         /* #E6C7A3 */
--muted: hsl(220, 20%, 17%)         /* #232730 */
--card: hsl(220, 22%, 15%)          /* #1E222B */
--border: hsl(220, 20%, 25%)        /* #333945 */
```

## Typography System

### Fonts
- **Headings**: Lora (serif) - Google Fonts
- **Body**: Montserrat (sans-serif) - Google Fonts

### Text Styles
- **Hero Title**: 4xl-6xl, font-light, Lora
- **Section Title**: 4xl-5xl, font-semibold, Lora
- **Section Subtitle**: 2xl-3xl, font-medium, Lora
- **Body Text**: base-xl, font-normal, Montserrat
- **Small Text**: sm, font-normal, Montserrat

## Image Assets (URLs to import)

### Main Images
- Hero Image: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/9ebcb36c72b0e545a14b1e98d0f70ffa.jpg
- About Me: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5c74e2cd94a8640a2f2275d697827b86.jpg
- About Page: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/3511dd402cf2200d28943d2ea37d4c3d.jpg

### Logos
- Light Logo: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5afba704ef397fc446b346535b0a1639.png
- Dark Logo: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/cc4b6778972598ca9074a11d4ba01b6e.png
- Round Logo: /logo-psychoterapia.png

### Service Icons
- Relationships: /icons/icon-relationships.png
- Anxiety: /icons/icon-anxiety.png
- Brain: /icons/icon-brain.png
- Hand: /icons/icon-hand.png
- Idea: /icons/icon-idea.png

## Page Structure

### 1. Home Page Components
- **Hero Section**: Large image background, centered text, 2 CTA buttons
- **Services Grid**: 4-column grid with icons and descriptions
- **About Preview**: 2-column layout with image and text
- **CTA Section**: Centered call-to-action with gradient background

### 2. About Page Components
- **Header**: Title and subtitle
- **Two-column content**: Image + text blocks
- **Philosophy section**: Card with background
- **Quote section**: Centered quote with background image

### 3. Service Pages Components
- **Service header**: Icon + title + description
- **Feature grid**: Cards with icons and descriptions
- **Process timeline**: Step-by-step breakdown
- **CTA section**: Final call-to-action

### 4. Contact Page Components
- **Contact form**: Name, email, message fields
- **Contact details**: Address, phone, email with icons
- **Map embed**: OpenStreetMap iframe

## Content Structure (JSON)
All content is stored in `/src/content.json` - import this directly into Framer as data source.

## Quick Migration Steps

### Step 1: Setup Framer Project
1. Create new Framer project
2. Import Google Fonts (Lora, Montserrat)
3. Set up color variables from above
4. Create text styles for typography system

### Step 2: Import Assets
1. Download all images from URLs above
2. Import into Framer assets
3. Create icon components for service icons

### Step 3: Create Master Components
1. **Button Component**: Primary, secondary, outline variants
2. **Card Component**: Service card, feature card variants
3. **Section Component**: Standard padding and spacing
4. **Navigation Component**: Desktop and mobile versions

### Step 4: Build Pages
1. Start with Home page (most complex)
2. Create reusable sections as components
3. Use Framer's responsive breakpoints
4. Add scroll animations and micro-interactions

### Step 5: Add Interactions
- Smooth scroll between sections
- Hover states for cards and buttons
- Mobile menu animations
- Form validation states
- Theme toggle animation

## Framer-Specific Optimizations

### Animations to Add
- **Hero parallax**: Background image moves slower than content
- **Scroll reveals**: Fade in + slide up for sections
- **Hover effects**: Scale and shadow changes for cards
- **Button interactions**: Scale on press, color transitions
- **Mobile menu**: Slide in/out animation

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

### Performance Tips
- Use Framer's image optimization
- Implement lazy loading for images
- Use Framer's built-in animations instead of custom CSS
- Optimize for mobile-first design

## Time Estimate
- **Setup & Assets**: 2-3 hours
- **Component Creation**: 4-5 hours
- **Page Assembly**: 6-8 hours
- **Responsive & Polish**: 3-4 hours
- **Total**: 15-20 hours (vs 40+ hours from scratch)