# 🚀 How to Post a New Blog Article (5-Minute Guide)

## ✅ Super Simple 3-Step Process

### Step 1: Open the Blog Data File
📁 **File Location:** `src/data/blogPosts.js`

### Step 2: Copy & Paste This Template

```javascript
{
  id: 4, // ⬅️ INCREMENT THIS NUMBER (next available number)
  title: 'Your Article Title Here',
  slug: 'your-article-title-here', // ⬅️ Lowercase, use hyphens
  author: 'Your Full Name',
  authorTitle: 'FCIMArb', // ⬅️ Your credentials
  publishDate: '2026-09-15', // ⬅️ YYYY-MM-DD format
  category: 'Arbitration', // ⬅️ Pick from list below
  tags: ['Tag1', 'Tag2', 'Tag3'],
  excerpt: 'Brief 1-2 sentence summary of your article',
  featuredImage: 'https://images.unsplash.com/photo-xxxxx',
  content: `
    <p>Your introduction paragraph...</p>
    
    <h2>First Section Heading</h2>
    <p>Section content...</p>
    
    <h2>Second Section</h2>
    <p>More content here...</p>
  `,
  readTime: 5 // ⬅️ Estimated minutes
}
```

### Step 3: Add a Comma and Paste After Last Post

```javascript
export const blogPosts = [
  {
    id: 1,
    title: 'Existing Post...',
    // ... existing post content
  },
  {
    id: 2,
    title: 'Another Post...',
    // ... existing post content
  },
  {
    id: 3,
    title: 'Yet Another Post...',
    // ... existing post content
  },
  // ⬇️ ADD YOUR NEW POST HERE ⬇️
  {
    id: 4, // ⬅️ YOUR NEW POST
    title: 'Your New Article Title',
    slug: 'your-new-article-title',
    // ... rest of your content
  }
]
```

---

## 📋 Quick Reference

### Available Categories
- Arbitration
- Mediation
- Technology
- Training & Education
- Case Studies
- International Law
- Practice Tips

### Making a Slug
**Title:** "The Future of AI in Arbitration"  
**Slug:** `future-of-ai-in-arbitration`

(Just lowercase + replace spaces with hyphens)

### Getting Images from Unsplash
1. Go to https://unsplash.com
2. Search: "business meeting", "legal", "arbitration"
3. Right-click image → Copy image address
4. Paste in `featuredImage`

---

## 💻 Build & Deploy

```bash
# Build the site
npm run build

# Commit changes
git add .
git commit -m "Add new blog post: Your Title"

# Push to deploy
git push origin main
```

---

## 🎯 Real Example

```javascript
{
  id: 4,
  title: 'Understanding the New York Convention',
  slug: 'understanding-new-york-convention',
  author: 'Dr. Osei Bonsu Dickson',
  authorTitle: 'FCIMArb',
  publishDate: '2026-09-20',
  category: 'International Law',
  tags: ['New York Convention', 'Enforcement', 'Treaties'],
  excerpt: 'A comprehensive guide to the most important treaty in international arbitration and its global impact.',
  featuredImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070',
  content: `
    <p>The 1958 New York Convention is the cornerstone of international arbitration, with over 170 contracting states.</p>
    
    <h2>What is the New York Convention?</h2>
    <p>Formally known as the Convention on the Recognition and Enforcement of Foreign Arbitral Awards...</p>
    
    <h2>Key Provisions</h2>
    <p>The Convention requires courts to:</p>
    <ul>
      <li>Recognize arbitration agreements</li>
      <li>Enforce arbitral awards</li>
      <li>Limit judicial intervention</li>
    </ul>
    
    <h2>Practical Impact</h2>
    <p>For businesses engaged in international trade, the Convention provides certainty...</p>
  `,
  readTime: 6
}
```

---

## ✨ HTML Cheat Sheet for Content

```html
<!-- Paragraph -->
<p>Your text here.</p>

<!-- Main Heading -->
<h2>Section Title</h2>

<!-- Subheading -->
<h3>Subsection</h3>

<!-- Bullet List -->
<ul>
  <li>Point one</li>
  <li>Point two</li>
</ul>

<!-- Numbered List -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Bold -->
<strong>Important text</strong>

<!-- Quote -->
<blockquote>Notable quote here</blockquote>

<!-- Link -->
<a href="https://example.com" target="_blank">Link text</a>
```

---

## 🎉 That's It!

Your blog post is now live on:
- **Blog listing:** `/blog`
- **Individual post:** `/blog/your-article-title-here`

Visitors can also share it on social media automatically!

---

## 📧 Accepting Submissions

Share this link: **yourdomain.com/blog/submit**

People can submit articles through the Tally form, then you:
1. Review the submission email
2. Copy content into the template above
3. Add to `blogPosts.js`
4. Build & deploy!
