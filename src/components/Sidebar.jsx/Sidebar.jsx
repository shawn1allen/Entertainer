import React from 'react';
import Drawer from '@mui/material/Drawer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: '180px',
                backgroundColor: 'red',
            }}
        >
            <div style={{ width: '1px', height: '30%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: '100px', left: '50%' }} />
            <FacebookIcon color="primary" style={{ cursor: 'pointer', position: 'absolute', top: '45%' }} />
            <InstagramIcon color="primary" style={{ cursor: 'pointer', position: 'absolute', top: '55%' }} />
            <div style={{ width: '1px', height: '30%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', bottom: '100px', left: '50%' }} />
        </Drawer>
    );
};

export default Sidebar;
