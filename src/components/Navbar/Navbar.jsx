import * as React from 'react';

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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { animateScroll as scroll } from 'react-scroll';


import './Navbar.css'
import Logo from '../../assets/images/The-Entertainer-Logo-White.png';



function ResponsiveAppBar({ sections }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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

    const scrollToSection = (targetSectionIndex) => {
        console.log("Trying to scroll")

        console.log(targetSectionIndex)

        scroll.scrollTo(sections.indexOf(targetSectionIndex) * window.innerHeight, {
            duration: 500,
            smooth: true,
        });

    };

    return (
        
        <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 100, position: 'relative', marginBottom: '-90px', paddingTop: '20px'}}>
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

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                        <Button
                            className='nav-text'
                            onClick={console.log("page 1")}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            Home
                        </Button>
                        <Button
                            className='nav-text'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleOpen}
                            // onMouseLeave={handleClose}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            About
                        </Button>
                        <Button
                            className='nav-text'

                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Services
                        </Button>
                        <Button
                            className='nav-text'
                            onClick={console.log("page 1")}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            Contact
                        </Button>
                    </Box>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Typography>
                            <a className='nav-text' href='tel:5738935006'>573-893-5006</a>
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;