import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar>
    <Navbar.Brand href="#home">Community Project</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Beumgoo Kim</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar