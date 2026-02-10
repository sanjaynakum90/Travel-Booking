import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsGeoAlt, BsEnvelope, BsTelephone } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <Container>
                    <h1 className="contact-hero-title">Contact Us</h1>
                    <nav className="contact-breadcrumb">
                        <a href="/">Home</a> <span>»</span> <span>Contact Us</span>
                    </nav>
                </Container>
            </div>

            {/* Contact Content Section */}
            <Container className="contact-content">
                <Row>
                    {/* Contact Information Cards */}
                    <Col lg={4} md={12} className="contact-info-col">

                        <div className="contact-info-card">
                            <div className="contact-info-icon">
                                <BsEnvelope />
                            </div>
                            <h5 className="contact-info-title">Email Us</h5>
                            <p className="contact-info-text">
                                support@example.com<br />
                                sales@example.com
                            </p>

                            <hr />

                            <div className="contact-info-icon">
                                <BsTelephone />
                            </div>
                            <h5 className="contact-info-title">Phone Number</h5>
                            <p className="contact-info-text">
                                +99012547896588<br />
                                +99012547896988
                            </p>
                        </div>

                    </Col>

                    {/* Contact Form */}
                    <Col lg={8} md={12} className="contact-form-col">
                        <div className="contact-form-wrapper">
                            <div className="contact-badge">Get in Touch</div>
                            <h2 className="contact-form-title">Send us a Message</h2>

                            <Form onSubmit={handleSubmit} className="contact-form">
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="contact-input"
                                            required
                                        />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="contact-input"
                                            required
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            type="tel"
                                            placeholder="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="contact-input"
                                            required
                                        />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="contact-input"
                                        />
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="contact-textarea"
                                        rows={5}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="contact-submit-btn">
                                    Send Message <FiSend className="ms-2" />
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Footer />
            </Row>

        </div>
    );
};

export default Contact;