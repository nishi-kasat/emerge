import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MessageCircle, X, ChevronRight, BookOpen, MapPin, Globe } from 'lucide-react';
import { coursesData, courseCategories } from '../data/courses';
import { buildCourseInquiryUrl } from '../lib/whatsapp';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Categories';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.title = "Courses & Career Opportunities | Emerge India & Overseas";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && courseCategories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All Categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || course.category === selectedCategory;

      const q = searchTerm.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        course.name.toLowerCase().includes(q) ||
        (course.abbreviation && course.abbreviation.toLowerCase().includes(q)) ||
        course.category.toLowerCase().includes(q) ||
        (course.brochureNote && course.brochureNote.toLowerCase().includes(q)) ||
        (course.statesAvailable && course.statesAvailable.some(s => s.toLowerCase().includes(q))) ||
        (course.destinations && course.destinations.some(d => d.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="courses-page">
      {/* Page Hero */}
      <section className="section-tight" style={{ background: 'linear-gradient(135deg, var(--color-deep-green) 0%, #083719 100%)', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', padding: '50px 20px' }}>
          <div style={{ color: '#D4AF37', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Academic Directory
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '12px' }}>
            Explore Courses & Career Opportunities
          </h1>
          <p style={{ color: '#C8E6C9', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto' }}>
            Discover educational pathways in India and overseas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--color-off-white)' }}>
        <div className="container">
          {/* Search and Filters Toolbar */}
          <div className="courses-toolbar">
            <div className="search-input-wrap">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search courses by title, abbreviation (e.g. MBBS, MBA, B.Tech, BHMS), or state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="course-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-deep-green)' }}>
                <Filter size={16} />
                <span>Filter by Academic Category:</span>
              </div>
              <div className="category-chips">
                {courseCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
              Showing <span style={{ color: 'var(--color-deep-green)', fontWeight: '700' }}>{filteredCourses.length}</span> courses
              {selectedCategory !== 'All Categories' && ` in "${selectedCategory}"`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>
            {(selectedCategory !== 'All Categories' || searchTerm) && (
              <button
                type="button"
                onClick={() => { setSelectedCategory('All Categories'); setSearchTerm(''); searchParams.delete('category'); setSearchParams(searchParams); }}
                style={{ background: 'none', border: 'none', color: 'var(--color-dark-brown)', fontWeight: '600', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-card-top">
                    <span className="course-badge">{course.category}</span>
                    {course.abbreviation && (
                      <span className="course-abbr">{course.abbreviation}</span>
                    )}
                  </div>

                  <h3 className="course-name">{course.name}</h3>

                  <p className="course-desc">{course.description}</p>

                  {course.brochureNote && (
                    <div className="course-meta-box">
                      <strong>Brochure Note:</strong> {course.brochureNote}
                    </div>
                  )}

                  {course.destinations && course.destinations.length > 0 && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Globe size={14} style={{ color: 'var(--color-primary-green)' }} />
                      <span><strong>Destinations:</strong> {course.destinations.join(', ')}</span>
                    </div>
                  )}

                  <div className="course-actions">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(course)}
                      className="btn btn-outline-green btn-sm"
                      style={{ flex: 1 }}
                    >
                      <span>View Details</span>
                    </button>
                    <a
                      href={buildCourseInquiryUrl(course.name, course.abbreviation)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      title="Enquire on WhatsApp"
                      style={{ flex: 1 }}
                    >
                      <MessageCircle size={15} />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1.5px solid var(--color-border-green)' }}>
              <BookOpen size={48} style={{ color: 'var(--color-border-green)', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-deep-green)', marginBottom: '8px' }}>
                No courses match your criteria
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Try adjusting your search terms or selecting another category.
              </p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('All Categories'); setSearchTerm(''); }}
                className="btn btn-primary btn-sm"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={() => setSelectedCourse(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div style={{ display: 'inline-block', backgroundColor: 'var(--color-soft-sage)', color: 'var(--color-deep-green)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
              {selectedCourse.category}
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-deep-green)', marginBottom: '14px' }}>
              {selectedCourse.name} {selectedCourse.abbreviation ? `(${selectedCourse.abbreviation})` : ''}
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              {selectedCourse.description}
            </p>

            {selectedCourse.brochureNote && (
              <div style={{ backgroundColor: '#FAF4F3', borderLeft: '4px solid var(--color-dark-brown)', padding: '14px 18px', borderRadius: '4px', marginBottom: '20px' }}>
                <strong style={{ color: 'var(--color-dark-brown)', display: 'block', marginBottom: '4px' }}>
                  Brochure Information:
                </strong>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                  {selectedCourse.brochureNote}
                </p>
              </div>
            )}

            {selectedCourse.statesAvailable && selectedCourse.statesAvailable.length > 0 && (
              <div style={{ marginBottom: '18px' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-deep-green)', marginBottom: '6px' }}>
                  Available States for Guidance:
                </strong>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedCourse.statesAvailable.map((state) => (
                    <span 
                      key={state}
                      style={{ backgroundColor: 'var(--color-off-white)', border: '1px solid var(--color-border-green)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem' }}
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedCourse.destinations && selectedCourse.destinations.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-deep-green)', marginBottom: '6px' }}>
                  Applicable Study Destinations:
                </strong>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedCourse.destinations.map((dest) => (
                    <span 
                      key={dest}
                      style={{ backgroundColor: '#E8F5E9', color: '#1B5E20', border: '1px solid #A5D6A7', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)' }}>
              <a
                href={buildCourseInquiryUrl(selectedCourse.name, selectedCourse.abbreviation)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} />
                <span>Enquire About {selectedCourse.abbreviation || "This Course"}</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
