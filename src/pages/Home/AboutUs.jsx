import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import ScrollButton from '../../components/ScrollButton';
import Image from '../../assets/images/40Years.png';

const AboutUs = () => {
    return (
        <Box
            className="section about-us"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#272833',
                padding: '0 10% 0 20%',
                flexWrap: 'wrap',
                minHeight: '100vh',
                '& > div': {
                    width: '100%',
                    flexBasis: '48%',
                    minWidth: '200px', // Set a minimum width for wrapping to occur
                    marginBottom: '20px',
                },
            }}
        >
            <div>
                <img src={Image} alt="40 Years" style={{ maxWidth: '400px', width: '100%', height: 'auto', marginTop: '30px' }} />
            </div>
            <div>
                <Typography
                    variant="h1"
                    sx={{
                        marginTop: '20px',
                        zIndex: 10,
                        color: '#ffffffff',
                        fontFamily: "fira-sans",
                        fontSize: {
                            xs: '2rem',
                            sm: '3.5rem',
                            md: '5rem',
                            lg: '6rem',
                            xl: '7rem',
                        }
                    }}
                >
                    About Us
                </Typography>
                <Typography variant="body1" style={{ marginTop: '20px', zIndex: 10, color: '#ffffffbf', maxWidth: '600px' }}>
                    Whether you’re looking for a complete home theater setup, a high-quality sound system, or a comprehensive security solution,
                    we have got you covered. Our team of experts is here to assist you in finding the perfect products to meet your needs and bring
                    your vision to life. We look forward to helping you create a more comfortable, secure, and enjoyable home environment.
                </Typography>

                <ScrollButton to="testimonials" buttonText="Testimonials" />
                <ScrollButton to="commitment" buttonText="Commitment to Quality" />
            </div>
        </Box>

    );
};

export default AboutUs;
