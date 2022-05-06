import React from 'react'
import {Navbar,Nav,Form,Button,Container,FormControl} from "react-bootstrap"
import  logo from "./download.png"
import "./navbar.css"
import { FaSearch } from "react-icons/fa";


export default function Navbarcomp() {
  return (<div>
  <Navbar className="navbar sticky-top py-3" expand="lg">
  <Container >
    <Navbar.Brand href="#"><img src={logo} alt="" className="logo"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button><FaSearch/></Button>
      </Form>
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Stores</Nav.Link>
        <Nav.Link href="#action2">Categories</Nav.Link>
        <Nav.Link href="#action2">Blogs</Nav.Link>
        <Nav.Link href="#action2">Deals</Nav.Link>
       
      </Nav>
    
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}
