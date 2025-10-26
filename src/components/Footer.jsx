import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2c3e50',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          © {new Date().getFullYear()} TicketMaster. Built for HNG Internship Stage 2.
        </Typography>
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          Made with ❤️ by Echika Raphael
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;