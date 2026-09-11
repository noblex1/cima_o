// Vercel Serverless Function to handle blog submissions
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      authorName,
      authorTitle,
      authorEmail,
      articleTitle,
      category,
      tags,
      excerpt,
      articleContent,
      authorBio,
      featuredImageUrl
    } = req.body;

    // Validate required fields
    if (!authorName || !authorTitle || !authorEmail || !articleTitle || !category || !excerpt || !articleContent) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['authorName', 'authorTitle', 'authorEmail', 'articleTitle', 'category', 'excerpt', 'articleContent']
      });
    }

    // Read the current blogPosts.js file
    const blogPostsPath = path.join(process.cwd(), 'src', 'data', 'blogPosts.js');
    let fileContent = await fs.readFile(blogPostsPath, 'utf-8');

    // Extract the existing blogPosts array
    const blogPostsMatch = fileContent.match(/export const blogPosts = \[([\s\S]*?)\]/);
    if (!blogPostsMatch) {
      throw new Error('Could not parse blogPosts.js');
    }

    // Parse existing posts to get the next ID
    const existingPostsStr = blogPostsMatch[1];
    const idMatches = existingPostsStr.match(/id:\s*(\d+)/g);
    const existingIds = idMatches ? idMatches.map(match => parseInt(match.match(/\d+/)[0])) : [0];
    const nextId = Math.max(...existingIds) + 1;

    // Generate slug from title
    const slug = articleTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    // Format tags
    const tagsArray = tags 
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
      : [];

    // Calculate read time (200 words per minute)
    const wordCount = articleContent.split(/\s+/).filter(word => word.length > 0).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Get current date in YYYY-MM-DD format
    const publishDate = new Date().toISOString().split('T')[0];

    // Use default image if none provided
    const featuredImage = featuredImageUrl || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070';

    // Format the article content for HTML
    const formattedContent = articleContent
      .split('\n\n')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .map(paragraph => {
        // Check if it looks like a heading
        if (paragraph.startsWith('#')) {
          const level = paragraph.match(/^#+/)[0].length;
          const text = paragraph.replace(/^#+\s*/, '');
          return `<h${Math.min(level + 1, 6)}>${text}</h${Math.min(level + 1, 6)}>`;
        }
        // Check if already wrapped in HTML tags
        if (paragraph.match(/^<[^>]+>/)) {
          return paragraph;
        }
        // Otherwise wrap in paragraph tags
        return `<p>${paragraph}</p>`;
      })
      .join('\n    ');

    // Create the new blog post object as a string
    const newBlogPost = `  {
    id: ${nextId},
    title: '${articleTitle.replace(/'/g, "\\'")}',
    slug: '${slug}',
    author: '${authorName.replace(/'/g, "\\'")}',
    authorTitle: '${authorTitle.replace(/'/g, "\\'")}',
    publishDate: '${publishDate}',
    category: '${category}',
    tags: [${tagsArray.map(tag => `'${tag.replace(/'/g, "\\'")}'`).join(', ')}],
    excerpt: '${excerpt.replace(/'/g, "\\'").replace(/\n/g, ' ')}',
    featuredImage: '${featuredImage}',
    content: \`
    ${formattedContent}
    \`,
    readTime: ${readTime},
    authorBio: '${(authorBio || '').replace(/'/g, "\\'").replace(/\n/g, ' ')}',
    authorEmail: '${authorEmail}',
    status: 'published'
  }`;

    // Insert the new blog post at the beginning of the array
    const updatedContent = fileContent.replace(
      /export const blogPosts = \[/,
      `export const blogPosts = [\n${newBlogPost},`
    );

    // Write the updated content back to the file
    await fs.writeFile(blogPostsPath, updatedContent, 'utf-8');

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Blog post published successfully!',
      post: {
        id: nextId,
        title: articleTitle,
        slug: slug,
        url: `/blog/${slug}`
      }
    });

  } catch (error) {
    console.error('Error submitting blog post:', error);
    return res.status(500).json({ 
      error: 'Failed to publish blog post',
      details: error.message 
    });
  }
}
