import React, { useState } from "react";
import { Form, Button, Container, Card, Row, Col, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData; // ✅ Extract values from formData

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    setLoading(true); // ✅ Show loading spinner

    axios
      .post("http://localhost:8000/login", { email, password })
      .then((response) => {
        alert("Login successful!");

        // ✅ Store token in localStorage if available
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          console.log("Token saved to local storage");
        } else {
          console.error("Token not found in response.");
        }

        navigate("/"); // ✅ Redirect after login
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("An error occurred while logging in. Please try again.");
      })
      .finally(() => {
        setLoading(false); // ✅ Hide loading spinner
      });
  };

  return (
    <Container fluid className="bg-black vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center w-100">
        <Col md={5}>
          <Card className="p-4 bg-secondary text-white shadow-lg">
            <Card.Title className="text-center mb-4">Sign In</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark text-white border-0"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-dark text-white border-0"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group controlId="remember" className="mb-3 d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="me-2"
                />
                <Form.Label className="mb-0">Remember Me</Form.Label>
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button variant="primary" type="submit" disabled={loading} className="w-100">
                {loading ? <Spinner animation="border" size="sm" /> : "Sign In"}
              </Button>

              <div className="text-center mt-3">
                <small>
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-warning">Sign up</Link>
                </small>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
