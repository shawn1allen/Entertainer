import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const AboutUs = () => {
    return (
        <Box className="section about-us" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
            <Typography variant="h2">About Us</Typography>
            <Typography variant="body1" textAlign="center">
                Whether you’re looking for a complete home theater setup, a high-quality sound system, or a comprehensive security solution,
                we have got you covered. Our team of experts is here to assist you in finding the perfect products to meet your needs and bring
                your vision to life. We look forward to helping you create a more comfortable, secure, and enjoyable home environment.
            </Typography>
            <Link to="ourHistory" smooth={true} duration={500}>
                <Button variant="contained" color="primary">Our History</Button>
            </Link>
        </Box>
    );
};

export default AboutUs;
