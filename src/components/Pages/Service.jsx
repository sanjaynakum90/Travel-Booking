import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  BsWifi,
  BsShieldCheck,
  BsDroplet,
  BsHeadphones,
  BsDoorClosed,
  BsMoonStars,
  BsBicycle,
  BsSun
} from 'react-icons/bs';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './Services.css';
import Footer from './Footer';

const Services = () => {
  const services = [
    { icon: <BsWifi />, title: 'Use Free Wifi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsShieldCheck />, title: 'Special Security', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsDroplet />, title: 'Swimming & Fishing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsHeadphones />, title: 'Gym Center', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsDoorClosed />, title: 'Luxury Room', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsMoonStars />, title: 'Night Campaign', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsBicycle />, title: 'Cycling Trips', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' },
    { icon: <BsSun />, title: 'Solar Energy System', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit.' }
  ];

  const stats = [
    { number: '85959+', label: 'Satisfied Clients' },
    { number: '9874+', label: 'Tour Packages' },
    { number: '5646+', label: 'Certified Guides' },
    { number: '1200+', label: 'Winning Awards' }
  ];

  const partners = ['zantic', 'Monarch', 'Unicoin', 'Heline', 'Nutrican', 'Aura'];

  const testimonial = {
    name: 'Masum Billah',
    position: 'CEO of ABC LTD',
    text: '"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."',
    rating: 5
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <Container>
          <h1 className="services-hero-title">Services</h1>
          <nav className="services-breadcrumb">
            <a href="/">Home</a> <span>»</span> <span>Services</span>
          </nav>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="services-content">
        <Row>
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5 className="service-title">{service.title}</h5>
                <p className="service-description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Stats Section */}
      <div className="stats-section">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col key={index} lg={3} md={6} className="mb-4 mb-lg-0">
                <div className="stat-card">
                  <div className="stat-check-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Partners Section */}
      <div className="partners-section">
        <Container>
          <Row className="justify-content-center align-items-center">
            {partners.map((partner, index) => (
              <Col key={index} xs={6} md={4} lg={2} className="mb-4 mb-lg-0">
                <div className="partner-logo">
                  {partner}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={12} className="mb-4 mb-lg-0">
              <div className="testimonial-images">
                <div className="testimonial-row">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                    alt="Customer 1"
                    className="testimonial-img"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt="Customer 2"
                    className="testimonial-img"
                  />
                </div>
                <div className="testimonial-row-offset">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
                    alt="Customer 3"
                    className="testimonial-img"
                  />
                </div>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <div className="testimonial-content">
                <div className="testimonial-badge">Testimonials</div>
                <h2 className="testimonial-title">Our Valuable Customer Says</h2>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="testimonial-position">{testimonial.position}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-overlay"></div>
        <div className="video-play-button">
          <FaPlay />
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <Container>
          <div className="cta-wrapper">
            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=600&fit=crop"
                alt="Adventure"
              />
            </div>
            <div className="cta-content">
              <div className="cta-badge">Ready to Start?</div>
              <h3 className="cta-title">Discover Incredible Deals Just for You!</h3>
              <Button className="cta-button">
                Explore More <FiArrowRight className="ms-2" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Services;