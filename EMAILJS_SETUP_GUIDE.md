# 📧 EmailJS Setup Guide for Blog Submissions

This guide will help you set up EmailJS so blog submissions are sent directly to your email.

---

## Why EmailJS?

✅ **No backend needed** - Works with static sites  
✅ **Free tier available** - 200 emails/month free  
✅ **Easy setup** - 5-minute configuration  
✅ **Email notifications** - Get blog submissions in your inbox  
✅ **Reliable** - No server maintenance required  

---

## Step 1: Create EmailJS Account

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Sign up with your email (or Google/GitHub)
4. Verify your email address

---

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for quick setup)
   - **Outlook**
   - **Yahoo**
   - Or any SMTP service

4. For **Gmail**:
   - Click on Gmail
   - Click **"Connect Account"**
   - Sign in with your Google account
   - Allow EmailJS permissions
   
5. Copy your **Service ID** (e.g., `service_abc123`)

---

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template:

### Template Name:
```
Blog Submission Notification
```

### Template Content:

#### Subject:
```
New Blog Submission: {{article_title}}
```

#### Body:
```
New Blog Submission Received

==================================================
SUBMISSION DETAILS
==================================================

Article Title: {{article_title}}
Category: {{category}}
Tags: {{tags}}

Author Information:
- Name: {{author_name}}
- Title/Credentials: {{author_title}}
- Email: {{author_email}}
- Bio: {{author_bio}}

==================================================
ARTICLE EXCERPT
==================================================

{{excerpt}}

==================================================
FULL ARTICLE CONTENT
==================================================

{{article_content}}

==================================================
SUBMISSION INFO
==================================================

Word Count: {{word_count}}
Submitted: {{submission_date}}

==================================================

Reply to author: {{reply_to}}

---
This submission was sent via CIMA Blog Submission Form
```

4. Click **"Save"**
5. Copy your **Template ID** (e.g., `template_xyz789`)

---

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `aBcDeFgHiJkLmNoPqR`)
3. Copy it

---

## Step 5: Update Your Website Code

Open `src/pages/SubmitBlog.jsx` and replace these three values:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',  // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID', // ← Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'   // ← Replace with your Public Key
)
```

**Example:**
```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'aBcDeFgHiJkLmNoPqR'
)
```

---

## Step 6: Test It

1. Save the file
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Configure EmailJS for blog submissions"
   git push origin main
   ```

3. Wait for Vercel to deploy (1-2 minutes)

4. Go to: **https://www.thecima.org/blog/submit**

5. Fill out a test submission

6. Check your email inbox - you should receive the blog submission!

---

## Step 7: Set Up Email Filter (Optional but Recommended)

In your Gmail/email:

1. Create a filter for emails from EmailJS
2. Add label: **"Blog Submissions"**
3. Mark as important
4. Enable notifications

This way you'll never miss a blog submission!

---

## How It Works

```
User submits blog form
        ↓
EmailJS sends email to you
        ↓
You receive full submission in email
        ↓
Review and approve
        ↓
Manually add to blogPosts.js
        ↓
Commit and deploy
        ↓
Blog appears on website
```

---

## Email You'll Receive

When someone submits a blog, you'll get an email like this:

```
From: EmailJS <noreply@emailjs.com>
Subject: New Blog Submission: The Future of AI in Arbitration

New Blog Submission Received
==================================================
Article Title: The Future of AI in Arbitration
Category: Technology
Author: John Doe, FCIMArb
Email: john@example.com
==================================================
[Full article content here]
==================================================
```

Then you can:
1. Read the article
2. Contact the author if edits needed
3. Add to `src/data/blogPosts.js` when approved
4. Deploy

---

## Troubleshooting

### Not receiving emails?

1. **Check spam folder** - EmailJS emails sometimes go to spam
2. **Verify email service** - Make sure Gmail/Outlook is connected
3. **Check template** - Ensure template is saved and active
4. **Test template** - Use EmailJS dashboard to send test email
5. **Check quota** - Free plan has 200 emails/month limit

### Error when submitting?

1. **Check browser console** - Look for error messages
2. **Verify IDs** - Make sure Service ID, Template ID, and Public Key are correct
3. **Check EmailJS dashboard** - See if requests are being received
4. **Network issues** - Check if EmailJS.com is accessible

---

## EmailJS Dashboard

Monitor your submissions at:
**https://dashboard.emailjs.com/**

You can see:
- ✅ Number of emails sent
- ✅ Success/failure rates
- ✅ Remaining quota
- ✅ Email logs

---

## Cost

**Free Plan:**
- 200 emails/month
- Perfect for blog submissions
- No credit card required

**If you need more:**
- $7/month for 500 emails
- $15/month for 1,000 emails

For a blog submission system, the free plan should be plenty!

---

## Alternative: Using Your Own SMTP

If you prefer to use your own email server:

1. In EmailJS, select **"SMTP"** service
2. Enter your SMTP details:
   - Host: smtp.yourdomain.com
   - Port: 587
   - Username: your email
   - Password: your password
3. Follow the same steps above

---

## Security Note

The Public Key is meant to be public (it's in your frontend code). EmailJS uses:
- ✅ Domain whitelist (only your domain can use it)
- ✅ Rate limiting (prevents abuse)
- ✅ CAPTCHA option (optional extra security)

To add domain restriction:
1. Go to **Account** → **Security**
2. Add your domain: `thecima.org`
3. Only requests from your domain will work

---

## Summary

**5 Minutes Setup:**
1. ✅ Create EmailJS account
2. ✅ Connect Gmail
3. ✅ Create template
4. ✅ Copy 3 IDs
5. ✅ Update code
6. ✅ Test!

**Then you'll get:**
- 📧 Email for every blog submission
- 📝 Full article content in email
- ✅ Easy review process
- 🚀 Simple manual approval

No more checking dev tools! 🎉

---

## Need Help?

If you get stuck:
1. Check EmailJS docs: https://www.emailjs.com/docs/
2. Test in EmailJS dashboard first
3. Check browser console for errors
4. Verify all IDs are correct

Let me know if you need assistance with any step!
