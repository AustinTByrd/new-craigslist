import React from 'react';
import {
    Navbar,
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
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarInstance;