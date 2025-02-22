// import React from 'react';
// import { Container, Form, Table, FormGroup, FormCheck, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function TrackingForm() {
//   // Define the question numbers
//   const questionNumbers = [1, 2, 3, 4, 5]; // Example array, modify as needed

//   const handlePaymentClick = () => {  
//     console.log("Payment button clicked!"); // Example action
//   };

//   return (
//     <Container fluid className="bg-dark text-white p-4">
//       <h2 className="text-center mb-4">Request for Particular Question/s</h2>
//       <Form>
//         <Table striped bordered hover variant="dark">
//           <thead>
//             <tr>
//               <th>Question No</th>
//               <th>Mark</th>
//               <th>Message</th>
//               <th>Payment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questionNumbers.map((question, index) => (
//               <tr key={index}>
//                 <td>{question}</td>
//                 <td>
//                   <FormGroup className="d-flex justify-content-around">
//                     <FormCheck inline label="A" type="checkbox" id={`a-${index}`} />
//                     <FormCheck inline label="B" type="checkbox" id={`b-${index}`} />
//                     <FormCheck inline label="C" type="checkbox" id={`c-${index}`} />
//                   </FormGroup>
//                 </td>
//                 <td>
//                   <Form.Control type="text" placeholder="Enter message" />
//                 </td>
//                 <td>
//                   <Button variant="primary" onClick={() => handlePaymentClick()}>
//                     Go to Payment 
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Form>
//     </Container>
//   );
// }

// export default TrackingForm;

import React, { useState } from 'react';
import { Container, Form, Table, FormGroup, FormCheck, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TrackingForm() {
  const questionNumbers = [1, 2, 3, 4, 5]; // Example questions
  const initialPayments = questionNumbers.map(() => 0);
  const [payments, setPayments] = useState(initialPayments);
  const [showModal, setShowModal] = useState(false); // State for popup visibility

  const handleCheckboxChange = (rowIndex, event) => {
    const isChecked = event.target.checked;
    const newPayments = [...payments];

    if (isChecked) {
      newPayments[rowIndex] += 100;
    } else {
      newPayments[rowIndex] -= 100;
    }

    setPayments(newPayments);
  };

  const handlePaymentClick = () => {
    setShowModal(true); // Show the popup
  };

  const handleClose = () => {
    setShowModal(false); // Hide the popup
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questionNumbers.map((question, index) => (
              <tr key={index}>
                <td>{question}</td>
                <td>
                  <FormGroup className="d-flex justify-content-around">
                    <FormCheck 
                      inline label="A" type="checkbox" 
                      onChange={(e) => handleCheckboxChange(index, e)}
                    />
                    <FormCheck 
                      inline label="B" type="checkbox" 
                      onChange={(e) => handleCheckboxChange(index, e)}
                    />
                    <FormCheck 
                      inline label="C" type="checkbox" 
                      onChange={(e) => handleCheckboxChange(index, e)}
                    />
                  </FormGroup>
                </td>
                <td>
                  <Form.Control type="text" placeholder="Enter message" />
                </td>
                <td>₹ {payments[index]}</td>
                <td>
                  <Button variant="primary" onClick={handlePaymentClick}>
                    Go to Payment 
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>

      {/* Payment Success Popup Modal */}
      <Modal show={showModal} onHide={handleClose} centered backdrop="static">
        <Modal.Body className="text-center">
          <h4 className="text-success fw-bold">Payment Successful 🎉</h4>
          <p>Your payment has been processed successfully!</p>
          <Button variant="success" onClick={handleClose} className="mt-3 px-4">
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default TrackingForm;
