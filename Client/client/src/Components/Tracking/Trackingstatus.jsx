import React from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';

const TrackingStatusPage = () => {
  const data = [
    { username: 'john_doe', subjectName: 'Math', applicationStatus: 'Pending' },
    { username: 'jane_smith', subjectName: 'Science', applicationStatus: 'Approved' },
    { username: 'susan_lee', subjectName: 'History', applicationStatus: 'Rejected' },
   
  ];
  const handlePaymentClick = () => {  // Define the function HERE, before you use it
    // Your payment logic goes here
    console.log("Payment button clicked!"); // Example
    // ... any other code you need (API calls, state updates, etc.)
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mt-4 mb-4">Exam Revaluation Status</h1>
            <Table bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Subject Name</th>
                  <th>Application Status</th>
                  <th>Paper PDF</th>
                  <th>Re-Request for Revaluation</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.username}</td>
                    <td>{row.subjectName}</td>
                    <td>{row.applicationStatus}</td>
                    <td>{row.paperpdf}</td>
                    <td>{row.rerequest}
                    <Button variant="primary" onClick={() => handlePaymentClick()}>
                    Go to Re-Request for Revaluation
                  </Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrackingStatusPage;
