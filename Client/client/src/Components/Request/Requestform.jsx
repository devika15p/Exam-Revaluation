import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    branch: "",
    subject: "",
    reason: "",
  });

  const colleges = {
    "College A": ["ComputerScience", "Electronics", "Mechanical", "Civil"],
    "College B": ["InformationTechnology", "Electrical", "Chemical"],
  };

  const subjects = {
    ComputerScience: ["Data Structures", "Algorithms", "Operating Systems", "Database Management"],
    Electronics: ["Analog Circuits", "Digital Electronics", "Microcontrollers"],
    Mechanical: ["Thermodynamics", "Fluid Mechanics", "Manufacturing Processes"],
    Civil: ["Structural Analysis", "Geotechnical Engineering", "Transportation Engineering"],
    InformationTechnology: ["Web Development", "Software Engineering", "Networking"],
    Electrical: ["Power Systems", "Control Systems", "Electrical Machines"],
    Chemical: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  };

  const [availableBranches, setAvailableBranches] = useState([]);
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "college") {
      setAvailableBranches(colleges[value] || []);
      setFormData((prev) => ({ ...prev, branch: "", subject: "" }));
      setAvailableSubjects([]);
    }

    if (name === "branch") {
      setAvailableSubjects(subjects[value] || []);
      setFormData((prev) => ({ ...prev, subject: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { name, email, mobile, college, branch, subject, reason } = formData;
    if (!name || !email || !mobile || !college || !branch || !subject || !reason) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      // Simulated API call (Replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Request submitted:", formData);
      setFormData({ name: "", email: "", mobile: "", college: "", branch: "", subject: "", reason: "" });
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-dark min-vh-100 mt-2">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 bg-secondary text-white shadow-lg">
              <Card.Title className="text-center mb-4 fs-3 fw-bold">Revaluation Request Form</Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                {/* Name & Email */}
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border border-gray-700"
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border border-gray-700"
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                </Row>

                {/* Mobile & College */}
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border border-gray-700"
                      placeholder="Enter your mobile number"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="college">
                    <Form.Label>College</Form.Label>
                    <Form.Select
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className="bg-dark text-white border border-gray-700"
                    >
                      <option value="">Select College</option>
                      {Object.keys(colleges).map((college) => (
                        <option key={college} value={college}>
                          {college}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>

                {/* Branch */}
                <Form.Group className="mb-3" controlId="branch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    disabled={!formData.college}
                  >
                    <option value="">Select Branch</option>
                    {availableBranches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Subject */}
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    disabled={!formData.branch}
                  >
                    <option value="">Select Subject</option>
                    {availableSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Reason for Revaluation */}
                <Form.Group className="mb-3" controlId="reason">
                  <Form.Label>Reason for Revaluation</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="bg-dark text-white border border-gray-700"
                    placeholder="Explain your reason for revaluation..."
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button variant="primary" type="submit" disabled={loading} className="w-75 mt-2">
                    {loading ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RequestForm;




