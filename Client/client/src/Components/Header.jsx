import React from 'react';
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import examlogo1 from "../Assests/examlogo1.png"

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="white" variant="dark" expand="lg" className='p-0'>
                <Container>
                    <img
                        src={examlogo1}
                        alt="Logo"
                        className="d-block p-0"
                        width="90" />
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" className='text-black fs-4'><b>Home</b></Nav.Link>
                            <Nav.Link as={Link} to="/about" className='ms-4 text-black fs-4'><b>About</b></Nav.Link>
                            <Nav.Link as={Link} to="/request" className='ms-4 text-black fs-4'><b>Request</b></Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='ms-4 text-black fs-4'><b>Contact</b></Nav.Link>
                        </Nav>

                        {/* Login Navigation */}
                        <Nav.Link as={Link} to="/login" className="text-black mt-2">
                            <FaUser size={30} className="me-1 text-black mb-2" /> <b>Login</b>
                        </Nav.Link>

                        {/* User Dropdown on the Right */}
                        <Dropdown align="end">
                            <Dropdown.Toggle as="span" id="user-dropdown" className="p-0 ms-5">
                                <FaUserCircle size={35} className="text-black" style={{ cursor: "pointer" }} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-3 text-center">
                                <h6 className="mb-0">John Doe</h6>
                                <small className="text-muted">johndoe@example.com</small>
                                <Dropdown.Divider />

                                <Button variant="primary" className="w-100 mb-2"><Nav.Link as={Link} to="/tracking" ><b>Tracking</b></Nav.Link></Button>
                                <Button variant="secondary" className="w-100 mb-2"><Nav.Link as={Link} to="/editprofile" ><b>Edit</b></Nav.Link></Button>
                                <Button variant="danger" className="w-100"><Nav.Link as={Link} to="/login" ><b>Logout</b></Nav.Link></Button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
