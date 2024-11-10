import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="footer">
        <div className="footer-container">
          <footer className="footer-grid">
            {["Utility Pages", "Explore", "Find a Car", "Get in Touch"].map((section, index) => (
              <div key={index} className="footer-section">
                <h2 className="footer-title">{section}</h2>
                <ul className="footer-list">
                  {["Terms & Condition", "Privacy Policy", "Legal Notice", "Accessibility"].map((item, idx) => (
                    <li key={idx} className="footer-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </footer>
        </div>
      </div>
    </>
  );
}
