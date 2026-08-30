# Global Arbitrator Section - Setup Guide

## ✅ What's Been Created

### 1. New Section on Home Page
- **Location:** Between "Trusted By Professionals" and "Student Success Stories"
- **Design:** Clean card-based layout with hover effects
- **Features:**
  - Professional profile cards
  - Preview text (truncated)
  - "Read More" button with arrow icon
  - Responsive design (mobile-friendly)

### 2. Individual Profile Pages
- **URL Pattern:** `/arbitrator/profile-1`, `/arbitrator/profile-2`, etc.
- **Layout:** Split screen design
  - **Left:** Profile photo + Quick info card
  - **Right:** Full biography + Education + Languages
- **Features:**
  - Sticky image sidebar
  - Full-length biography
  - Areas of expertise
  - Education details
  - Language tags
  - Back button to return home

### 3. Files Created
- `src/pages/ArbitratorProfile.jsx` - Profile page component
- `src/pages/ArbitratorProfile.css` - Profile page styling
- CSS added to `src/pages/Home.css` - Section styling

### 4. Routing Added
- Route configured in `src/App.jsx`
- Dynamic routing: `/arbitrator/:profileId`

---

## 🎨 Design Features

### Home Page Section:
- **Card hover effect:** Lifts up with shadow
- **Image zoom:** Photo scales slightly on hover
- **Button animation:** Arrow moves on hover
- **Responsive grid:** Adapts to all screen sizes

### Profile Page:
- **Split-screen layout:** Image on left, content on right
- **Sticky sidebar:** Image stays visible while scrolling
- **Professional typography:** Clear hierarchy
- **Color-coded tags:** Burgundy themed
- **Mobile optimized:** Stacks vertically on small screens

---

## 📸 Next Steps: Adding Your Arbitrator Data

### Step 1: Add Profile Images

Upload your arbitrator photos to the `assets` folder, then:

```jsx
// In src/pages/Home.jsx, replace placeholder images:
<img 
  src={arbitratorImage1}  // Import your image
  alt="Arbitrator Name"
/>
```

### Step 2: Update Arbitrator Data

Edit `src/pages/ArbitratorProfile.jsx` and update the `arbitratorsData` object:

```javascript
const arbitratorsData = {
  'david-onyema': {
    name: 'Dr. David Onyema',
    title: 'International Arbitrator & Academic',
    image: arbitratorImage1,  // Your imported image
    bio: `Full biography here...
    
    Multiple paragraphs separated by empty lines...`,
    expertise: [
      'Commercial Arbitration',
      'Investment Disputes',
      'International Law'
    ],
    education: [
      'PhD in Law - University Name',
      'LLM - University Name'
    ],
    languages: ['English', 'French', 'Spanish']
  },
  'another-arbitrator': {
    // Add more profiles...
  }
}
```

### Step 3: Add Cards to Home Page

In `src/pages/Home.jsx`, add more arbitrator cards:

```jsx
<div className="arbitrator-card">
  <div className="arbitrator-image">
    <img src={arbitratorImage1} alt="Dr. David Onyema" />
  </div>
  <div className="arbitrator-content">
    <h3>Dr. David Onyema</h3>
    <p className="arbitrator-title">International Arbitrator</p>
    <p className="arbitrator-preview">
      Brief 2-3 sentence preview about the arbitrator...
    </p>
    <Link to="/arbitrator/david-onyema" className="btn-read-more">
      Read More <ArrowRight size={18} />
    </Link>
  </div>
</div>
```

---

## 🎯 Design Principles Used

### UX Best Practices:
- ✅ Clear visual hierarchy
- ✅ Consistent spacing and alignment
- ✅ Smooth transitions and hover effects
- ✅ Mobile-first responsive design
- ✅ Accessible color contrasts
- ✅ Fast loading with optimized images

### UI Components:
- ✅ Card-based design (modern, clean)
- ✅ Split-screen layout (professional)
- ✅ Sticky sidebar (better UX)
- ✅ Button animations (engaging)
- ✅ Tag system (organized info)

---

## 📱 Responsive Breakpoints

- **Desktop (>1024px):** 2-3 cards per row, split-screen profile
- **Tablet (768-1024px):** 2 cards per row, stacked profile
- **Mobile (<768px):** 1 card per row, simplified layout

---

## 🎨 Color Scheme

Matches CIMA brand:
- **Primary:** Burgundy (`#750000`)
- **Text Dark:** `#1a1a1a`
- **Text Light:** `#666666`
- **Background:** White & Off-white
- **Accents:** Gold (`#B49A67`)

---

## 🚀 Ready to Use

The section is now live on your home page with placeholder content. Simply:

1. Add your arbitrator photos to `assets/`
2. Update the profile data
3. Replace placeholder images in cards
4. Deploy and test!

---

## 💡 Tips

- Keep preview text to 2-3 sentences (around 120 characters)
- Use high-quality, professional headshot photos
- Maintain consistent photo dimensions (portrait orientation)
- Write biographies in 3-4 paragraphs for readability
- Update monthly to feature different arbitrators

---

**Need help adding your actual arbitrator data?** Send me:
- Photos
- Names & titles
- Biographies
- Education details
- Languages
- Areas of expertise

I'll format everything perfectly! 🎯
