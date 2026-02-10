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
    BsSun,
    BsTelephone
} from 'react-icons/bs';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './About.css';
import Footer from './Footer';

const About = () => {
    const features = [
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
        { number: '853+', label: 'Satisfied Clients' },
        { number: '90+', label: 'Tour Packages' },
        { number: '56+', label: 'Certified Guides' },
        { number: '12+', label: 'Years Active' }
    ];

    const partners = ['zantic', 'Monarch', 'Unicoin', 'Heline', 'Nutrican', 'Aura'];

    const testimonial = {
        name: 'Masum Billah',
        position: 'CEO of ABC LTD',
        text: '"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."',
        rating: 5
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <Container>
                    <h1 className="about-hero-title">About</h1>
                    <nav className="about-breadcrumb">
                        <a href="/">Home</a> <span>»</span> <span>About</span>
                    </nav>
                </Container>
            </div>

            {/* About Content Section */}
            <Container className="about-content">
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="about-images-wrapper">
                            <div className="about-badge-float">
                                <div className="about-excellence-badge">
                                    <h6>Excellence In</h6>
                                    <h6>Travel</h6>
                                </div>
                            </div>
                            <div className="about-main-image">
                                <img
                                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop"
                                    alt="Travel destination"
                                />
                            </div>
                            <div className="about-overlay-image">
                                <img
                                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop"
                                    alt="Beach sunset"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-text-content">
                            <div className="about-section-badge">About Our Company</div>
                            <h2 className="about-section-title">Discover Every Corner of The World With Us</h2>
                            <p className="about-description">
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable. If you are going to use a passage of
                                Lorem Ipsum.
                            </p>
                            <div className="about-action-row">
                                <Button className="about-more-btn">
                                    About More <FaCheckCircle className="ms-2" />
                                </Button>
                                <div className="about-call-info">
                                    <BsTelephone className="call-icon" />
                                    <div>
                                        <small className="call-label">Call Us 24/7</small>
                                        <div className="call-number">+88013 548 67 68</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Stats Section */}
            <div className="about-stats-section">
                <Container>
                    <Row>
                        {stats.map((stat, index) => (
                            <Col key={index} lg={3} md={6} className="mb-4 mb-lg-0">
                                <div className="about-stat-card">
                                    <div className="about-stat-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <div className="about-stat-number">{stat.number}</div>
                                    <div className="about-stat-label">{stat.label}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Partners Section */}
            <div className="about-partners-section">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        {partners.map((partner, index) => (
                            <Col key={index} xs={6} md={4} lg={2} className="mb-4 mb-lg-0">
                                <div className="about-partner-logo">
                                    {partner}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Testimonial Section */}
            <div className="about-testimonial-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={12} className="mb-4 mb-lg-0">
                            <div className="about-testimonial-images">
                                <div className="about-testimonial-row">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                                        alt="Customer 1"
                                        className="about-testimonial-img"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                                        alt="Customer 2"
                                        className="about-testimonial-img"
                                    />
                                </div>
                                <div className="about-testimonial-row-offset">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
                                        alt="Customer 3"
                                        className="about-testimonial-img"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12}>
                            <div className="about-testimonial-content">
                                <div className="about-testimonial-badge">Testimonials</div>
                                <h2 className="about-testimonial-title">Our Valuable Customer Says</h2>
                                <div className="about-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <p className="about-testimonial-text">{testimonial.text}</p>
                                <div className="about-testimonial-author">{testimonial.name}</div>
                                <div className="about-testimonial-position">{testimonial.position}</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Tour Features Section */}
            <Container className="about-features-section">
                <div className="text-center mb-5">
                    <div className="about-features-badge">Special Features</div>
                    <h2 className="about-features-title">Our Tour Features</h2>
                </div>
                <Row>
                    {features.map((feature, index) => (
                        <Col key={index} lg={3} md={6} className="mb-4">
                            <div className="about-feature-card">
                                <div className="about-feature-icon">{feature.icon}</div>
                                <h5 className="about-feature-title">{feature.title}</h5>
                                <p className="about-feature-description">{feature.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Video Section */}
            <div className="about-video-section">
                <div className="about-video-overlay"></div>
                <div className="about-video-play-button">
                    <FaPlay />
                </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta-section">
                <Container>
                    <div className="about-cta-wrapper">
                        <div className="about-cta-image">
                            <img
                                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=600&fit=crop"
                                alt="Adventure"
                            />
                        </div>
                        <div className="about-cta-content">
                            <div className="about-cta-badge">Ready to Start?</div>
                            <h3 className="about-cta-title">Discover Incredible Deals Just for You!</h3>
                            <Button className="about-cta-button">
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

export default About;