import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap'

function Sidebar() {
  return (

    <Container fluid>
      <Row>
        <Col lg={3} className='p-0'>
          <div className="sidebar bg-dark text-white" style={{ width: '250px', height: '100vh',position: "fixed"}}>
            <div className="sidebar-header text-center py-4 ">
              <h4>Exam Revaluation</h4>
            </div>
            <ul className="list-unstyled ">
              <li>
                <Link to="/dashboard" className="text-white p-3 d-block text-decoration-none"><h5>Dashboard</h5></Link>
              </li>
              <li>
                <Link to="/viewregistration" className="text-white p-3 d-block text-decoration-none"><h5>View all registration</h5></Link>
              </li>
              <li>
                <Link to="/viewrequest" className="text-white p-3 d-block text-decoration-none"><h5>View all request</h5></Link>
              </li>
              <li>
                <Link to="" className="text-white p-3 d-block text-decoration-none"><h5>Revaluation Status</h5></Link>
              </li>
              <li>
                <Link to="/" className="text-white p-3 d-block text-decoration-none"><h5>Logout</h5></Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
