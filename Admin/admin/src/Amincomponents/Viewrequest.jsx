import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

function ViewRequests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch data from backend
        axios.get('http://localhost:8000/getrequest')
            .then(response => {
                setRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching requests:', error);
            });
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col lg={2}></Col>
                <Col lg={10}>
                    <h3 className="text-center my-4 text-white">View Requests</h3>
                    <Table className="table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>College</th>
                                <th>Branch</th>
                                <th>Subject</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map((request, index) => (
                                    <tr key={index}>
                                        <td>{request.name}</td>
                                        <td>{request.email}</td>
                                        <td>{request.mobile}</td>
                                        <td>{request.college}</td>
                                        <td>{request.branch}</td>
                                        <td>{request.subject}</td>
                                        <td>{request.reason}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No requests found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ViewRequests;
