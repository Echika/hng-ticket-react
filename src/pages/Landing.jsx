import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  ConfirmationNumber,
  Speed,
  Security,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '150px',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f5f5f5' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          },
        }}
      >
        {/* Decorative Circles */}
        <Box
          sx={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: '-100px',
            right: '10%',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            bottom: '100px',
            left: '5%',
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '3.5rem' },
              }}
            >
              Manage Your Tickets Effortlessly
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              Streamline your support workflow with our powerful ticket management system.
              Track, organize, and resolve issues faster than ever.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: '#f5f5f5' },
                }}
                onClick={() => navigate('/signup')}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main',
                    borderColor: 'white',
                  },
                }}
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Why Choose TicketMaster?
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <ConfirmationNumber
                    sx={{ fontSize: 60, color: 'primary.main', mb: 2 }}
                  />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Easy Ticket Management
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Create, view, edit, and delete tickets with an intuitive interface
                    designed for efficiency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Speed sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Real-time Updates
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Track ticket status changes in real-time with instant notifications
                    and updates.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Security sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Secure & Reliable
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Your data is protected with industry-standard security measures and
                    encryption.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Landing;