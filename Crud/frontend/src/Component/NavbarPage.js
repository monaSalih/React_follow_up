import { react, Component } from "react";
import {Container,Nav,Navbar ,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavbarPage extends Component {
  render(){
     return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to={'/About'}>React CRUD Servise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/'} className="nav-link"> Home </Link>
          <Link to={'/Create'} className="nav-link">Create</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
 
}

