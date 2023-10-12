import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import background from '../../assets/images/shutterstock_253662781-1920x1080.webp'
import PlayButton from '../../components/PlayButton/PlayButton';
import ScrollButton from '../../components/ScrollButton';

const Home = () => {
    return (
        <Box
            className="section home"
            sx={{
                position: 'relative', // Set position to relative
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                color: '#fff',
                zIndex: 0,
                padding: '0 10% 0 20%',
                '&::before': {
                    content: '""', // Create a pseudo-element for the background
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(50%)', // Apply filter to the pseudo-element
                    zIndex: -1,
                },
            }}
        >
            

            <PlayButton />

            <Typography
                variant="h1"
                sx={{
                    marginTop: '20px',
                    zIndex: 10,
                    fontFamily: "fira-sans",
                    fontSize: {
                        xs: '2rem', // Default font size for extra small screens (mobile devices)
                        sm: '3.5rem', // Font size for small screens (tablets)
                        md: '5rem', // Font size for medium screens (desktops)
                        lg: '6rem', // Font size for large screens (large desktops)
                        xl: '7rem', // Font size for extra large screens (extra large desktops)
                    }
                }}
            >
                Connected Spaces, Flawless Integrations<span style={{ color: 'red' }}>.</span>
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px', zIndex: 10, maxWidth: '600px' }}>
                Welcome to The Entertainer! We are your one-stop-shop for all things home entertainment, audio, and security.
                Our goal is to provide you with the best solutions to enhance your home theater experience, elevate your sound system,
                and keep your home secure with our state-of-the-art security cameras and systems.
            </Typography>
            <ScrollButton to="contact" buttonText="Start Your Project" style={{ marginBottom: '10px' }}/>
        </Box>
    );
};

export default Home;
