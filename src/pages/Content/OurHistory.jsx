import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const OurHistory = () => {
    return (
        <Box className="section our-history" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ccc' }}>
            <Typography variant="h2">Our History</Typography>
            <Typography variant="body1" textAlign="center">
                The Entertainer is a leading technology company, known for providing top-of-the-line home theater and audio installations
                for residents, businesses, and institutions. As a company, we are committed to staying ahead of the curve and offering the
                latest and greatest in home entertainment technology. Our focus on customer satisfaction has driven our growth and success
                over the years, and we look forward to continuing to evolve and meet the changing needs of the market.
            </Typography>
            <Link to="home" smooth={true} duration={500}>
                <Button variant="contained" color="primary">Back to Top</Button>
            </Link>
        </Box>
    );
};

export default OurHistory;
