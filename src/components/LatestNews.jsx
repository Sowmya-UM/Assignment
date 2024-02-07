// LatestNews.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';

const LatestNews = () => {
  return (
    <section className="latest-news-section">
      <div className="latest-news-content">
        <div className="latest-news-header">
          <h2>Latest News</h2>
          <div className="read-more-link">
            <a href="#">Read more →</a>
          </div>
        </div>

        <div className="latest-news-cards">
          {/* Scrollable card content */}
          <div className="card-row-latest">
            {/* Card 1 */}
            <div className="card-container-latest">
              <Card style={{ width: '18rem', height: '420px' }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./EnergyReports.png')} alt="News 1" />
                <Card.Body className='unique'>
                  <Card.Title>Energy Reports NYSE Commencing Delisting of Mechel ADRs</Card.Title>
                  <Card.Text>
                    One of the leading Russian mining and metals companies, reports that it hasbeen notified ....
                  </Card.Text>
                  <div className="additional-info">
                    <div className="text-left">PRESS</div>
                    <div className="text-right">06.20</div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* Card 2 */}
            <div className="card-container-latest">
              <Card style={{ width: '18rem', height: '420px' }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./EnergyPublishes.png')} alt="News 2" />
                <Card.Body>
                  <Card.Title> Energy Publishes First Sustainability Report </Card.Title>
                  <Card.Text>
                   One of the leading Russian mining and metals companies, reports that it has been notified ....
                  </Card.Text>
                  <div className="additional-info">
                    <div className="text-left">COMPANY</div>
                    <div className="text-right">05.02</div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="card-container-latest">
              <Card style={{ width: '18rem', height: '420px' }}>
                <Card.Img style={{ width: '100%', height: '220px', objectFit: 'cover' }} variant="top" src={require('./CreditRating.png')} alt="News 3" />
                <Card.Body>
                  <Card.Title>Announces Obtaining National Credit Rating</Card.Title>
                  <Card.Text>
                   One of the leading Russian mining and metals companies, reports that it has been notified ....
                  </Card.Text>
                  <div className="additional-info">
                    <div className="text-left">PRESS</div>
                    <div className="text-right">03.02</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
