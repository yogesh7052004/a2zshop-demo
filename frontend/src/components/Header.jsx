import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
// import logo from '../assets/logo.png';
import React from 'react'

const Header = () => {
   return (
      <header>
         <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
            {/* Lg means making it responsive */}
            <Container>
               <LinkContainer to='/'>
                  <Navbar.Brand>
                     {/* <img src={logo} alt='ProShop' /> */}
                     A2Z
                  </Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className="ms-auto">
                     <LinkContainer to='/cart'>
                        <Nav.Link>
                           <FaShoppingCart /> Cart
                        </Nav.Link>
                     </LinkContainer>
                     <LinkContainer to='/login'>
                     <Nav.Link href = '/login'>
                        <FaUser /> Sign in
                     </Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   )
}

export default Header