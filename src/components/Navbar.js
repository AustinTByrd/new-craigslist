import React from 'react';
import {
    Navbar,
    Nav,
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
          <a href="#">Brand</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
          <Button className="navBtn" type="submit">Submit</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarInstance;