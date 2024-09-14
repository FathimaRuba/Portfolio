import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="" style={{backgroundColor:' #073642'}}>
      <Container className="text-white">
        <Navbar.Brand href="#home" className="text-secondary">
            <img src="src\assets\logo.png" height={'50vh'} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            {/* <Nav.Link href="#features" className="text-secondary">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-secondary">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="text-secondary">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-secondary">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-secondary">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="text-secondary">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <Link to='/' className="text-secondary" style={{textDecoration:'none'}}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#deets">
            <Link to='/about' className="text-secondary" style={{textDecoration:'none'}}>About</Link>
            </Nav.Link>
            <Nav.Link href="#deets">
                <Link to='/projects' className="text-secondary" style={{textDecoration:'none'}}>Projects</Link>
            </Nav.Link>
            <Nav.Link href="#deets">
                <Link to='/contact' className="text-secondary" style={{textDecoration:'none'}}>Contact</Link>
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes" className="text-secondary">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  )
}

export default Header