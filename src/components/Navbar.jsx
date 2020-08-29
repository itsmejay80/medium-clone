import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SignIn from "./SingIn";
import {AuthContext} from "../Auth";
import firebase from 'firebase'
const NavBar = () => {
  const {authuser}=useContext(AuthContext) 
  let buttonTag= authuser ? "Log Out" : "Sign In"
   
  return ( <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Medium Clone</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">Popular</Nav.Link>
        <Nav.Link href="#pricing">Latest</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
      <DropdownButton
        id="dropdown-item-button"
        title={buttonTag}
        // onClick={()=>{
        //   firebase.auth().signOut()
        // }}
      >
        <Dropdown.Item as="button">
          <a href="/addPost" style={{ textDecoration: "none" }}>
            New Story
          </a>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <a href="/yourStories" style={{ textDecoration: "none" }}>
            Your Stories
          </a>
        </Dropdown.Item>
      </DropdownButton>
    </Navbar>
  </div> );
}
 
export default NavBar;


