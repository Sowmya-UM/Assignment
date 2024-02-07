// OurDirectors.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';

const OurDirectors = () => {
  return (
    <section className="our-directors-section">
      <div className="our-directors-content">
        <div className="our-directors-text">
          <h2>Our<br/> Directors</h2>
          <div className="arrow-marks">
            <span>&#9664;</span> {/* Left arrow */}
            <span>&#9654;</span> {/* Right arrow */}
          </div>
        </div>

        <div className="our-directors-cards">
          {/* Scrollable card content */}
          <div className="card-row">
            <div className="card-container">
              <Card style={{ width: '18rem', height: '429px' }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./Jonny.png')} alt="Director 1" />
               
                <Card.Body className='directors custom-card-body'>
                  <Card.Title>Jonny Tractor</Card.Title>
                  <p>Comissioner</p>
                  <Card.Text>
                    Apponited as Commissioner since July 2020.Last served as Secretary General of the Ministry of Trade Republic Cinta
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="card-container">
              <Card style={{ width: '18rem', height: '429px' }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./Lisa.png')} alt="Director 2" />
                <Card.Body className='directors custom-card-body'>
                  <Card.Title>Lisya Padderson</Card.Title>
                  <p>Human Resource Director</p>
                  <Card.Text>
                   Officially appionted as a director since January 18, 2023. He has spent a lot of his career at Bank Untung.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="card-container">
              <Card style={{ width: '18rem', height: '429px'  }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./Vicky.png')}  alt="Director 3" />
                <Card.Body className='directors custom-card-body'>
                  <Card.Title>Vicky Richards</Card.Title>
                  <p >Vice President</p>
                  <Card.Text>
                    Officially appointed as director since January 18, 2023. Previously served as a President Director of Langsung Jaya Infrastuctutre
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDirectors;
