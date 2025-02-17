import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          {/* Google Map Section */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <div className="map-container">
              <iframe
                title="Google Map"
                width="100%"
                height="250"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                className="rounded shadow-sm"
              ></iframe>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <Nav className="flex-column flex-md-row justify-content-center mb-3">
              <Nav.Link as={Link} to="/" onClick={scrollToTop} className="text-black fs-5 mx-2"><b>Home</b></Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={scrollToTop} className="text-black fs-5 mx-2"><b>About</b></Nav.Link>
              <Nav.Link as={Link} to="/request" onClick={scrollToTop} className="text-black fs-5 mx-2"><b>Request</b></Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={scrollToTop} className="text-black fs-5 mx-2"><b>Contact</b></Nav.Link>
            </Nav>
            {/* Copyright Text */}
            <span className="text-muted text-sm">
              © 2023. All Rights Reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
