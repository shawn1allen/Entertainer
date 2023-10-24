import React from 'react';
import Drawer from '@mui/material/Drawer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';
import './Sidebar.css'
import Button from '@mui/material/Button';

const Sidebar = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <div className='container'>
                <div className='line'></div>
                <a href='https://www.facebook.com/TheEntertainerJC' target='_blank'>
                    <FacebookIcon className='icon' />
                </a>
                <a href='https://www.instagram.com/theentertainerjc/' target='_blank' >
                    <InstagramIcon className='icon' />
                </a>
                <div className='line'></div>
            </div>

        </Box>
    );
};

export default Sidebar;
