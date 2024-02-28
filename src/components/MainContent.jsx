import React from 'react';
import Chatbot from './Chatbot'; // Adjust the import path according to your file structure
import Pricing from './Pricing';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MainContent() {
  return (
    <div>
      <div className="text-above"> {/* Add your styling */}
        {/* Insert your text for above the chatbot here */}
        <h1>Finde deine öffentliche Förderung! </h1>
        <h6>Durchforste mit nur einem Klick tausende Förderungen von Bund, Länder und EU.</h6>
        <div className="small-icon">
              <img src="https://i.ibb.co/PmBnjfs/EU.jpg" alt="Icon 1" style={{ maxWidth: '35px', maxHeight: '35px', margin: "10px" }} />
              <img src="https://i.ibb.co/kJ11H2z/laender.png" alt="Icon 2" style={{ maxWidth: '35px', maxHeight: '35px', margin: "10px" }} />
              <img src="https://i.ibb.co/sbYqRLm/adler.png" alt="Icon 3" style={{ maxWidth: '35px', maxHeight: '35px', margin: "10px" }} />
        </div>
      </div>
      <Chatbot />
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Pricing
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Pricing />
    </div>
  );
}

export default MainContent;
