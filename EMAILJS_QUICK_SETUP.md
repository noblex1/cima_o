# ⚡ EmailJS Quick Setup (5 Minutes)

## 1. Sign Up
Go to: **https://www.emailjs.com/** → Sign Up Free

## 2. Connect Email
**Email Services** → **Add New Service** → Choose **Gmail** → Connect your Google account

Copy your **Service ID** (looks like: `service_abc123`)

## 3. Create Template
**Email Templates** → **Create New Template**

**Template Name:** Blog Submission

**Subject:** 
```
New Blog Submission: {{article_title}}
```

**Body:**
```
NEW BLOG SUBMISSION
===================

Title: {{article_title}}
Author: {{author_name}} ({{author_title}})
Email: {{author_email}}
Category: {{category}}

EXCERPT:
{{excerpt}}

FULL ARTICLE:
{{article_content}}

---
Word Count: {{word_count}}
Submitted: {{submission_date}}
```

Click **Save** and copy your **Template ID** (looks like: `template_xyz789`)

## 4. Get Public Key
**Account** → **General** → Copy your **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)

## 5. Update Code
Open `src/pages/SubmitBlog.jsx` and replace:

```javascript
await emailjs.send(
  'service_abc123',      // ← Your Service ID
  'template_xyz789',     // ← Your Template ID
  templateParams,
  'aBcDeFgHiJkLmNoPqR'  // ← Your Public Key
)
```

## 6. Deploy
```bash
git add .
git commit -m "Configure EmailJS"
git push origin main
```

## 7. Test
Visit: **www.thecima.org/blog/submit** → Submit test → Check your email!

---

## ✅ Done!
Now you'll get an email every time someone submits a blog post! 📧

See `EMAILJS_SETUP_GUIDE.md` for detailed instructions.
