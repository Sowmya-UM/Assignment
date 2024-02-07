// HomePage.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import { ArrowRight, Facebook, Linkedin,Youtube,Twitter,Circle } from 'react-bootstrap-icons';




const FooterPage = () => {
  return (
    <div>
    <div className="Footer-home-page">
      {/* Section 1: Background Image with Text and Button */}
      <div className="background-last">
        <div className="text-container">
          
          <h2> INFRASTUCTURE <br /> LEADING</h2>
          <Button className="blue-button"><span className='content-footer-left'>CONTACTS<br/>SUBSIDIARIES</span> <ArrowRight /> </Button> {' '}
          </div>
        
        
      </div>

      {/* Section 2: Footer Content */}
      <div className="footer-section" >
  <div className="footer-column">
    <div className="icon">
    
    <img src={require('./logo.png')} style={{ height: '15px' , width: '15px',marginTop:"5px", marginRight:"5px" }} />
    <p>ENERGYSTEEL</p>
    </div>
  </div>
  <div className="footer-column">
<span> About Us <br/> Products and Services <br />Manufacturing process <br/> Research Development <br/> Case Studies <br/>News</span>
  </div>
  <div className="footer-column">
    <span> +80 232 32425</span><br/>
    <span> 50 Grosvenor Place <br/> London <br/> SWIX7GG</span>
    <div className="social-icons">
  <Facebook color='white' style={{ marginRight: '10px' }} />
  <Linkedin color="white" style={{ marginRight: '10px' }} />
  <Youtube color="white" style={{ marginRight: '10px' }} />
  <Twitter color="white" />
</div>
  </div>
  </div>
    </div>
       <div className="additional-content">
          {/* Add your additional content here */}
          <div class="line-container">
  <div>Contact us</div>
  <div>Terms of use</div>
  <div>Privacy</div>
  <div>Cookie Policy</div>
</div><br/>
<div className='copyright'>
<Circle color="#f4f4f4" /><p> 2023 energy Steel Group</p>
</div>
        </div>
    </div>
   
  );
};

export default FooterPage;
