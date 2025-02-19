import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


function Sidebar() {
  return (

    <Container fluid>
      <Row>
        <Col lg={2} className='bg-black vh-100 ' style={{ position: "fixed" }}>
          <div className="sidebar bg-dark text-white" style={{ width: '250px', height: '100vh' }}>
            <div className="sidebar-header text-center py-4">
              <h4>Exam Revaluation</h4>
            </div>
            <ul className="list-unstyled">
              <li>
                <Link to="/dashboard" className="text-white p-3 d-block">Dashboard</Link>
              </li>
              <li>
                <Link to="/viewregistration" className="text-white p-3 d-block">View all registration</Link>
              </li>
              <li>
                <Link to="/results" className="text-white p-3 d-block">View Results</Link>
              </li>
            </ul>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
