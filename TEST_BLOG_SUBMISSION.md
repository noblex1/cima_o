# 🧪 How to Test the Blog Submission System

## Before You Deploy

### 1. Local Testing (Optional)

```bash
# Install dependencies if you haven't
npm install

# Run the development server
npm run dev
```

Then go to: `http://localhost:5173/blog/submit`

Fill out the form and submit to test locally.

---

## After You Deploy to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add automated blog submission system"
git push origin main
```

### Step 2: Vercel Deploys Automatically
Wait for Vercel to build and deploy (usually 1-2 minutes)

### Step 3: Test the Live System

1. Go to: **https://www.thecima.org/blog/submit**

2. Fill out a test blog post:
   - **Name:** Test Author
   - **Title:** Test Article
   - **Article Title:** My First Test Blog Post
   - **Category:** Arbitration
   - **Excerpt:** This is a test blog post to verify the system works
   - **Content:** Write a few paragraphs of test content here...

3. Click **"Submit Article for Review"**

4. You should see: **"Blog Post Published!"**

5. Click **"View Blog"** or go to `/blog`

6. Your test blog should appear at the top!

---

## ✅ What to Check

After submitting a test blog, verify:

- [ ] Blog appears on `/blog` page
- [ ] Clicking the blog opens the full article
- [ ] Author name and credentials are displayed
- [ ] Category badge shows correctly
- [ ] Read time is calculated
- [ ] Featured image appears (or default if none uploaded)
- [ ] URL is clean: `/blog/my-first-test-blog-post`

---

## 🐛 Troubleshooting

### If the form submission fails:

**Check 1: API Route Exists**
- Verify `api/submit-blog.js` exists in your repository
- Check Vercel deployment logs

**Check 2: File Permissions**
- Vercel serverless functions need write access
- The function modifies `src/data/blogPosts.js`

**Check 3: Browser Console**
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab to see API response

### If blog doesn't appear:

**Check 1: Data File Updated**
- Look at `src/data/blogPosts.js` in your repository
- The new blog should be added to the array

**Check 2: Cache Issue**
- Clear your browser cache
- Try in incognito/private mode
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Check 3: Build Succeeded**
- Check Vercel dashboard for build errors
- Ensure no syntax errors in `blogPosts.js`

---

## 🔧 Vercel Configuration

Make sure these files are correct:

### `vercel.json`
Should include API routes configuration (already done ✅)

### `package.json`
Should have build script (already configured ✅)

---

## 📊 Test Different Scenarios

### Test 1: Basic Submission
- Fill all required fields
- Submit
- ✅ Should publish immediately

### Test 2: With Image Upload
- Fill required fields
- Upload a featured image (JPG/PNG)
- Submit
- ✅ Should show uploaded image

### Test 3: Long Article
- Write 2000+ words
- Submit
- ✅ Read time should calculate correctly

### Test 4: Special Characters in Title
- Title: "The Future of AI & Arbitration: What's Next?"
- Submit
- ✅ Should create valid URL slug

### Test 5: Multiple Tags
- Tags: "AI, Technology, Innovation, Future"
- Submit
- ✅ Should show all tags on blog post

---

## 🎯 Success Criteria

The system is working correctly if:

1. ✅ Form submits without errors
2. ✅ Success message appears
3. ✅ Blog appears on `/blog` page within seconds
4. ✅ Individual blog post page loads correctly
5. ✅ All metadata (author, date, category, tags) displays properly
6. ✅ Content formatting looks good
7. ✅ Images load correctly

---

## 🚀 Ready to Go Live?

Once testing passes, you can:

1. **Delete test blogs** (manually from `blogPosts.js`)
2. **Share the submission link** with real contributors
3. **Monitor submissions** by checking `/blog` regularly

---

## 📧 Production Link

Share this with contributors:
**https://www.thecima.org/blog/submit**

---

That's it! Your blog system is ready to use. 🎉
