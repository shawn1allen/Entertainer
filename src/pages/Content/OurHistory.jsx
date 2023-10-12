import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ScrollButton from '../../components/ScrollButton';
import Image from '../../assets/images/40Years.png';
import backgroundImage2 from '../../assets/images/shutterstock_1951633186-2-1920x1080.webp'

const OurHistory = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            className="section about-us"
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10% 0 20%',
                flexWrap: 'wrap',
                minHeight: '100vh',
            }}
        >
            {/* Parallax Background Image */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -15,
                }}
            />

            {/* Content */}
            <div style={{ width: '100%', flexBasis: '48%', minWidth: '200px', marginBottom: '20px' }}>
                <img src={Image} alt="40 Years" style={{ maxWidth: '400px', width: '100%', height: 'auto', marginTop: '30px' }} />
            </div>
            <div style={{ width: '100%', flexBasis: '48%', minWidth: '200px', marginBottom: '20px' }}>
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
                    Our History
                </Typography>
                <Typography variant="body1" style={{ marginTop: '20px', zIndex: 10, color: '#ffffffbf', maxWidth: '600px' }}>
                    <p>
                        The Entertainer is a leading technology company, known for providing
                        top-of-the-line home theater and audio installations for residents,
                        businesses, and institutions.
                    </p>
                    <p>
                        As a company, we are committed to staying
                        ahead of the curve and offering the latest and greatest in home entertainment
                        technology.
                    </p>
                    <p>
                        Our focus on customer satisfaction has driven our growth and
                        success over the years, and we look forward to continuing to evolve and
                        meet the changing needs of the market.
                    </p></Typography>



                <ScrollButton to="testimonials" buttonText="Testimonials" />
            </div>
        </Box>
    );
};

export default OurHistory;