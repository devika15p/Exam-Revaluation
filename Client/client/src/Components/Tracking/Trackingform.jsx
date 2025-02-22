import React from 'react';
import { Container, Form, Table, FormGroup, FormCheck, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TrackingForm() {
    const handlePaymentClick = () => {  // Define the function HERE, before you use it
        // Your payment logic goes here
        console.log("Payment button clicked!"); // Example
        // ... any other code you need (API calls, state updates, etc.)
      };

  return (
    <Container fluid className="bg-dark text-white p-4">
      <h2 className="text-center mb-4">Request for Particular Question/s</h2>
      <Form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Question No</th>
              <th>Mark</th>
              <th>Message</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {questionNumbers.map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
                <td>
                  <FormGroup className="d-flex justify-content-around">
                    <FormCheck inline label="A" type="checkbox" id={`a-${index}`} />
                    <FormCheck inline label="B" type="checkbox" id={`b-${index}`} />
                    <FormCheck inline label="C" type="checkbox" id={`c-${index}`} />
                  </FormGroup>
                </td>
                <td>
                  <Form.Control type="text" placeholder="Enter message" />
                </td>
                <td>
                  <Button variant="primary" onClick={() => handlePaymentClick()}>
                    Go to Payment 
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </Container>
  );
}

export default TrackingForm;