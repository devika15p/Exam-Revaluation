import React, { useState } from 'react';
import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SimpleForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Please enter a valid email.');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      return;
    }

    axios
      .post('http://localhost:8000/adminlogin', { email, password })
      .then((response) => {
        alert('Login successful!');
        setIsLoggedIn(true);
        navigate('/admindashboard');

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          console.log('Token saved to local storage');
        } else {
          console.error('Token not found in response.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        // setError('Invalid email or password. Please try again.');
      });
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center bg-light" style={{ height: '100vh' }}>
      <Card className="shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '12px' }}>
        <Card.Body>
          <h3 className="text-center mb-4">Admin Login</h3>
          {error && <Alert variant="danger" className="text-center">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" style={{ borderRadius: '6px' }}onClick={() => navigate('/admindashboard')}>
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <Button variant="link" className="p-0" onClick={() => navigate('/adminregistration')}>Register here</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SimpleForm;
