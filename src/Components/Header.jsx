import React from 'react'
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:"none",color:"black",fontSize:"30px"}}><i class="fa-solid fa-cart-shopping fa-beat-fade"></i>
            E-Cart
            </Link>
        </Navbar.Brand>
        <Form.Control
              type="text"
              placeholder="Search"
              className=" ms-5 w-25"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">

            <Nav.Link className='btn btn-outline-dark'>
                <Link to={'/wishlist'} style={{color:"black", fontWeight:"bold",textDecoration:"none"}}><i class="fa-solid fa-heart"></i> Wishlist
                <Badge bg="success rounded mx-2">0</Badge>
                </Link>
            </Nav.Link>

            <Nav.Link className='btn btn-outline-dark'>
                <Link to={'/wishlist'} style={{color:"black", fontWeight:"bold",textDecoration:"none"}}><i class="fa-solid fa-cart-shopping"></i> Cart
                <Badge bg="success rounded mx-2">0</Badge>
                </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
