# Framer Migration Checklist - Katarzyna Celeda Website

## Phase 1: Project Setup & Design System (2-3 hours)

### 1.1 Create New Framer Project
- [ ] Create new Framer project
- [ ] Set project name: "Katarzyna Celeda - Psychoterapia"
- [ ] Configure project settings (Polish language, responsive design)

### 1.2 Import Fonts
- [ ] Add Google Fonts: Lora (serif) - weights: 400, 500, 600, 700
- [ ] Add Google Fonts: Montserrat (sans-serif) - weights: 300, 400, 500, 600, 700
- [ ] Set up font variables in design panel

### 1.3 Color System Setup
- [ ] Create color variables for light theme:
  - [ ] Background: `hsl(35, 60%, 97%)` (#FCF9F5)
  - [ ] Foreground: `hsl(30, 30%, 28%)` (#5C5047)
  - [ ] Primary: `hsl(30, 45%, 55%)` (#B39E8F)
  - [ ] Secondary: `hsl(30, 30%, 85%)` (#DBD5CF)
  - [ ] Accent: `hsl(30, 45%, 65%)` (#C7B5A7)
  - [ ] Muted: `hsl(30, 35%, 93%)` (#F3EEE9)
  - [ ] Card: `hsl(35, 50%, 94%)` (#F5F0EA)
  - [ ] Border: `hsl(30, 35%, 88%)` (#E8E1D9)

- [ ] Create color variables for dark theme:
  - [ ] Background: `hsl(220, 25%, 12%)` (#171A21)
  - [ ] Foreground: `hsl(35, 50%, 92%)` (#F2EDE8)
  - [ ] Primary: `hsl(30, 55%, 70%)` (#D9B38C)
  - [ ] Secondary: `hsl(220, 15%, 25%)` (#363A45)
  - [ ] Accent: `hsl(30, 55%, 78%)` (#E6C7A3)
  - [ ] Muted: `hsl(220, 20%, 17%)` (#232730)
  - [ ] Card: `hsl(220, 22%, 15%)` (#1E222B)
  - [ ] Border: `hsl(220, 20%, 25%)` (#333945)

### 1.4 Typography System
- [ ] Create text styles:
  - [ ] Hero Title: Lora, 48-72px, font-weight 600
  - [ ] Section Title: Lora, 36-48px, font-weight 600
  - [ ] Section Subtitle: Lora, 24-30px, font-weight 500
  - [ ] Body Large: Montserrat, 18-20px, font-weight 400
  - [ ] Body: Montserrat, 16px, font-weight 400
  - [ ] Body Small: Montserrat, 14px, font-weight 400
  - [ ] Caption: Montserrat, 12px, font-weight 400

### 1.5 Import Assets
- [ ] Download and import main images:
  - [ ] Hero image: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/9ebcb36c72b0e545a14b1e98d0f70ffa.jpg
  - [ ] About Me image: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5c74e2cd94a8640a2f2275d697827b86.jpg
  - [ ] About page image: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/3511dd402cf2200d28943d2ea37d4c3d.jpg

- [ ] Import logos:
  - [ ] Light logo: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5afba704ef397fc446b346535b0a1639.png
  - [ ] Dark logo: https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/cc4b6778972598ca9074a11d4ba01b6e.png

- [ ] Import service icons (create as components):
  - [ ] Individual therapy icon (User/Handshake)
  - [ ] Couples therapy icon (Users)
  - [ ] Anxiety/mood icon (Heart)
  - [ ] Trauma therapy icon (Brain)

### 1.6 Responsive Breakpoints
- [ ] Set up breakpoints:
  - [ ] Mobile: 320px - 767px
  - [ ] Tablet: 768px - 1023px
  - [ ] Desktop: 1024px+

## Phase 2: Master Components (3-4 hours)

### 2.1 Button Component
- [ ] Create Button master component with variants:
  - [ ] Primary (filled)
  - [ ] Secondary (outline)
  - [ ] Ghost (text only)
- [ ] Add size variants: Small, Medium, Large
- [ ] Add states: Default, Hover, Pressed, Disabled
- [ ] Add icon support (left/right)
- [ ] Add loading state

### 2.2 Card Component
- [ ] Create Card master component
- [ ] Add variants:
  - [ ] Service Card (with icon, title, description, link)
  - [ ] Feature Card (with icon, title, description)
  - [ ] Content Card (basic card with padding)
- [ ] Add hover animations (lift, shadow)

### 2.3 Section Component
- [ ] Create Section wrapper component
- [ ] Add background variants: Default, Secondary, Gradient
- [ ] Add padding variants: Small, Medium, Large
- [ ] Add max-width constraint

### 2.4 Navigation Components
- [ ] Create Header component with:
  - [ ] Logo (theme-aware)
  - [ ] Navigation links
  - [ ] Mobile menu toggle
  - [ ] Theme toggle button
- [ ] Create Mobile Menu component
- [ ] Create Footer component

### 2.5 Form Components
- [ ] Create Input component with variants
- [ ] Create Textarea component
- [ ] Create Label component
- [ ] Create form validation states

## Phase 3: Page Components (6-8 hours)

### 3.1 Home Page Components
- [ ] Hero Section:
  - [ ] Background image with overlay
  - [ ] Centered content with title, subtitle, buttons
  - [ ] Scroll indicator
  - [ ] Parallax effect on background

- [ ] Services Section:
  - [ ] 4-column grid (responsive)
  - [ ] Service cards with icons
  - [ ] Hover animations

- [ ] About Preview Section:
  - [ ] 2-column layout
  - [ ] Image with decorative elements
  - [ ] Text content with CTA

- [ ] Final CTA Section:
  - [ ] Centered content
  - [ ] Gradient background
  - [ ] Large CTA button

### 3.2 About Page Components
- [ ] Page header with title and subtitle
- [ ] Experience section (2-column)
- [ ] Philosophy section (card layout)
- [ ] Quote section with background image

### 3.3 Service Pages Components
- [ ] Service header with icon and description
- [ ] Feature grid sections
- [ ] Process timeline/steps
- [ ] CTA sections

### 3.4 Contact Page Components
- [ ] Contact form
- [ ] Contact details with icons
- [ ] Map embed placeholder

## Phase 4: Content Integration (2-3 hours)

### 4.1 Content Structure
- [ ] Create content variables/CMS structure
- [ ] Import all text content from content.json
- [ ] Set up dynamic content binding

### 4.2 Multi-language Setup (Optional)
- [ ] Set up Polish language content
- [ ] Create content variants for different languages

## Phase 5: Interactions & Animations (3-4 hours)

### 5.1 Page Transitions
- [ ] Add smooth page transitions
- [ ] Create loading states

### 5.2 Scroll Animations
- [ ] Implement scroll-triggered animations
- [ ] Add parallax effects
- [ ] Create scroll progress indicator

### 5.3 Micro-interactions
- [ ] Button hover/press animations
- [ ] Card hover effects
- [ ] Form field focus states
- [ ] Mobile menu animations

### 5.4 Theme Toggle
- [ ] Implement dark/light theme switching
- [ ] Add smooth theme transition animations

## Phase 6: Responsive Design (2-3 hours)

### 6.1 Mobile Optimization
- [ ] Test all components on mobile
- [ ] Adjust typography scales
- [ ] Optimize touch targets
- [ ] Test mobile menu functionality

### 6.2 Tablet Optimization
- [ ] Adjust grid layouts for tablet
- [ ] Test navigation on tablet
- [ ] Optimize image sizes

### 6.3 Desktop Polish
- [ ] Fine-tune desktop layouts
- [ ] Add desktop-specific hover states
- [ ] Optimize for large screens

## Phase 7: Testing & Polish (2-3 hours)

### 7.1 Cross-device Testing
- [ ] Test on various screen sizes
- [ ] Test theme switching
- [ ] Test all interactions

### 7.2 Performance Optimization
- [ ] Optimize images
- [ ] Check animation performance
- [ ] Test loading times

### 7.3 Accessibility
- [ ] Add proper alt texts
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios
- [ ] Add focus indicators

### 7.4 Final Polish
- [ ] Review all animations
- [ ] Check content accuracy
- [ ] Test all links and buttons
- [ ] Final design review

## Phase 8: Export & Handoff (1 hour)

### 8.1 Export Assets
- [ ] Export production-ready assets
- [ ] Generate design specs
- [ ] Create component documentation

### 8.2 Handoff Preparation
- [ ] Create developer handoff
- [ ] Document interactions
- [ ] Export code snippets if needed

---

## Time Estimates by Phase:
- **Phase 1**: 2-3 hours (Setup & Design System)
- **Phase 2**: 3-4 hours (Master Components)
- **Phase 3**: 6-8 hours (Page Components)
- **Phase 4**: 2-3 hours (Content Integration)
- **Phase 5**: 3-4 hours (Interactions & Animations)
- **Phase 6**: 2-3 hours (Responsive Design)
- **Phase 7**: 2-3 hours (Testing & Polish)
- **Phase 8**: 1 hour (Export & Handoff)

**Total Estimated Time: 21-29 hours**

## Priority Order:
1. Start with Phase 1 (Design System) - Foundation is crucial
2. Create Button and Card components first (most reused)
3. Build Home page first (most complex, sets the standard)
4. Use Home page components as templates for other pages
5. Add interactions last (easier to debug on static components first)

## Tips for Speed:
- Use Framer's auto-layout extensively
- Create variants early to avoid rebuilding
- Test responsive behavior as you build
- Use component instances instead of copying
- Leverage Framer's built-in animations when possible