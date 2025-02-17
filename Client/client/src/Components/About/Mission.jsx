import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="bg-dark text-white py-5 mt-2">
      <Container fluid className="px-4">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="text-white-50">
              Our mission is to empower students with a transparent, efficient, and
              user-friendly platform for exam revaluation. We strive to ensure fairness
              and accuracy in the evaluation process, providing students with the opportunity
              to have their academic performance reassessed with ease.
            </p>
            <hr className="border-white opacity-50 my-4" />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: "600px" }}>
              <li className="mb-3">
                <FaCheckCircle className="text-warning me-2" />
                Seamless online experience for revaluation requests.
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-warning me-2" />
                Highest standards of confidentiality & data security.
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-warning me-2" />
                Timely & accurate revaluation results.
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-warning me-2" />
                Continuous improvements based on feedback.
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-warning me-2" />
                Fostering trust & confidence in exams.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={10} lg={8} className="text-center">
            <p className="text-white-50">
              We believe that every student deserves a fair chance to showcase their knowledge.
              Our revaluation system upholds academic integrity and supports student success.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
