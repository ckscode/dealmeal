import React from 'react'
import {Navbar,Nav,Form,Button,Container,FormControl, Breadcrumb} from "react-bootstrap"
import  logo from "./download.png"
import {useState} from "react"
import Breadcrump from './components/Breadcrump'
import "./components/navbar.css"
import { FaSearch } from "react-icons/fa"
function StickyNav() {
    const [show,SetShow]=useState(false)
    const scroll=()=>{
        if(window.scrollY>=409){
            SetShow(true)
        }else{
            SetShow(false)
        }
    }
    window.addEventListener('scroll',scroll)
  return (
    <div > <Navbar className="navbar sticky-top py-3" expand="lg">
    <Container >
      <Navbar.Brand href="#"><img src={logo} alt="" className="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className={show?"d-flex navsearch":'d-flex d-none navsearch'}>
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button><FaSearch/></Button>
        </Form>
        <div className={show?"d-none":'para'}><h3>Para to be displayed</h3></div>
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
       <br/><br/><br/>
      <Breadcrump/>
      <div className="w-100 bodypage">
      <input type="search"  placeholder='search'></input><button><FaSearch/></button></div></div>
  )
}

export default StickyNav