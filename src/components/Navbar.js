import React from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

const NavbarInstance = () => (
  <div className="App">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#"><b>BRYANS</b>LIST</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullRight>
          <Button type="submit">Submit</Button>
        </Navbar.Form>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">My Account</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarInstance;