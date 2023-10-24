import React from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import background from '../../assets/images/testimonials.jpg'

const testimonialsData = [
  {
    id: 1,
    name: 'Brandon Dodson',
    text: 'We typically don\'t do reviews, but felt this one was well worth. If you\'re looking for professionals, seek no further. Outstanding service with great communication.',
  },
  {
    id: 2,
    name: 'Thomas Peterson',
    text: 'Cole, Stephen, and the staff are great! From design through the installation of our new home theater, whole home sound system, and wireless network, they were amazing. We couldn\'t be happier with the service and support. We recommend them to everyone who visits our new home.',
  },
  {
    id: 3, 
    name: 'Stephanie Bryan',
    text: 'We love The Entertainer and have used them for our homes, cars, boats, and our small business for 10 years or more. The team is very knowledgeable and they do excellent, high-quality work installing home entertainment systems, security systems, and our vehicles\' stereo systems sound amazing! The technical support and customer service we get from Todd and his team are top-notch, and we would highly recommend their services to anyone.',
  }
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '100vh',
        backgroundImage: `url(${background})`, // Gray background color
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        alignItems: 'center', // Center vertically
        justifyContent: 'space-around', // Center horizontally
        color: 'white'
      }}
    >
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1">
          Read how The Entertainer can bring creativity and dedication to your space.
        </Typography>
      </div>
      <div style={{ padding: '20px', minWidth: '350px' }}>
        <Carousel
          animation="slide" // You can customize the animation type here
          timeout={500} // You can adjust the slide transition duration here (in milliseconds)
          navButtonsAlwaysVisible // Hide navigation buttons
          style={{ background: 'transparent' }} // Set the carousel background to transparent
        >
          {testimonialsData.map((testimonial) => (
            <Paper key={testimonial.id} elevation={0} style={{ padding: 70, background: 'transparent', color: 'white' }}>
              {/* Set a fixed height for each slide */}
              <Typography variant="body1">{testimonial.text}</Typography>
              <Typography variant="h5" style={{ marginTop: 20 }}>{testimonial.name}</Typography>

            </Paper>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
