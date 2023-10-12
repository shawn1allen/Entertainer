import React from 'react';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';

function ScrollButton({ to, buttonText }) {
  return (
    <ScrollLink to={to} smooth={true} duration={2000}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          minWidth: '250px',
          marginTop: '20px',
          backgroundColor: 'transparent',
          border: '2px solid red',
          color: 'white',
          '&:hover': {
            backgroundColor: 'transparent',
            border: '2px solid red',
            color: 'red',
          },
        }}
      >
        {buttonText}
      </Button>
    </ScrollLink>
  );
}

export default ScrollButton;