import React, {useState,useEffect} from "react";
import Login from "./Login";
import NavbarDef from "./App.css"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
class Navbars extends React.Component {
  state = {
    isNavActive:false,
  };
  // add = () => {
  //   this.setState(st => ({ isNavActive: !st.isNavActive }));
  // }
 
  render(){
    const setNavbar = () => {
      
      if(window.scrollY >= "60"){
        this.setState({
          isNavActive: true
        })
      }
      else{
        this.setState({
          isNavActive: false
        })
      }
    };
    window.addEventListener('scroll',setNavbar);
    const { isNavActive } = this.state;
    return([
      <div className="">
        <div className="">
          <div className="row">
            <Navbar className={`${isNavActive ? "Navbarsticky" : "NavbarDef"}`} expand="lg"  >
              <Container >
                <Nav.Link className="col-1"  href="#home"><a href="index.html"><img style={{width:"150px",height:"100px"}} src="images/png.png" alt="Artica" /></a></Nav.Link>
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
                    <NavDropdown title={<span className="text-light my-auto">Chai</span>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="text-light" href="/Login">Gallery</Nav.Link>
                    <NavDropdown title={<span className="text-light my-auto">Nashedi</span>} id="basic-nav-dropdown">
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

}

export default Navbars;