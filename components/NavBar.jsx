import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Home from './components/Home';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
    <Container>
    
    <Nav className="me-auto">
      
      <NavLink to="/home"><Button className='mx-5'>Home</Button></NavLink>
 
      <NavLink to="/products"><Button>Product</Button></NavLink>
        
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
</>
 

    )
}

export default NavBar