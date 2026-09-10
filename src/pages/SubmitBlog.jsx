import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Check, Edit3, ArrowLeft, Send, User, Mail, BookOpen, Image as ImageIcon, X, Upload } from 'lucide-react'
import './SubmitBlog.css'

const SubmitBlog = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorTitle: '',
    authorEmail: '',
    articleTitle: '',
    category: 'Arbitration',
    tags: '',
    excerpt: '',
    articleContent: '',
    authorBio: '',
    featuredImage: null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPG, PNG, etc.)')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      setFormData({
        ...formData,
        featuredImage: file
      })

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData({
      ...formData,
      featuredImage: null
    })
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Handle image upload if present
      let featuredImageUrl = null
      if (formData.featuredImage) {
        // For now, use the preview - in production you'd upload to cloud storage
        featuredImageUrl = imagePreview
      }

      // Prepare submission data
      const submissionData = {
        authorName: formData.authorName,
        authorTitle: formData.authorTitle,
        authorEmail: formData.authorEmail,
        articleTitle: formData.articleTitle,
        category: formData.category,
        tags: formData.tags,
        excerpt: formData.excerpt,
        articleContent: formData.articleContent,
        authorBio: formData.authorBio,
        featuredImageUrl: featuredImageUrl
      }

      // Submit to API
      const response = await fetch('/api/submit-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            authorName: '',
            authorTitle: '',
            authorEmail: '',
            articleTitle: '',
            category: 'Arbitration',
            tags: '',
            excerpt: '',
            articleContent: '',
            authorBio: '',
            featuredImage: null
          })
          setImagePreview(null)
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error(result.error || 'Failed to submit blog post')
      }
    } catch (error) {
      console.error('Error submitting blog:', error)
      alert('Failed to submit your blog post. Please try again or contact support.')
      setIsSubmitting(false)
    }
  }

  const guidelines = [
    {
      icon: <FileText size={24} />,
      title: 'Original Content',
      description: 'Submissions must be original, unpublished work written specifically for the CIMA Blog'
    },
    {
      icon: <Edit3 size={24} />,
      title: 'Word Count',
      description: 'Articles should be between 1,000-2,500 words, providing substantive analysis and practical insights'
    },
    {
      icon: <Check size={24} />,
      title: 'Professional Standard',
      description: 'Content should be well-researched, properly cited, and maintain professional academic or practitioner standards'
    }
  ]

  return (
    <div className="submit-blog-page">
      {/* Hero Section */}
      <section className="submit-blog-hero">
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <h1>Submit a Blog Post</h1>
          <p>Share your expertise with the global ADR community. We welcome thought leadership, case studies, practice insights, and educational content from arbitrators, mediators, lawyers, academics, and ADR professionals worldwide.</p>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="submission-guidelines">
        <div className="container">
          <h2>Submission Guidelines</h2>
          <div className="guidelines-grid">
            {guidelines.map((guideline, index) => (
              <div key={index} className="guideline-card">
                <div className="guideline-icon">{guideline.icon}</div>
                <h3>{guideline.title}</h3>
                <p>{guideline.description}</p>
              </div>
            ))}
          </div>

          <div className="additional-guidelines">
            <h3>What We're Looking For</h3>
            <ul>
              <li><strong>Thought Leadership:</strong> Analysis of emerging trends in arbitration, mediation, and ADR</li>
              <li><strong>Case Studies:</strong> Lessons learned from significant disputes (appropriately anonymized)</li>
              <li><strong>Practical Guidance:</strong> Tips, best practices, and procedural insights for practitioners</li>
              <li><strong>Technology & Innovation:</strong> How technology is transforming dispute resolution</li>
              <li><strong>Jurisdiction Spotlights:</strong> Updates on arbitration laws and practice in specific countries</li>
              <li><strong>Training & Education:</strong> Professional development insights and educational resources</li>
            </ul>

            <h3>Publishing Process</h3>
            <p>All blog posts submitted through this form are published immediately and will appear on the CIMA blog within seconds. Please ensure your article meets our quality standards before submitting. All posts include full author attribution and biographical information.</p>

            <h3>Rights & Attribution</h3>
            <p>By submitting, you grant CIMA non-exclusive rights to publish your article on our website and in promotional materials. You retain copyright and may republish elsewhere after publication on the CIMA blog. All published articles include full author attribution and biographical information.</p>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="submission-form-section">
        <div className="container">
          <div className="form-intro">
            <h2>Submit Your Article</h2>
            <p>Share your expertise with the global ADR community. Fill out the form below to submit your blog post for review.</p>
          </div>

          {submitSuccess && (
            <div className="success-message">
              <Check size={48} />
              <h3>Blog Post Published!</h3>
              <p>Your article has been successfully published and is now live on the CIMA blog. Thank you for sharing your expertise!</p>
              <Link to="/blog" className="btn-view-blog">View Blog</Link>
            </div>
          )}

          <div className="blog-form-container">
            <form onSubmit={handleSubmit} className="blog-submission-form">
              {/* Author Information */}
              <div className="form-section">
                <h3 className="section-title">
                  <User size={20} />
                  Author Information
                </h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="authorName">Full Name *</label>
                    <input
                      type="text"
                      id="authorName"
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Dr. Osei Bonsu Dickson"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="authorTitle">Professional Title/Credentials *</label>
                    <input
                      type="text"
                      id="authorTitle"
                      name="authorTitle"
                      value={formData.authorTitle}
                      onChange={handleChange}
                      required
                      placeholder="e.g., FCIMArb, PhD, Esq."
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="authorEmail">Email Address *</label>
                  <input
                    type="email"
                    id="authorEmail"
                    name="authorEmail"
                    value={formData.authorEmail}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                  <small className="form-help">We'll use this to contact you about your submission</small>
                </div>

                <div className="form-group">
                  <label htmlFor="authorBio">Author Bio (Optional)</label>
                  <textarea
                    id="authorBio"
                    name="authorBio"
                    value={formData.authorBio}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Brief professional biography (2-3 sentences)"
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>

              {/* Article Details */}
              <div className="form-section">
                <h3 className="section-title">
                  <BookOpen size={20} />
                  Article Details
                </h3>

                <div className="form-group">
                  <label htmlFor="articleTitle">Article Title *</label>
                  <input
                    type="text"
                    id="articleTitle"
                    name="articleTitle"
                    value={formData.articleTitle}
                    onChange={handleChange}
                    required
                    placeholder="e.g., The Future of AI in International Arbitration"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="Arbitration">Arbitration</option>
                      <option value="Mediation">Mediation</option>
                      <option value="Technology">Technology</option>
                      <option value="Training & Education">Training & Education</option>
                      <option value="Case Studies">Case Studies</option>
                      <option value="International Law">International Law</option>
                      <option value="Practice Tips">Practice Tips</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tags">Keywords/Tags</label>
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      placeholder="e.g., AI, Technology, Innovation (comma-separated)"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="excerpt">Article Summary/Excerpt * (150-250 words)</label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Write a compelling summary of your article that will appear in blog listings"
                    className="form-textarea"
                  ></textarea>
                  <small className="form-help">Character count: {formData.excerpt.length}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="featuredImage">Featured Image</label>
                  {!imagePreview ? (
                    <div className="image-upload-area">
                      <input
                        type="file"
                        id="featuredImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="image-input-hidden"
                      />
                      <label htmlFor="featuredImage" className="image-upload-label">
                        <Upload size={48} />
                        <h4>Click to upload featured image</h4>
                        <p>JPG, PNG, GIF up to 5MB</p>
                        <p className="image-help">Recommended size: 1200x630px</p>
                      </label>
                    </div>
                  ) : (
                    <div className="image-preview-container">
                      <img src={imagePreview} alt="Preview" className="image-preview" />
                      <button type="button" onClick={removeImage} className="btn-remove-image">
                        <X size={20} />
                        Remove Image
                      </button>
                    </div>
                  )}
                  <small className="form-help">Optional: Upload a high-quality image for your article. If not provided, we'll use a default image.</small>
                </div>
              </div>

              {/* Article Content */}
              <div className="form-section">
                <h3 className="section-title">
                  <Edit3 size={20} />
                  Full Article Content
                </h3>

                <div className="form-group">
                  <label htmlFor="articleContent">Your Article * (1,000-2,500 words)</label>
                  <textarea
                    id="articleContent"
                    name="articleContent"
                    value={formData.articleContent}
                    onChange={handleChange}
                    required
                    rows="20"
                    placeholder="Write or paste your full article here. You can use plain text or basic HTML formatting..."
                    className="form-textarea article-content"
                  ></textarea>
                  <small className="form-help">
                    Word count: {formData.articleContent.split(/\s+/).filter(word => word.length > 0).length} | 
                    Estimated read time: {Math.ceil(formData.articleContent.split(/\s+/).filter(word => word.length > 0).length / 200)} min
                  </small>
                </div>

                <div className="formatting-tips">
                  <strong>Formatting Tips:</strong>
                  <ul>
                    <li>Use clear section headings</li>
                    <li>Break content into readable paragraphs</li>
                    <li>Include examples where appropriate</li>
                    <li>Cite sources when referencing others' work</li>
                  </ul>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-submit-article"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Article for Review
                    </>
                  )}
                </button>
                <p className="submit-note">
                  By submitting, you agree to our editorial guidelines and grant CIMA non-exclusive rights to publish your article.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="submit-contact">
        <div className="container">
          <div className="contact-box">
            <h3>Questions About Submissions?</h3>
            <p>If you have questions about the submission process or would like to discuss a potential article idea, please contact our editorial team.</p>
            <Link to="/contact" className="btn-contact">Contact Editorial Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubmitBlog
