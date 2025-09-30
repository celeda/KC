# Complete Framer Recreation Guide: Katarzyna Celeda Website

## Overview
This guide will walk you through recreating the Katarzyna Celeda psychotherapy website in Framer from scratch. We'll use AI prompts, design systems, and code components to build a professional, responsive website.

---

## Phase 1: Project Setup & Wireframing (30-45 minutes)

### Step 1.1: Create New Framer Project
1. Open Framer and click "New Project"
2. Choose "Desktop" as starting point
3. Name: "Katarzyna Celeda - Psychotherapy Website"
4. Set canvas to 1440px width

### Step 1.2: AI Wireframe Generation
Use this prompt in Framer AI or any AI tool:

```
Create a wireframe for a professional psychotherapy website with these sections:
- Header with logo, navigation (Home, About, Services dropdown, Article, Contact), theme toggle
- Hero section with large background image, centered text overlay, two CTA buttons
- Services section with 4 cards in a grid (Individual therapy, Couples therapy, Anxiety/mood, Trauma)
- About preview section with image on left, text content on right
- Final CTA section with centered call-to-action
- Footer with contact info and links

Style: Clean, professional, warm earth tones, serif headings, sans-serif body text
Layout: Modern, spacious, mobile-responsive
```

### Step 1.3: Create Page Structure
1. Create 5 pages in Framer:
   - Home (main page)
   - About
   - Services (with subpages)
   - Article
   - Contact

---

## Phase 2: Design System Setup (45-60 minutes)

### Step 2.1: Color Variables
Go to Design Panel → Variables → Colors and create:

**Light Theme:**
```
Primary: #B39E8F (warm brown)
Secondary: #DBD5CF (light beige)
Background: #FCF9F5 (cream white)
Foreground: #5C5047 (dark brown)
Accent: #C7B5A7 (light brown)
Muted: #F3EEE9 (very light beige)
Card: #F5F0EA (card background)
Border: #E8E1D9 (subtle border)
```

**Dark Theme:**
```
Primary: #D9B38C (warm tan)
Secondary: #363A45 (dark blue-gray)
Background: #171A21 (very dark blue)
Foreground: #F2EDE8 (light cream)
Accent: #E6C7A3 (light tan)
Muted: #232730 (dark gray)
Card: #1E222B (dark card)
Border: #333945 (dark border)
```

### Step 2.2: Typography System
Add Google Fonts:
1. Go to Design Panel → Typography
2. Add fonts:
   - **Lora** (serif) - for headings
   - **Montserrat** (sans-serif) - for body text

Create text styles:
```
Hero Title: Lora, 48-72px, Weight 600
Section Title: Lora, 36-48px, Weight 600  
Section Subtitle: Lora, 24-30px, Weight 500
Body Large: Montserrat, 18-20px, Weight 400
Body: Montserrat, 16px, Weight 400
Body Small: Montserrat, 14px, Weight 400
Caption: Montserrat, 12px, Weight 400
```

### Step 2.3: Spacing System
Create spacing variables (8px system):
```
XS: 4px
S: 8px
M: 16px
L: 24px
XL: 32px
XXL: 48px
XXXL: 64px
```

---

## Phase 3: Master Components Creation (90-120 minutes)

### Step 3.1: Button Component
Create a new component called "Button":

**Variants:**
- Primary (filled with primary color)
- Secondary (outline with primary border)
- Ghost (text only)

**States:**
- Default
- Hover (scale 1.05, shadow increase)
- Pressed (scale 0.98)
- Disabled (opacity 0.5)

**Properties to add:**
```
Text: String, default "Button"
Icon: Boolean, default false
Icon Position: Enum (left, right), default right
Size: Enum (small, medium, large), default medium
Disabled: Boolean, default false
```

**Framer Code Component:**
```jsx
export function Button(props) {
    const { text, variant, size, icon, disabled, onClick } = props
    
    // Use the button code from framer-components.tsx
    // Copy the Button component code exactly
}
```

