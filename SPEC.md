# Ayurvedic Medicine E-Commerce Store Specification

## 1. Project Overview

**Project Name:** AyushVeda - Premium Ayurvedic Medicines  
**Type:** Headless Shopify E-Commerce Frontend  
**Core Functionality:** A premium, conversion-focused Ayurvedic medicine online store with Shopify backend integration, featuring product browsing, cart management, and checkout via Shopify.  
**Target Users:** Health-conscious individuals seeking natural/Ayurvedic remedies, age 25-55

---

## 2. UI/UX Specification

### Layout Structure

**Header (Sticky)**
- Logo (left): "AyushVeda" with lotus icon
- Navigation (center): Home, Shop, About, Blog, Contact
- Actions (right): Search icon, Cart icon with count badge, WhatsApp button

**Footer**
- 4-column layout: About, Quick Links, Categories, Contact
- Newsletter signup
- Certifications display (GMP, AYUSH)
- Disclaimer text

**Responsive Breakpoints**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette**
- Primary: `#2D5A27` (Deep Forest Green - nature/healing)
- Secondary: `#D4A574` (Warm Sand - earthy/premium)
- Accent: `#8B4513` (Saddle Brown - Ayurvedic authenticity)
- Background: `#FDFBF7` (Warm White)
- Text Primary: `#1A1A1A` (Near Black)
- Text Secondary: `#5A5A5A` (Gray)
- Success: `#22C55E`
- Error: `#EF4444`

**Typography**
- Headings: "Playfair Display" (serif, premium feel)
- Body: "DM Sans" (clean, readable)
- Font Sizes:
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 28px (mobile)
  - H3: 24px (desktop), 20px (mobile)
  - Body: 16px
  - Small: 14px

**Spacing System**
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px

**Visual Effects**
- Card shadows: `0 4px 20px rgba(0,0,0,0.08)`
- Hover transitions: 300ms ease
- Button hover: scale(1.02) + shadow increase
- Image hover: subtle zoom (scale 1.05)
- Smooth scroll behavior

### Components

**Buttons**
- Primary: Green background (#2D5A27), white text, rounded-lg
- Secondary: Transparent with border, green text
- States: hover (darken 10%), active (scale 0.98), disabled (opacity 0.5)

**Product Card**
- Image container with aspect-ratio 4:3
- Category tag (top-left)
- Wishlist button (top-right)
- Product name, rating stars, price
- Quick add button on hover

**Form Inputs**
- Border: 1px solid #E5E5E5
- Focus: 2px green outline
- Rounded-lg, padding 12px 16px

---

## 3. Functionality Specification

### Core Features

**Homepage**
- Hero banner with CTA button (background image with overlay)
- Featured products carousel (6 products from API)
- Category cards (4 categories: Immunity, Digestion, Skin Care, Stress Relief)
- Benefits section (3-4 key benefits with icons)
- Certifications section (GMP, AYUSH, ISO)
- Testimonials slider
- Newsletter signup
- FAQ accordion

**Shop Page**
- Product grid (fetched from Shopify)
- Sidebar filters: Category, Price range
- Sort options: Featured, Price low-high, Price high-low, Newest
- Pagination or infinite scroll
- Search functionality

**Product Detail Page**
- Image gallery with thumbnails
- Product info: Name, price, variant selector
- Ingredients list (expandable)
- Benefits bullet points
- How to use section
- Precautions/Warnings
- Customer reviews with rating
- Related products
- Add to cart with quantity selector

**Cart Page**
- Line items with image, name, quantity selector, price
- Remove item button
- Subtotal display
- Shipping estimate
- Proceed to Shopify Checkout button
- Continue shopping link

**About Page**
- Brand story with images
- Ayurveda philosophy section
- Manufacturing process
- Team/Experts section

**Blog Section**
- Blog listing page with cards
- Individual blog posts
- Categories: Health Tips, Ayurveda Guide, Product Info

### User Interactions
- Add to cart: Show mini cart drawer
- Quantity changes: Update cart immediately
- Checkout: Redirect to Shopify hosted checkout
- WhatsApp: Open wa.me link in new tab

### Data Handling
- Shopify Storefront API for products/collections
- Local state for cart (persisted to localStorage)
- Checkout redirect to Shopify

### Edge Cases
- API loading states: Skeleton loaders
- API errors: Error message with retry button
- Empty cart: Empty state with CTA to shop
- Product not found: 404 page
- No products in category: "No products found" message

---

## 4. SEO Requirements

- Dynamic meta titles/descriptions per page
- Product schema (JSON-LD)
- Open Graph tags for social sharing
- Fast page load (Next.js Image optimization)
- Semantic HTML structure
- Sitemap generation
- robots.txt

---

## 5. Compliance

**Required Disclaimers**
- "This product is not intended to diagnose, treat, cure or prevent any disease."
- Individual results may vary
- Consult healthcare provider for medical conditions

**Certifications Display**
- GMP (Good Manufacturing Practice)
- AYUSH Ministry Certification
- ISO 9001
- FSSAI

---

## 6. Technical Structure

```
/src
  /app
    /layout.tsx
    /page.tsx (Homepage)
    /shop/page.tsx
    /product/[handle]/page.tsx
    /cart/page.tsx
    /about/page.tsx
    /blog/page.tsx
    /blog/[slug]/page.tsx
  /components
    /layout (Header, Footer)
    /ui (Button, Card, Input)
    /product (ProductCard, ProductGrid)
    /cart (CartDrawer, CartItem)
  /lib
    /shopify.ts (API client)
  /hooks
    /useCart.ts
  /types
    /index.ts
```

---

## 7. Acceptance Criteria

1. ✅ Homepage loads with hero, featured products, categories, testimonials
2. ✅ Products fetch from Shopify API (or mock data)
3. ✅ Shop page displays products with filters
4. ✅ Product detail page shows all product info
5. ✅ Cart functionality works (add, remove, update quantity)
6. ✅ Checkout redirects to Shopify
7. ✅ Mobile responsive on all pages
8. ✅ Sticky header with cart count
9. ✅ WhatsApp chat button visible
10. ✅ All disclaimers and certifications displayed
11. ✅ SEO meta tags present
12. ✅ Clean, premium UI matching reference quality
