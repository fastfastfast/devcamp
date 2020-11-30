import { Navbar, Container, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import './NavBar.css';
import { FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false)
    const handleShow2 = () => setShow1(true);
    const handleClose2 = () => setShow1(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* <Link href="#home" class="nav-link" to="/">Home</Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link class="nav-link" to="/"> Home</Link>
                        <Link class="nav-link" to="/play">Play</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" onClick={handleShow2}>Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" onClick={handleShow}>
                            Register
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group controlId="formGroupEmail" className="layout">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" className="layout">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword" className="layout">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword" className="layout">
                        <Form.Label>ConfirmPassword</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        ตกลง
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose2}>
                <Modal.Header >
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group controlId="formGroupEmail" className="layout">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword" className="layout">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        ยกเลิก
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                        ตกลง
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavBar