import React, { useState } from 'react'
import "./header.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import InstagramIcon from '@mui/icons-material/Instagram';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
        <header className='header-global'>
        <Navbar color="orange" light expand="md" className='container'>
        <NavbarBrand href="/"><h2 className='text-white' id='nav-title'>Jane Doe</h2></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/"><FacebookIcon/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <TwitterIcon/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <GitHubIcon/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <LinkedInIcon/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <InstagramIcon/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </header>
        
    </div>
  )
}

export default Header