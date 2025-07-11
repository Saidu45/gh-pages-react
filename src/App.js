import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Import images (you'll need to add these to your project)
// import makeniSkyline from './images/makeni-skyline.jpg';
// import cottonTree from './images/cotton-tree.jpg';
// import wusumHills from './images/wusum-hills.jpg';
// import market from './images/makeni-market.jpg';

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

  return (
    <div className="App">
      {/* Navigation */}
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="Makeni City Logo" />
            <span className="city-name">MAKENI CITY</span>
          </div>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button>
            <button onClick={() => scrollToSection('about')} className={activeTab === 'about' ? 'active' : ''}>About</button>
            <button onClick={() => scrollToSection('attractions')} className={activeTab === 'attractions' ? 'active' : ''}>Attractions</button>
            <button onClick={() => scrollToSection('culture')} className={activeTab === 'culture' ? 'active' : ''}>Culture</button>
            <button onClick={() => scrollToSection('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</button>
          </nav>
          
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Makeni</h1>
          <p className="subtitle">The Heart of Sierra Leone</p>
          <button className="explore-btn" onClick={() => scrollToSection('about')}>
            Explore Our City
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Makeni</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Makeni is the largest city in the Northern Province of Sierra Leone and serves as the capital of Bombali District. 
                With a population of over 125,000, it's a vibrant hub of commerce, education, and culture.
              </p>
              <p>
                The city is home to the University of Makeni, the only Catholic university in Sierra Leone, and serves as an important 
                economic center for the northern region of the country.
              </p>
              <p>
                Makeni's strategic location makes it a crossroads for trade and transportation between Sierra Leone's provinces and 
                neighboring Guinea.
              </p>
            </div>
            <div className="about-image">
              {/* <img src={makeniSkyline} alt="Makeni Skyline" /> */}
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="attractions-section">
        <div className="container">
          <h2>City Attractions</h2>
          <p className="section-intro">Discover the landmarks that make Makeni unique</p>
          
          <div className="attractions-grid">
            <div className="attraction-card">
              {/* <img src={wusumHills} alt="Wusum Hills" /> */}
              <div className="image-placeholder"></div>
              <h3>Wusum Hills</h3>
              <p>
                These scenic hills offer breathtaking views of the city and surrounding countryside. 
                A popular spot for hiking and picnics.
              </p>
            </div>
            
            <div className="attraction-card">
              {/* <img src={cottonTree} alt="Cotton Tree" /> */}
              <div className="image-placeholder"></div>
              <h3>Historic Cotton Tree</h3>
              <p>
                A centuries-old cotton tree that serves as a landmark and gathering place in the city center.
              </p>
            </div>
            
            <div className="attraction-card">
              {/* <img src={market} alt="Makeni Market" /> */}
              <div className="image-placeholder"></div>
              <h3>Makeni Market</h3>
              <p>
                The bustling central market where you can find everything from fresh produce to traditional crafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="culture-section">
        <div className="container">
          <h2>Our Culture</h2>
          <div className="culture-content">
            <div className="culture-text">
              <h3>Rich Traditions</h3>
              <p>
                Makeni is a melting pot of Sierra Leone's diverse ethnic groups, including the Temne, Limba, and Kuranko people. 
                This diversity is reflected in the city's vibrant cultural scene.
              </p>
              <h3>Festivals & Events</h3>
              <p>
                The city comes alive during cultural festivals like the annual "Bintumani Festival" celebrating northern traditions 
                through music, dance, and storytelling.
              </p>
              <h3>Cuisine</h3>
              <p>
                Sample local specialties like cassava leaves, groundnut stew, and the famous Makeni street food.
              </p>
            </div>
            <div className="culture-highlights">
              <div className="highlight-box">
                <div className="highlight-icon">🎭</div>
                <h4>Traditional Dance</h4>
                <p>Experience the energetic Bubu and Temne dances</p>
              </div>
              <div className="highlight-box">
                <div className="highlight-icon">🎶</div>
                <h4>Music Scene</h4>
                <p>Home to Sierra Leone's vibrant palm wine music</p>
              </div>
              <div className="highlight-box">
                <div className="highlight-icon">🧶</div>
                <h4>Local Crafts</h4>
                <p>Beautiful woven baskets and wood carvings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Visit Makeni</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Tourist Information</h3>
              <p><strong>Location:</strong> Bombali District, Northern Sierra Leone</p>
              <p><strong>Best time to visit:</strong> November to April (dry season)</p>
              <p><strong>Getting there:</strong> Regular buses from Freetown (3-4 hours)</p>
              
              <div className="social-links">
                <a href="#" aria-label="Facebook"><span>📱</span></a>
                <a href="#" aria-label="Twitter"><span>💬</span></a>
                <a href="#" aria-label="Instagram"><span>📸</span></a>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Contact Us</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} className="App-logo" alt="Makeni City Logo" />
              <span>MAKENI CITY</span>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('attractions')}>Attractions</button></li>
                <li><button onClick={() => scrollToSection('culture')}>Culture</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <p>City Hall, Makeni</p>
              <p>Sierra Leone</p>
              <p>Email: info@makenicity.gov.sl</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Makeni City. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;