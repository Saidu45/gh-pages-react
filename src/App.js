import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

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

  return (
    <div className="App">
      {/* Luxury Navigation */}
      <header className={`luxury-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="luxury-container">
          <div className="luxury-logo">
            <span className="luxury-logo-main">MAKENI</span>
            <span className="luxury-logo-sub">The Golden City</span>
          </div>
          
          <nav className={`luxury-nav ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'attractions', 'culture', 'contact'].map((item) => (
              <button
                key={item}
                className={`luxury-nav-item ${activeTab === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                <span className="luxury-nav-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span className="luxury-nav-line"></span>
              </button>
            ))}
          </nav>
          
          <button 
            className={`luxury-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="luxury-hamburger-line"></span>
            <span className="luxury-hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Hero Paradise */}
      <section id="home" className="luxury-hero" ref={heroRef}>
        <div className="luxury-hero-overlay"></div>
        <div className="luxury-hero-content">
          <h1 className="luxury-hero-title">
            <span className="luxury-hero-title-line">Discover</span>
            <span className="luxury-hero-title-line">Makeni's Majesty</span>
          </h1>
          <p className="luxury-hero-subtitle">Where African Heritage Meets Modern Elegance</p>
          <button 
            className="luxury-hero-button"
            onClick={() => scrollToSection('about')}
          >
            <span>Explore Paradise</span>
            <svg className="luxury-arrow" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="luxury-scroll-hint">
          <span>Scroll to Explore</span>
          <div className="luxury-scroll-line"></div>
        </div>
      </section>

      {/* About Paradise */}
      <section id="about" className="luxury-about">
        <div className="luxury-container">
          <div className="luxury-section-header">
            <h2 className="luxury-section-title">
              <span>The Golden</span>
              <span>Heart of Sierra Leone</span>
            </h2>
            <p className="luxury-section-intro">A city where tradition and progress dance in harmony</p>
          </div>
          
          <div className="luxury-about-grid">
            <div className="luxury-about-content">
              <div className="luxury-about-highlight">
                <p>Makeni, the crown jewel of Northern Sierra Leone, blends rich cultural heritage with vibrant modern energy.</p>
              </div>
              <div className="luxury-about-stats">
                <div className="luxury-stat">
                  <div className="luxury-stat-number">125K+</div>
                  <div className="luxury-stat-label">Vibrant Residents</div>
                </div>
                <div className="luxury-stat">
                  <div className="luxury-stat-number">2005</div>
                  <div className="luxury-stat-label">University Established</div>
                </div>
              </div>
              <p className="luxury-about-text">
                As the capital of Bombali District, Makeni serves as the region's economic and cultural powerhouse. The city's golden sunsets over Wusum Hills have inspired generations, while its bustling markets pulse with the energy of West African commerce.
              </p>
            </div>
            <div className="luxury-about-image">
              <div className="luxury-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80" 
                  alt="Golden view of Makeni city" 
                  className="luxury-image-main"
                />
                <div className="luxury-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Attractions */}
      <section id="attractions" className="luxury-attractions">
        <div className="luxury-container">
          <div className="luxury-section-header">
            <h2 className="luxury-section-title">
              <span>Jewels of</span>
              <span>The Golden City</span>
            </h2>
            <p className="luxury-section-intro">Discover Makeni's crown attractions</p>
          </div>
          
          <div className="luxury-attractions-grid">
            {[
              {
                title: "Wusum Hills",
                desc: "Majestic peaks offering panoramic views of the city's golden landscape",
                img: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Cotton Tree Plaza",
                desc: "Historic gathering place under the ancient cotton tree's shade",
                img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Golden Market",
                desc: "Vibrant marketplace filled with local crafts and fresh produce",
                img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((item) => (
              <div className="luxury-attraction-card" key={item.title}>
                <div className="luxury-attraction-image">
                  <img src={item.img} alt={item.title} />
                  <div className="luxury-attraction-overlay"></div>
                </div>
                <div className="luxury-attraction-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="luxury-attraction-button">
                    Discover More
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Elegance */}
      <section id="culture" className="luxury-culture">
        <div className="luxury-container">
          <div className="luxury-section-header">
            <h2 className="luxury-section-title">
              <span>Cultural</span>
              <span>Treasures</span>
            </h2>
            <p className="luxury-section-intro">The soul of Sierra Leone comes alive</p>
          </div>
          
          <div className="luxury-culture-grid">
            <div className="luxury-culture-highlights">
              {[
                {
                  icon: "🎭",
                  title: "Festivals",
                  desc: "Vibrant celebrations of heritage and community"
                },
                {
                  icon: "🎶",
                  title: "Music",
                  desc: "Pulsating rhythms of traditional and modern beats"
                },
                {
                  icon: "🧶", 
                  title: "Crafts",
                  desc: "Exquisite handmade treasures by local artisans"
                }
              ].map((item) => (
                <div className="luxury-culture-card" key={item.title}>
                  <div className="luxury-culture-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="luxury-culture-gallery">
              {[
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1498&q=80"
              ].map((img) => (
                <div className="luxury-gallery-item" key={img}>
                  <img src={img} alt={`Cultural scene`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="luxury-footer">
        <div className="luxury-container">
          <div className="luxury-footer-grid">
            <div className="luxury-footer-brand">
              <div className="luxury-footer-logo">MAKENI</div>
              <p className="luxury-footer-tagline">The Golden City of Sierra Leone</p>
              <div className="luxury-footer-social">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <button key={social} className="luxury-social-button">
                    {social}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="luxury-footer-links">
              <h3>Explore</h3>
              {['Home', 'About', 'Attractions', 'Culture', 'Contact'].map((link) => (
                <button 
                  key={link}
                  className="luxury-footer-link"
                  onClick={() => scrollToSection(link.toLowerCase())}
                >
                  {link}
                </button>
              ))}
            </div>
            
            <div className="luxury-footer-contact">
              <h3>Visit Us</h3>
              <p>City Hall Plaza</p>
              <p>Makeni, Sierra Leone</p>
              <p>+232 00 000000</p>
              <p>visit@makeni.gov.sl</p>
            </div>
          </div>
          
          <div className="luxury-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Makeni City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;