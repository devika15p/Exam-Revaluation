// import React from 'react';
// import { Col, Container ,Row} from 'react-bootstrap';

// function ViewRegistration() {
//   return (
//     <Container fluid className=''>
//       <Row>
//         <Col lg={2}></Col>
//         <Col lg={10}>
//           <div>
//             <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>View Registrations</h3>
//             <table className="table table-dark table-bordered" style={{ color: 'white' }}>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>College Name</th>
//                   <th>Branch Name</th>
//                   <th>Subject</th>
//                   <th>Password</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>John Doe</td>
//                   <td>johndoe@example.com</td>
//                   <td>XYZ University</td>
//                   <td>Computer Science</td>
//                   <td>Mathematics</td>
//                   <td>*******</td>
//                 </tr>
//                 <tr>
//                   <td>Jane Smith</td>
//                   <td>janesmith@example.com</td>
//                   <td>ABC College</td>
//                   <td>Mechanical Engineering</td>
//                   <td>Physics</td>
//                   <td>*******</td>
//                 </tr>
//                 <tr>
//                   <td>Michael Brown</td>
//                   <td>michaelb@example.com</td>
//                   <td>LMN Institute</td>
//                   <td>Civil Engineering</td>
//                   <td>Chemistry</td>
//                   <td>*******</td>
//                 </tr>
//                 <tr>
//                   <td>Emily Davis</td>
//                   <td>emilydavis@example.com</td>
//                   <td>PQR University</td>
//                   <td>Electrical Engineering</td>
//                   <td>Biology</td>
//                   <td>*******</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ViewRegistration;

import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';

function ViewRegistration() {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        // Fetch registration data from API
        axios.get('http://localhost:8000/getregistration')
            .then(response => {
                setRegistrations(response.data); // Assuming API returns an array of registration objects
            })
            .catch(error => {
                console.error("Error fetching registrations:", error);
            });
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col lg={2}></Col>
                <Col lg={10}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>View Registrations</h3>
                    <Table className="table-dark table-bordered" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>College Name</th>
                                <th>Branch Name</th>
                                {/* <th>Subject</th> */}
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrations.length > 0 ? (
                                registrations.map((registration, index) => (
                                    <tr key={index}>
                                        <td>{registration.username}</td>
                                        <td>{registration.email}</td>
                                        <td>{registration.college}</td>
                                        <td>{registration.branch}</td>
                                        {/* <td>{registration.subject}</td> */}
                                        <td>{registration.password}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No registrations found.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ViewRegistration;
