# CIMA Blog Management Guide

## 📝 How to Add/Edit Blog Posts (Super Simple!)

### Option 1: Edit the JSON File Directly (Recommended)
**Location:** `src/data/blogPosts.js`

#### Step 1: Open the File
Navigate to `src/data/blogPosts.js`

#### Step 2: Add Your Blog Post
Copy this template and add it to the `blogPosts` array:

```javascript
{
  id: 4, // Increment this number for each new post
  title: 'Your Blog Title Here',
  slug: 'your-blog-title-here', // URL-friendly version (lowercase, hyphens)
  author: 'Your Name',
  authorTitle: 'FCIMArb', // Your credentials
  publishDate: '2026-09-10', // Format: YYYY-MM-DD
  category: 'Arbitration', // Choose: Arbitration, Mediation, Technology, Training & Education, etc.
  tags: ['Tag1', 'Tag2', 'Tag3'], // Relevant keywords
  excerpt: 'A brief 1-2 sentence summary that appears in listings',
  featuredImage: 'https://images.unsplash.com/photo-xxxxx', // Image URL
  content: `
    <p>Your first paragraph here...</p>
    
    <h2>Section Heading</h2>
    <p>Section content...</p>
    
    <h2>Another Section</h2>
    <p>More content...</p>
    
    <h3>Subsection</h3>
    <p>Details here...</p>
  `,
  readTime: 5 // Estimated minutes to read
}
```

#### Step 3: Save and Build
```bash
npm run build
```

#### Step 4: Deploy
Your new blog post is live!

---

## 📋 Complete Example

```javascript
{
  id: 4,
  title: 'The Role of Ethics in International Arbitration',
  slug: 'ethics-in-international-arbitration',
  author: 'Dr. Osei Bonsu Dickson',
  authorTitle: 'FCIMArb',
  publishDate: '2026-09-15',
  category: 'Arbitration',
  tags: ['Ethics', 'Professional Standards', 'Best Practices'],
  excerpt: 'Examining the ethical obligations of arbitrators and maintaining integrity in international dispute resolution.',
  featuredImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070',
  content: `
    <p>Ethics form the foundation of trust in international arbitration. As arbitrators, we bear the responsibility of maintaining impartiality, independence, and integrity throughout proceedings.</p>
    
    <h2>Core Ethical Principles</h2>
    <p>The IBA Guidelines on Conflicts of Interest in International Arbitration provide a framework for ethical conduct...</p>
    
    <h2>Independence and Impartiality</h2>
    <p>Arbitrators must disclose any relationships or circumstances that might affect their ability to render an impartial decision...</p>
    
    <h2>Confidentiality Obligations</h2>
    <p>Maintaining confidentiality is not just a contractual obligation but an ethical imperative...</p>
    
    <h3>Practical Guidelines</h3>
    <p>Here are key practices every arbitrator should follow:</p>
    <ul>
      <li>Conduct thorough conflict checks</li>
      <li>Maintain detailed records</li>
      <li>Communicate transparently with parties</li>
    </ul>
  `,
  readTime: 7
}
```

---

## 🎨 HTML Formatting Guide for Blog Content

### Paragraphs
```html
<p>Your paragraph text here.</p>
```

### Headings
```html
<h2>Main Section Heading</h2>
<h3>Subsection Heading</h3>
```

### Lists
```html
<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>

<ol>
  <li>Numbered item 1</li>
  <li>Numbered item 2</li>
</ol>
```

### Bold Text
```html
<strong>Important text</strong>
```

### Italic Text
```html
<em>Emphasized text</em>
```

### Blockquote
```html
<blockquote>
  "A notable quote or important statement."
</blockquote>
```

### Links
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link text</a>
```

---

## 🖼️ Finding Featured Images

### Option 1: Unsplash (Free, High-Quality)
1. Go to https://unsplash.com
2. Search for relevant topics (e.g., "business meeting", "law", "handshake")
3. Right-click on image → Copy image address
4. Paste the URL in `featuredImage` field

**Example URLs:**
- Business: `https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070`
- Legal: `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070`
- Technology: `https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070`

### Option 2: Use Your Own Images
1. Upload image to your website's assets folder
2. Use relative path: `/assets/blog-image.jpg`

---

## 📊 Available Categories

Choose from:
- **Arbitration**
- **Mediation**
- **Technology**
- **Training & Education**
- **Case Studies**
- **International Law**
- **Practice Tips**

*(You can add new categories by editing `blogCategories` array)*

---

## ⚡ Quick Tips

### Creating SEO-Friendly Slugs
Convert your title to lowercase, replace spaces with hyphens:
- Title: "The Future of AI in Arbitration"
- Slug: "future-of-ai-in-arbitration"

### Writing Good Excerpts
- Keep it to 1-2 sentences
- Make it compelling and informative
- Summarize the main point of the article

### Estimating Read Time
- Count total words ÷ 200 = read time in minutes
- Round to nearest whole number

### Choosing Tags
- Use 3-5 relevant keywords
- Think about what readers might search for
- Mix broad topics with specific ones

---

## 🔄 User Submissions via Tally Form

When someone submits a blog post through `/blog/submit`:

1. **You receive an email notification** with their submission
2. **Review the content** for quality and appropriateness
3. **Copy the content** and format it following the template above
4. **Add it to** `src/data/blogPosts.js`
5. **Build and deploy** the website

The Tally form collects:
- Author name & credentials
- Article title
- Category
- Full article text
- Author bio

---

## 🚀 Publishing Workflow

```bash
# 1. Edit blogPosts.js and add your new post
# 2. Test locally (optional)
npm run dev

# 3. Build for production
npm run build

# 4. Commit changes
git add .
git commit -m "Add new blog post: [Title]"

# 5. Push to deploy
git push origin main
```

---

## 🎯 Pro Tips for Better Blog Posts

### Structure
- Start with a compelling introduction
- Use clear section headings (H2)
- Break up long paragraphs
- End with a conclusion or call-to-action

### Content
- Write in a professional but accessible tone
- Include practical examples
- Cite sources when appropriate
- Add value for your readers

### SEO
- Use descriptive titles
- Include relevant keywords naturally
- Write informative excerpts
- Choose appropriate categories and tags

---

## ❓ Need Help?

If you encounter any issues:
1. Check the existing blog posts in `blogPosts.js` for reference
2. Ensure all required fields are filled
3. Verify HTML formatting is correct
4. Make sure the `id` is unique
5. Test the build command before deploying

---

## 📧 Contact for Blog Submissions

Share this link with potential contributors:
**https://yourdomain.com/blog/submit**

They can submit articles directly through the form, and you'll review and publish them.
