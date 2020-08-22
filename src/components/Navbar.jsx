import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class NavBar extends React.Component {
  state = {
    buttonTag: "",
    isLoggedIn: false,
  };
  componentDidMount() {
    this.state.isLoggedIn
      ? this.setState({ buttonTag: "Log Out" })
      : this.setState({ buttonTag: "Sign Up" });
  }
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Medium Clone</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Popular</Nav.Link>
            <Nav.Link href="#pricing">Latest</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <DropdownButton
            id="dropdown-item-button"
            title={this.state.buttonTag}
          >
            <Dropdown.Item as="button">
              <a href="/addPost" style={{ textDecoration: "none" }}>
                New Story
              </a>
            </Dropdown.Item>
            <Dropdown.Item as="button">
              <a href="/liked" style={{ textDecoration: "none" }}>
                Liked
              </a>
            </Dropdown.Item>
          </DropdownButton>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
