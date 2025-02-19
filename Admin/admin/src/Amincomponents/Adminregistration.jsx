import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Registration = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const data = {
        name: name,
        email: email,
        password: password
    }

    // const handleSubmit = () => {
    //     axios.post("http://localhost:8000/adminregistration", data)
    //         .then(console.log(data))
    //         .catch((err) => console.log(err))
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/adminregistration", data)
            .then((response) => {
                console.log("Response:", response.data);
              
                navigate("/admindashboard");
            })
            .catch((err) => console.log("Error:", err));
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    background: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h3 className="text-center mb-4"> Admin Registration</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        style={{ borderRadius: "5px" }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-100 mt-3"
                        style={{ borderRadius: "5px" }}
                        onClick={() => navigate("/")}
                    >
                        Get Back to Login
                    </Button>
                </Form>

            </div>
        </Container>
    )
}

export default Registration
