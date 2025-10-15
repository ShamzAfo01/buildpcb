import React from 'react';
import './App.css';
import Pricing from './Pricing';
import Faq from './Faq';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">buildpcb</div>
          <ul className="nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="start-now">Start Now</button>
        </nav>
      </header>
      <main>
        <Pricing />
        <Faq />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>buildpcb</h2>
            <p>AI-powered PCB design — from prompt to production in minutes.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Features</h3>
              <ul>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Demo</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>FAQ</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#">X</a>
                <a href="#">LI</a>
                <a href="#">IG</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 buildpcbs. All rights reserved</p>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
