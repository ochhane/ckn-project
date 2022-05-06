import React from "react";
import Login from "./Login";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
function Navbars() {

  return (
    [

      <div className="">
        <div className="">
          <div className="row">
            <Navbar className="shadow-1" bg="black" style={{ float: "right", marginTop: "41px" }} expand="lg"  >
              <Container >
                <Navbar.Brand className="col-1" href="#home"><a href="index.html"><img src="images/logo.png" alt="Artica" /></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto text-white col-8 offset-3">

                    <NavDropdown title={<span className="text-light my-auto">Home</span>} id="basic-nav-dropdown" style={{ color: "white !important" }} className="whiteColor text-white">
                      <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-light" href="/Signup">About</Nav.Link>
                    <Nav.Link className="text-light" href="#link">Reservation</Nav.Link>
                    <NavDropdown title={<span className="text-light my-auto">Home</span>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-light" href="#home">Gallery</Nav.Link>
                    <NavDropdown title={<span className="text-light my-auto">Home</span>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-light my-auto">Home</span>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-light" href="#home">Contact</Nav.Link>
                    <button className="btn btn-outline-white text-white border-white">Reservation </button>
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