### Step 3.2: Service Card Component
Create component called "ServiceCard":

**Properties:**
```
Icon: String (emoji or icon)
Title: String
Description: String  
Link Text: String, default "Learn More"
Background Color: Color
```

**Animations:**
- Hover: translateY(-6px), shadow increase
- Icon: scale(1.1) on hover

### Step 3.3: Section Wrapper Component
Create "Section" component:

**Variants:**
- Default background
- Secondary background  
- Gradient background

**Properties:**
```
Padding Size: Enum (small, medium, large)
Max Width: String, default "1280px"
Center Content: Boolean, default false
Background Color: Color
```

---

## Phase 4: Page Building (3-4 hours)

### Step 4.1: Home Page Construction

#### Hero Section:
1. Create frame 1440x800px
2. Add background image: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop`
3. Add overlay: gradient from transparent to background color
4. Center content frame with:
   - Hero title: "Katarzyna Celeda"
   - Subtitle: "Psychoterapeutka. Twoja przestrzeń do rozmowy..."
   - Two buttons: "Poznaj mnie" (primary), "Umów spotkanie" (secondary)

**Animations:**
- Background: parallax scroll (slower than content)
- Content: fade in + slide up on load
- Buttons: hover scale effects

#### Services Section:
1. Create 4-column grid (responsive: 2 cols on tablet, 1 on mobile)
2. Use ServiceCard components:
   - Individual therapy (🤝 icon)
   - Couples therapy (👥 icon)  
   - Anxiety/mood (💙 icon)
   - Trauma therapy (🧠 icon)

#### About Preview Section:
1. 2-column layout
2. Left: Image with decorative elements
3. Right: Text content + CTA button
4. Image: `https://images.unsplash.com/photo-1594824804732-5f8fcaf26be1?q=80&w=1920&auto=format&fit=crop`

#### Final CTA Section:
1. Centered content with gradient background
2. Large title, subtitle, CTA button
3. Lightning bolt icon (⚡)

### Step 4.2: About Page
1. Header with title and subtitle
2. 2-column section: image + experience text
3. Philosophy section in card layout
4. Quote section with background image

### Step 4.3: Contact Page  
1. 2-column layout
2. Left: Contact details with icons
3. Right: Contact form
4. Map embed placeholder

---

## Phase 5: Interactive Components & Code (2-3 hours)

### Step 5.1: Header Component Code
Create code component for navigation:

```jsx
export function Header(props) {
    const { logoLight, logoDark, isDarkTheme, isScrolled } = props
    
    // Copy header code from framer-components.tsx
    // Include mobile menu functionality
    // Add scroll detection for background change
}
```

**Properties:**
```
Logo Light: Image
Logo Dark: Image  
Is Dark Theme: Boolean
Is Scrolled: Boolean
Show Mobile Menu: Boolean
```

### Step 5.2: Hero Section Code
```jsx
export function HeroSection(props) {
    const { backgroundImage, title, subtitle, primaryButtonText, secondaryButtonText } = props
    
    // Copy hero code from framer-components.tsx
    // Include parallax background effect
    // Add scroll indicator animation
}
```

### Step 5.3: Theme Toggle Functionality
Add theme switching logic:
```jsx
const toggleTheme = () => {
    // Switch between light and dark color variables
    // Animate the transition smoothly
}
```

---

## Phase 6: Responsive Design (1-2 hours)

### Step 6.1: Breakpoint Setup
Configure breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

### Step 6.2: Mobile Adaptations
For each component:
1. Adjust grid layouts (4 cols → 2 cols → 1 col)
2. Reduce font sizes appropriately
3. Adjust spacing and padding
4. Ensure touch targets are 44px minimum
5. Test mobile menu functionality

### Step 6.3: Tablet Optimizations
1. Adjust grid layouts for tablet
2. Optimize image sizes and ratios
3. Test navigation interactions

---

## Phase 7: Animations & Interactions (2-3 hours)

