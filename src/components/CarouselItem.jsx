import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import './CarouselItem.css'; // Import the CSS file
import SeeProjectButton from './SeeProjectButton';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const CarouselItem = ({ serviceData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [background1, setBackground1] = useState('')
    const [background2, setBackground2] = useState('')

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % 2);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + 2) % 2);
    };

    useEffect(() => {
        const fetchImage = async () => {
            const imageModule1 = await import(`../assets/images/${serviceData.page1.backgroundImage}`);
            const imageModule2 = await import(`../assets/images/${serviceData.page2.backgroundImage}`);

            const imagePath1 = imageModule1.default;
            const imagePath2 = imageModule2.default;

            console.log(imagePath1)
            console.log(imagePath2)

            setBackground1(imagePath1)
            setBackground2(imagePath2)
        };

        fetchImage();

        // Clean up function
        return () => {
            // Any cleanup code if needed
        };
    }, []);

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className=''>

            </div>

            <div className="carousel-container">
                <Box sx={{ 
                    
                    '&::before': {
                        content: '""', // Create a pseudo-element for the background
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${background1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(60%)', // Apply filter to the pseudo-element
                        zIndex: -1,
                    },
                    }} className={`carousel-page ${currentIndex === 0 ? 'current' : 'not-current'}`}>
                    <Button variant="contained" className="arrow left-arrow" disabled={currentIndex === 0} onClick={handlePrev}>
                        <ArrowBack/>
                    </Button>
                    <div className='carousel-text-container'>
                        <Typography variant="h2" className="carousel-title">
                            {serviceData.page1.heading}
                        </Typography>
                        <Typography variant="body2" className="carousel-text">
                            {serviceData.page1.text}
                        </Typography>
                        <SeeProjectButton to="/" />
                    </div>
                    <Button variant="contained" className="arrow right-arrow" disabled={currentIndex !== 0} onClick={handleNext}>
                        <ArrowForward/>
                    </Button>
                </Box>
                <Box sx={{ 
                    
                    '&::before': {
                        content: '""', // Create a pseudo-element for the background
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${background2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(60%)', // Apply filter to the pseudo-element
                        zIndex: -1,
                    },}} className={`carousel-page ${currentIndex === 0 ? 'not-current' : 'current'}`}>
                    <Button variant="contained" className="arrow left-arrow" disabled={currentIndex === 0} onClick={handlePrev}>
                    <ArrowBack/>
                    </Button>
                    <div className='carousel-text-container'>
                        <Typography variant="h2" className="carousel-title">
                            {serviceData.page2.heading}
                        </Typography>
                        <Typography variant="body2" className="carousel-text">
                            {serviceData.page2.text}
                        </Typography>
                        <SeeProjectButton to="/" />
                    </div>

                    <Button variant="contained" className="arrow right-arrow" disabled={currentIndex !== 0} onClick={handleNext}>
                    <ArrowForward/>
                    </Button>
                </Box>
            </div>


        </div>
    );
};

export default CarouselItem;
