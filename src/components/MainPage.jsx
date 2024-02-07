// MainPage.jsx
import React from 'react';
import './Style.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import AboutUs from './AboutUs';
import OurDirectors from './OurDirectors';
import OurBusiness from './OurBusiness';
import LatestNews from './LatestNews';
import FooterPage from './FooterPage';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';

const MainPage = () => {
  return (
    <div className="main-page">
      <section className="background-section">
        <Navbar className="navbar-main">
          <Container>
          <img src={require('./logo.png')} style={{ height: '20px' , width: '20px',marginTop:"5px", marginRight:"5px" }} />
            <Navbar.Brand href="#home" className="main"> ENERGYSTEEL</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text >
                +32 342 424:     <Button variant="outline-light">CONTACT US</Button>{' '}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Nav component added below Navbar */}
        <Nav defaultActiveKey="/home" as="ul" className='nav-tabs'>
          <Nav.Item as="li">
            <Nav.Link href="/home">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Product and Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-3">Manufacturing process</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-4"> Research Development</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-5">Case Studies</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-6">News</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Content in the middle of the section */}
        <div>
        <div className="content-wrapper">
          <h1 className="content-heading">WE BUILD <br /> STRONGER <br />FUTURE </h1>
          <p className="content-text">Building stronger future, <br /> one stel beem at a time</p>
          {/* <button className="content-button">START <br /> COLLABORATING   </button> */}
          <Button variant="primary" className="content-button"><span className='content-left'>START</span> <br /> COLLABORATING  <ArrowRight />
 </Button>{' '}
        </div>
        <img ClassName="bottom-right-image" src={require('./HeroSectionvideo.png')}  alt="Image" className="bottom-right-image" />
        </div>
      </section>


      <AboutUs />
      <OurBusiness />

      {/* OurDirectors component */}
      <OurDirectors />
      <LatestNews />
      <FooterPage />
      
      

     
    </div>
  );
};

export default MainPage;