### Step 7.1: Scroll Animations
Add to each section:
```
Trigger: On scroll into view
Animation: Fade in + slide up
Duration: 0.6s
Easing: Ease out
Stagger: 0.1s between elements
```

### Step 7.2: Hover States
For all interactive elements:
- Buttons: Scale 1.05, shadow increase
- Cards: Lift effect, shadow increase
- Links: Color transition
- Images: Subtle scale effect

### Step 7.3: Page Transitions
Add smooth transitions between pages:
```
Transition: Smart animate
Duration: 0.3s
Easing: Ease in out
```

### Step 7.4: Micro-interactions
- Button press feedback
- Form field focus states
- Loading states
- Success/error feedback

---

## Phase 8: Content Integration (1-2 hours)

### Step 8.1: Dynamic Content Setup
Create CMS structure or use variables for:
- All text content
- Image URLs
- Navigation links
- Contact information

### Step 8.2: Multi-language Support (Optional)
If needed:
- Create content variants for Polish
- Add language toggle
- Implement content switching logic

---

## Phase 9: Testing & Polish (1-2 hours)

### Step 9.1: Cross-Device Testing
Test on:
- Desktop (various screen sizes)
- Tablet (portrait/landscape)
- Mobile (various sizes)
- Different browsers

### Step 9.2: Performance Optimization
- Optimize image sizes
- Check animation performance
- Test loading times
- Minimize component complexity

### Step 9.3: Accessibility
- Add alt text to all images
- Ensure proper color contrast
- Test keyboard navigation
- Add focus indicators
- Check screen reader compatibility

---

## Phase 10: Publishing & Handoff (30 minutes)

### Step 10.1: Final Review
- Check all links work
- Verify all content is correct
- Test all interactions
- Confirm responsive behavior

### Step 10.2: Export & Share
- Generate shareable link
- Export assets if needed
- Create handoff documentation
- Set up hosting if required

---

## AI Prompts for Each Phase

### Design System Prompt:
```
Create a warm, professional color palette for a psychotherapy website. Include earth tones, warm browns, and cream colors. Provide both light and dark theme variants. The palette should feel calming, trustworthy, and sophisticated.
```

### Component Design Prompt:
```
Design a modern button component with three variants: primary (filled), secondary (outline), and ghost (text only). Include hover states with subtle animations. Style should be professional and warm, using the earth tone color palette.
```

### Layout Prompt:
```
Create a responsive grid layout for a services section with 4 cards. Each card should have an icon, title, description, and link. Layout should be 4 columns on desktop, 2 on tablet, 1 on mobile. Include hover effects and proper spacing.
```

### Animation Prompt:
```
Design subtle scroll animations for a professional website. Elements should fade in and slide up when they come into view. Include staggered animations for multiple elements. Keep animations smooth and not distracting.
```

---

## Time Estimates Summary:
- **Phase 1**: 30-45 minutes (Setup & Wireframing)
- **Phase 2**: 45-60 minutes (Design System)
- **Phase 3**: 90-120 minutes (Master Components)
- **Phase 4**: 3-4 hours (Page Building)
- **Phase 5**: 2-3 hours (Interactive Components)
- **Phase 6**: 1-2 hours (Responsive Design)
- **Phase 7**: 2-3 hours (Animations)
- **Phase 8**: 1-2 hours (Content Integration)
- **Phase 9**: 1-2 hours (Testing & Polish)
- **Phase 10**: 30 minutes (Publishing)

**Total: 12-18 hours** (vs 30+ hours from scratch)

---

## Pro Tips for Speed:

1. **Use Framer's AI features** for initial layouts and content
2. **Copy-paste the provided code components** instead of writing from scratch
3. **Use Auto Layout extensively** for responsive behavior
4. **Create variants early** to avoid rebuilding components
5. **Test responsive behavior as you build** rather than at the end
6. **Use Framer's built-in animations** when possible
7. **Leverage component instances** instead of copying elements
8. **Start with the most complex page** (Home) to establish patterns

This guide will help you recreate the entire website efficiently while maintaining professional quality and responsive design.