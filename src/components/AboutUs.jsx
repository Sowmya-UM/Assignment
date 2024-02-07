// AboutUs.jsx
import React from 'react';
import './Style.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-header">
          <h2>About Us</h2>
        </div>

        <div className="about-us-columns">
          <div className="column">
            <h1> WE EXPLORE<br/>TO EMPOWER</h1>
            <div className="row"></div>
            <a href="#read-more" className= "read-more-link">Read more →</a>
            <div className="row"></div>
          </div>

          <div className="column imgrow">
            <div className="about-us-columns">
              {/* Image goes here */}
              {/* <img src={require('./HeroSection.png')} alt="Image" /> */}
              <div className="row">EnergySteel Co is an<br/>international business with an <br/> integrated offering - from the <br/> production of liquid steel<br/> made from raw and recycled <br/> materials through to high<br/>value precision engineered<br/>steels and associated services.<br/>Sold to customer around the world.</div>
            <div className="row-light">With a total rolling capacity of 20<br/>million tonnes. 200+ manufacturing <br/>locations globally across 12 countries <br/> and more than 30,000 people<br/>employed, our comprehensive product<br/>range includes iron ore and cooking coal.</div>
            </div>
            <div className="image-container">
              {/* Image goes here */}
              <img src={require('./AboutUs.png')} alt="Image" />
            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
