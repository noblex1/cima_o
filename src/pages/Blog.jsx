import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, Tag, ArrowRight, Edit3 } from 'lucide-react'
import { blogPosts, blogCategories } from '../data/blogPosts'
import './Blog.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter posts by category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Get featured post (most recent)
  const featuredPost = blogPosts[0]
  const regularPosts = filteredPosts.slice(selectedCategory === 'All Posts' && searchQuery === '' ? 1 : 0)

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1>CIMA Blog</h1>
            <p>Insights, thought leadership, and practical guidance on arbitration, mediation, and alternative dispute resolution from CIMA experts and practitioners worldwide</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="category-filters">
              {blogCategories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post (only show when no filters applied) */}
      {selectedCategory === 'All Posts' && searchQuery === '' && featuredPost && (
        <section className="featured-post-section">
          <div className="container">
            <div className="section-label">Featured Article</div>
            <Link to={`/blog/${featuredPost.slug}`} className="featured-post">
              <div className="featured-post-image">
                <img src={featuredPost.featuredImage} alt={featuredPost.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-post-content">
                <div className="post-meta">
                  <span className="post-category">{featuredPost.category}</span>
                  <span className="post-date">
                    <Calendar size={14} />
                    {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="post-footer">
                  <div className="author-info">
                    <User size={18} />
                    <span>{featuredPost.author}, {featuredPost.authorTitle}</span>
                  </div>
                  <div className="read-time">
                    <Clock size={16} />
                    {featuredPost.readTime} min read
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          {regularPosts.length > 0 ? (
            <div className="blog-posts-grid">
              {regularPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <Link to={`/blog/${post.slug}`} className="blog-card-image">
                    <img src={post.featuredImage} alt={post.title} />
                    <span className="blog-card-category">{post.category}</span>
                  </Link>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-date">
                        <Calendar size={14} />
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="blog-card-read-time">
                        <Clock size={14} />
                        {post.readTime} min
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3>{post.title}</h3>
                    </Link>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="read-more-link">
                        Read more <ArrowRight size={16} />
                      </Link>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="blog-card-tags">
                        <Tag size={14} />
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Blog CTA */}
      <section className="submit-blog-cta">
        <div className="container">
          <div className="cta-content">
            <Edit3 size={48} className="cta-icon" />
            <h2>Share Your Expertise</h2>
            <p>Contribute to the CIMA Blog and share your insights with the global ADR community. We welcome thought leadership articles, case studies, and practical guidance from practitioners worldwide.</p>
            <Link to="/blog/submit" className="btn-submit-blog">
              Submit a Blog Post
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
