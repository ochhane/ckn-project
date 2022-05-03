import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
function Navbars() {

  return (
    [
      
      <div className="">
        <div className="">
          <div className="row">
            <Navbar className="shadow-1" bg="dark"  expand="lg" >
              <Container >
                <Navbar.Brand className="col-1" href="#home"><a href="index.html"><img src="images/logo.png" alt="Artica" /></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto text-white col-8 offset-3">
                    
                    <NavDropdown title="Home" id="basic-nav-dropdown" className="text-light">
                      <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-light" href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Reservation</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#home">Gallery</Nav.Link>
                  <NavDropdown title="Blog" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Contact</Nav.Link>
              <button className="btn btn-outline-white text-white border-white">Reservation</button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            


          </div>
        </div>
      </div>
    ]
  );
}

export default Navbars;