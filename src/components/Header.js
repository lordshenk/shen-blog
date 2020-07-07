import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default function Header(props) {
  const [ isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return(
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Shen blog
        </NavbarBrand>
        <NavbarToggler onClick={handleOpen}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto'>
            <NavItem>
              <NavLink tag={Link} to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/blog/'>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/about/'>
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div> 
  )
}