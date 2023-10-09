import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import background from '../../assets/images/shutterstock_253662781-1920x1080.webp'

const Home = () => {
    return (
        <Box className="section home"
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                zIndex: -10
            }}>
            <div
                style={{
                    zIndex: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.25))", // Linear gradient for background color
                }}
            ></div>

            <Typography variant="h1" zIndex={10} fontFamily={"fira-sans"}>Connected Spaces, Flawless Integrations<span style={{ color: 'red' }}>.</span></Typography>
            <Typography variant="body1" textAlign="center" zIndex={10}>
                Welcome to The Entertainer! We are your one-stop-shop for all things home entertainment, audio, and security.
                Our goal is to provide you with the best solutions to enhance your home theater experience, elevate your sound system,
                and keep your home secure with our state-of-the-art security cameras and systems.
            </Typography>
            <Link to="aboutUs" smooth={true} duration={500}>
                <Button variant="contained" color="primary">Learn More</Button>
            </Link>
        </Box>
    );
};

export default Home;
