import React from 'react';
import './App.css';
import profileLogo from './logo1.png'; // Replace with your profile image
import Phone from './call.png';
import WhatsApp from './whatsapp.png';
import Email from './email.png';
import Web from './web.png';
import Background from './bg.jpg';
import Instagram from './instagram.png';
import Company1 from './logoss/alrowaad.png'; // Replace with your company logos
import Company2 from './logoss/bullandbearz.png';
import Company3 from './logoss/lining.jpg';
import Company4 from './logoss/ff.png';
import Company5 from './logoss/tasees.png';
import Company6 from './logoss/shopcin.png';
import Company7 from './logoss/wpmoda.png'
import Add from './add.png';

const App = () => {
  return (
    <div className="App">
      <div className="profile-card" style={{background:'#000'}}>

        {/* vCard Download Icon (inside the card) */}
        <div className="vcard-download">
          <a href="/contact.vcf" download="Rohith.vcf" title="Save Contact">
            <img src={Add} alt="Save Contact" className="download-icon" />
          </a>
        </div>

        {/* Background Section */}
        <div
          className="card-background"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dqasmnsve/image/upload/v1741596000/3d-gradient-contour-line-patterned-background-illu-2025-02-10-11-01-47-utc_sv4hzh.jpg')`,
          }}
        >
          <div className="profile-image-container">
            <img src={profileLogo} alt="Profile" className="profile-image" />
          </div>
        </div>

        {/* Profile Information */}
        <div className="profile-info">
          <h1 className="profile-name" style={{color:"#fff"}}>Rohith Sagar M</h1>
          <h2 className="profile-title" style={{color:"grey"}}>IT Manager</h2>
          <br />

          {/* Social Links */}
          <div className="social-links" >
            <a href="tel:+971543175003" target="_blank" rel="noopener noreferrer">
              <img src={Phone} alt="Call" className="social-icon" />
            </a>
            <a href="https://wa.me/+971543175003" target="_blank" rel="noopener noreferrer">
              <img src={WhatsApp} alt="WhatsApp" className="social-icon" />
            </a>
            <a href="mailto:info@squarecom.ae" target="_blank" rel="noopener noreferrer">
              <img src={Email} alt="Email" className="social-icon" />
            </a>
            <a href="https://rohithsagar.com" target="_blank" rel="noopener noreferrer">
              <img src={Web} alt="Web" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Companies Section */}
        <div className="company-logos" style={{ paddingBottom: "10px" }}>
  <h4 className="company-logos-title" style={{ color: "lightgrey" }}>
    Our Ventures
  </h4>
  <div className="company-logos-list">
    <a href="https://joyrefinery.ae/" target="_blank" rel="noopener noreferrer">
      <img src={Company1} alt="Company 1" className="company-logo" />
    </a>
    <a href="https://advanz-tech.com/" target="_blank" rel="noopener noreferrer">
      <img src={Company2} alt="Company 2" className="company-logo" />
    </a>
 
    <a href="https://joyrefinery.ae/" target="_blank" rel="noopener noreferrer">
      <img src={Company5} alt="Company 1" className="company-logo" />
    </a>
    <a href="https://advanz-tech.com/" target="_blank" rel="noopener noreferrer">
      <img src={Company6} alt="Company 2" className="company-logo" />
    </a>
    <a href="https://joyrefinery.ae/" target="_blank" rel="noopener noreferrer">
      <img src={Company7} alt="Company 1" className="company-logo" />
    </a>
  
   
  </div>
</div>
        <div className="powered-by">
      Powered by 
      <a href="https://squarecom.ae" target="_blank" rel="noopener noreferrer" className="powered-by-link">
        Squarecom IT Solution
      </a>
    </div>
      </div>
    </div>
  );
};

export default App;
