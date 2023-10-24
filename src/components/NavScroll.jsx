import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from '@mui/material/Button';
import './Navbar/Navbar.css'

const NavScroll = ({ title, to }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={1000} >
      <Button className="nav-text">
        {title}
      </Button>
    </ScrollLink>
  );
};

export default NavScroll;