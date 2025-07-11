import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const toggleMenu = (e) => {
    if (e.type === 'keydown' && !(e.key === 'Enter' || e.key === ' ')) {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <span className="city-name">MAKENI</span>
            <span className="city-slogan">The Lion City</span>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <button 
              onClick={() => scrollToSection('home')}
              onKeyDown={(e) => handleKeyDown(e, 'home')}
              className={activeTab === 'home' ? 'active' : ''}
              aria-label="Home"
            >
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              onKeyDown={(e) => handleKeyDown(e, 'about')}
              className={activeTab === 'about' ? 'active' : ''}
              aria-label="About"
            >
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('attractions')}
              onKeyDown={(e) => handleKeyDown(e, 'attractions')}
              className={activeTab === 'attractions' ? 'active' : ''}
              aria-label="Attractions"
            >
              <span>Attractions</span>
            </button>
            <button 
              onClick={() => scrollToSection('culture')}
              onKeyDown={(e) => handleKeyDown(e, 'culture')}
              className={activeTab === 'culture' ? 'active' : ''}
              aria-label="Culture"
            >
              <span>Culture</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, 'contact')}
              className={activeTab === 'contact' ? 'active' : ''}
              aria-label="Contact"
            >
              <span>Contact</span>
            </button>
          </nav>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-video">
          <video autoPlay loop muted playsInline>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Discover the Majesty</span>
            <span className="title-line">of Makeni City</span>
          </h1>
          <p className="subtitle">Where Tradition Meets Modernity</p>
          <button 
            className="explore-btn" 
            onClick={() => scrollToSection('about')}
            onKeyDown={(e) => handleKeyDown(e, 'about')}
          >
            Begin Your Journey
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-pattern"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decorator">About</span>
              The Lion City
            </h2>
            <p className="section-intro">The beating heart of Sierra Leone</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="highlight-text">
                Makeni, the vibrant capital of Bombali District, stands as a testament to Sierra Leone's rich cultural heritage and modern aspirations.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number" data-count="125">0</div>
                  <div className="stat-label">Thousand Residents</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="2005">0</div>
                  <div className="stat-label">University Founded</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="12">0</div>
                  <div className="stat-label">Major Festivals</div>
                </div>
              </div>
              <p>
                Nestled in the Northern Province, Makeni serves as the region's economic and educational hub, home to the prestigious University of Makeni. The city's strategic location makes it a crossroads for trade between Sierra Leone's provinces and neighboring Guinea.
              </p>
            </div>
            <div className="about-image">
              <div className="image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80" 
                  alt="Aerial view of Makeni city" 
                  className="image-main"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="attractions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decorator">Must-See</span>
              Attractions
            </h2>
            <p className="section-intro">Discover Makeni's iconic landmarks</p>
          </div>
          
          <div className="attractions-grid">
            <div className="attraction-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Scenic view of Wusum Hills" 
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Wusum Hills</h3>
                <p>
                  These majestic hills offer panoramic views of the city and surrounding countryside, with winding trails perfect for sunrise hikes.
                </p>
                <button className="card-btn">
                  Explore More
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="attraction-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Historic Cotton Tree in Makeni" 
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Cotton Tree</h3>
                <p>
                  This ancient tree has witnessed centuries of history, serving as a gathering place for community events and celebrations.
                </p>
                <button className="card-btn">
                  Explore More
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="attraction-card">
              <div className="card-image">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Busy Makeni Market scene" 
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Central Market</h3>
                <p>
                  A sensory explosion of colors, sounds, and aromas offering everything from fresh produce to traditional crafts.
                </p>
                <button className="card-btn">
                  Explore More
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="culture-section">
        <div className="section-pattern"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decorator">Rich</span>
              Cultural Heritage
            </h2>
            <p className="section-intro">Experience the soul of Sierra Leone</p>
          </div>
          
          <div className="culture-content">
            <div className="culture-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4M12 3v18M7 4l5 5 5-5" />
                  </svg>
                </div>
                <h4>Festivals</h4>
                <p>
                  The annual Bintumani Festival transforms the city with vibrant performances, traditional dances, and storytelling.
                </p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h4>Music</h4>
                <p>
                  From palm wine melodies to contemporary Afrobeat, Makeni's music scene pulses with energy and tradition.
                </p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                </div>
                <h4>Crafts</h4>
                <p>
                  Artisans create exquisite wood carvings, woven baskets, and traditional textiles using centuries-old techniques.
                </p>
              </div>
            </div>
            
            <div className="culture-gallery">
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Traditional dancers" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Local musicians" />
              </div>
              <div className="gallery-item">
                <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80" alt="Artisan crafts" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decorator">Plan Your</span>
              Visit
            </h2>
            <p className="section-intro">Connect with Makeni's hospitality</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>Tourist Information</h3>
                <div className="info-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>City Hall, Makeni, Sierra Leone</span>
                </div>
                <div className="info-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>+232 00 000000</span>
                </div>
                <div className="info-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span>visit@makenicity.gov.sl</span>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <button className="social-icon" aria-label="Facebook">
                    <svg viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </button>
                  <button className="social-icon" aria-label="Twitter">
                    <svg viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </button>
                  <button className="social-icon" aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <path d="M17.5 6.5h.01" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-group">
                  <textarea id="message" placeholder=" " required></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                  <svg viewBox="0 0 24 24">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div className="footer-wave"></div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">MAKENI</span>
              <span className="logo-slogan">The Lion City</span>
              <p className="footer-description">
                Experience the majesty of Sierra Leone's northern capital
              </p>
            </div>
            
            <div className="footer-links">
              <div className="links-column">
                <h4>Explore</h4>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('attractions')}>Attractions</button>
              </div>
              <div className="links-column">
                <h4>Discover</h4>
                <button onClick={() => scrollToSection('culture')}>Culture</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
                <button>Events</button>
              </div>
            </div>
            
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Makeni City Tourism Board. All rights reserved.</p>
            <div className="legal-links">
              <button>Privacy Policy</button>
              <button>Terms of Service</button>
              <button>Accessibility</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;