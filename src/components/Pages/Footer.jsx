import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="gy-5">

                    {/* LEFT LOGO + ABOUT */}
                    <Col lg={3} md={6}>
                        <div className="footer-brand d-flex align-items-center mb-3">
                            <div className="logo-circle">T</div>
                            <h4 className="ms-2 m-0 text-white">Travelo</h4>
                        </div>

                        <p className="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            venenatis imperdiet titor sodales vulputate
                        </p>

                        <h6 className="mt-4 text-white">Connect with us</h6>

                        <div className="social-icons mt-3">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-youtube"></i>
                        </div>
                    </Col>

                    {/* ABOUT LINKS */}
                    <Col lg={2} md={6}>
                        <h5 className="footer-title">About Trevelo</h5>
                        <ul className="footer-links">
                            <li>Faq's</li>
                            <li>Privacy Policy</li>
                            <li>Term & Conditions</li>
                            <li>Support</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    {/* USEFUL LINKS */}
                    <Col lg={2} md={6}>
                        <h5 className="footer-title">Useful Links</h5>
                        <ul className="footer-links">
                            <li>Faq's</li>
                            <li>Privacy Policy</li>
                            <li>Term & Conditions</li>
                            <li>Support</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    {/* CONTACT */}
                    <Col lg={3} md={6}>
                        <h5 className="footer-title">Quick Contact</h5>

                        

                        <div className="contact-item">
                            <i className="bi bi-envelope"></i>
                            <span>support@example.com</span>
                        </div>
                    </Col>

                    {/* NEWSLETTER */}
                    <Col lg={2} md={6}>
                        <h5 className="footer-title">Subscribe To Newsletter</h5>

                        <Form className="newsletter-form mt-3">
                            <div className="newsletter-box">
                                <Form.Control
                                    type="email"
                                    placeholder="Please Enter Email"
                                    className="newsletter-input"
                                />
                                <Button className="newsletter-btn">
                                    <i className="bi bi-send"></i>
                                </Button>
                            </div>
                        </Form>

                        <small className="newsletter-note">
                            Don’t Spam, Please enter Real Email
                        </small>
                    </Col>
                </Row>

                {/* COPYRIGHT */}
                <div className="footer-bottom text-center mt-5 pt-4">
                    Copyright © 2025 Travelo All Right Reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
