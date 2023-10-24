import React, { useState } from 'react';

//MUI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import { Link as ScrollLink } from 'react-scroll';


import './Navbar.css'
import Logo from '../../assets/images/The-Entertainer-Logo-White.png';
import NavScroll from '../NavScroll';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



function ResponsiveAppBar({ sections }) {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const handleAboutHover = () => {
        setAboutDropdownOpen(true);
    };

    const handleAboutLeave = () => {
        setAboutDropdownOpen(false);
    };

    const handleServicesHover = () => {
        setServicesDropdownOpen(true);
    };

    const handleServicesLeave = () => {
        setServicesDropdownOpen(false);
    };

    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const pages = ['Products', 'Pricing', 'Blog'];

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // Displays the list in the hamburger menu
    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                background: '#333', minHeight: '100vh'
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <Button
                                component="a"
                                href={`/${text.toLowerCase()}`} // Set your desired links here
                                className='nav-text'
                                sx={{ color: 'black' }} // Set the text color
                            >
                                {text}
                            </Button>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <HideOnScroll>
            <AppBar sx={{ padding: '10px', backgroundColor: '#272833', zIndex: '10001' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={Logo} alt="Logo" style={{ height: '50px' }} />

                        </Typography>

                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'right' }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer('right', true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', color: 'white' } }}>
                            <NavScroll title="Home" to="home" />

                            <ScrollLink to="aboutUs" smooth={true} duration={1000} style={{ color: 'white' }}>
                                <div className="dropdown" onMouseEnter={handleAboutHover} onMouseLeave={handleAboutLeave}>
                                    <Button className={`dropbtn ${aboutDropdownOpen ? 'active' : ''} nav-text`} >
                                        About
                                    </Button>
                                    {aboutDropdownOpen && (
                                        <div className="dropdown-content" style={{ color: 'white' }}>
                                            <NavScroll title="Our History" to="ourHistory" />
                                            <NavScroll title="Testimonials" to="testimonials" />
                                            <NavScroll title="FAQ's" to="faqs" />
                                            <NavScroll title="Partners" to="partners" />
                                            <NavScroll title="Quality Service" to="qualityService" />
                                        </div>
                                    )}
                                </div>
                            </ScrollLink>

                            <ScrollLink to="audioVideo" smooth={true} duration={1000} style={{ color: 'white' }}>
                                <div className="dropdown" onMouseEnter={handleServicesHover} onMouseLeave={handleServicesLeave}>
                                    <Button className={`dropbtn ${servicesDropdownOpen ? 'active' : ''} nav-text`}>
                                        Services
                                    </Button>
                                    {servicesDropdownOpen && (
                                        <div className="dropdown-content">
                                            <NavScroll title="Audio / Video" to="audioVideo" />
                                            <NavScroll title="Marine / Car Audio" to="marineCar" />
                                            <NavScroll title="Security / Cameras" to="surveillance" />
                                            <NavScroll title="Lighting / Shades" to="automation" />
                                        </div>
                                    )}
                                </div>
                            </ScrollLink>


                            <NavScroll title="Contact" to="contact" />
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Typography>
                                <a className='nav-text' href='tel:5738935006'>573-893-5006</a>
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar></HideOnScroll>
    );
}
export default ResponsiveAppBar;