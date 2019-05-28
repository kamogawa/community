import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Nav = () => (
  <Navbar>
    <Navbar.Brand><Link to="/">Community Project</Link></Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Link to="/about">About</Link>
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Link to="/add">Add</Link>
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Link to="/commnet">Commnet</Link>
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Beumgoo Kim</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
)

export default Nav