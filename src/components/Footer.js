import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Your company description goes here.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
