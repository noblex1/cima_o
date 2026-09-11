import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  const shareUrl = window.location.href
  const shareTitle = post.title

  return (
    <div className="blog-post-page">
      {/* Hero Section */}
      <section className="post-hero">
        <div className="post-hero-image">
          <img src={post.featuredImage} alt={post.title} />
          <div className="post-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="post-hero-content">
            <Link to="/blog" className="back-link">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            <span className="post-category-badge">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta-info">
              <div className="author-section">
                <User size={20} />
                <div>
                  <strong>{post.author}</strong>
                  <span className="author-title">{post.authorTitle}</span>
                </div>
              </div>
              <div className="post-stats">
                <span>
                  <Calendar size={16} />
                  {new Date(post.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span>
                  <Clock size={16} />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="post-content">
        <div className="container">
          <div className="post-layout">
            {/* Main Content */}
            <div className="post-main">
              <div className="post-excerpt">
                <p>{post.excerpt}</p>
              </div>
              <div 
                className="post-body" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="post-tags">
                  <Tag size={18} />
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="post-share">
                <h3>
                  <Share2 size={20} />
                  Share this article
                </h3>
                <div className="share-buttons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn facebook"
                  >
                    <Facebook size={20} />
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                  >
                    <Twitter size={20} />
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="sidebar-section author-card">
                <h3>About the Author</h3>
                <div className="author-card-content">
                  <div className="author-avatar">
                    <User size={32} />
                  </div>
                  <div>
                    <h4>{post.author}</h4>
                    <p className="author-title-sidebar">{post.authorTitle}</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Categories</h3>
                <ul className="category-list">
                  <li><Link to="/blog?category=Arbitration">Arbitration</Link></li>
                  <li><Link to="/blog?category=Mediation">Mediation</Link></li>
                  <li><Link to="/blog?category=Technology">Technology</Link></li>
                  <li><Link to="/blog?category=Training">Training & Education</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="related-post-card">
                  <div className="related-post-image">
                    <img src={relatedPost.featuredImage} alt={relatedPost.title} />
                  </div>
                  <div className="related-post-content">
                    <span className="related-post-category">{relatedPost.category}</span>
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.excerpt.substring(0, 120)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="post-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Want to Contribute?</h2>
            <p>Share your expertise with the global ADR community</p>
            <Link to="/blog/submit" className="btn-cta">Submit Your Article</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
