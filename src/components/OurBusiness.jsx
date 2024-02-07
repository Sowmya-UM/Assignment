// OurBusiness.jsx
import React from 'react';

const OurBusiness = () => {
  return (
    <section className="our-business-section">
      <div className="our-business-content">
        <div className="our-business-header">
          <h2>Our<br/> Business</h2>
          <a href="#read-more">Read more →</a>
        </div>

        <div className="our-business-images">
          <div className="row">
            <div className="column">
            <img src={require('./Business1.png')}  />

              {/* <img src="Business1.png" alt="Image 1" /> */}
            </div>
            <div className="column">
            <img src={require('./Business2.png')}  />
              
            </div>
            <div className="column">
            <img src={require('./Business3.png')}  />
              
            </div>
          </div>
          <div className="row">
            <div className="column">
            <img src={require('./Business4.png')}  />
              
            </div>
            <div className="column">
            <img src={require('./Business5.png')}  />
              
            </div>
            <div className="column">
            <img src={require('./Business6.png')}  />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBusiness;
