import React from "react";
import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
     
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height:"100px"}}>
    <Container>
    <Navbar.Brand href="#home">SpinX</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">
                <li>Home</li>
              </Nav.Link>
        <Nav.Link href="#">Expertise</Nav.Link>
        <Nav.Link href="#">Process</Nav.Link>
        <NavDropdown title="Resources" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#">Guides</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#footer">
                <li>Contact us</li>
              </Nav.Link>
       
      </Nav>
      
    </Navbar.Collapse>
    </Container>
    
  </Navbar> 
  </div>
  );
}
export default NavBar;