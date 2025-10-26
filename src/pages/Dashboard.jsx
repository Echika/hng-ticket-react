import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
} from '@mui/material';
import {
  ConfirmationNumber,
  CheckCircle,
  Pending,
  Cancel,
  ArrowForward,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getTicketStats } from '../utils/ticketStorage';
import { getCurrentUser } from '../utils/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });

  useEffect(() => {
    const ticketStats = getTicketStats();
    setStats(ticketStats);
  }, []);

  const statCards = [
    {
      title: 'Total Tickets',
      value: stats.total,
      icon: <ConfirmationNumber sx={{ fontSize: 50 }} />,
      color: '#667eea',
      bgColor: '#e8eaf6',
    },
    {
      title: 'Open Tickets',
      value: stats.open,
      icon: <Pending sx={{ fontSize: 50 }} />,
      color: '#4caf50',
      bgColor: '#e8f5e9',
    },
    {
      title: 'In Progress',
      value: stats.in_progress,
      icon: <CheckCircle sx={{ fontSize: 50 }} />,
      color: '#ff9800',
      bgColor: '#fff3e0',
    },
    {
      title: 'Closed Tickets',
      value: stats.closed,
      icon: <Cancel sx={{ fontSize: 50 }} />,
      color: '#757575',
      bgColor: '#f5f5f5',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar showAuth />

      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="lg">
          {/* Welcome Section */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: 3,
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Welcome back, {user?.name}! 👋
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              Here's what's happening with your tickets today
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/tickets')}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              Manage Tickets
            </Button>
          </Paper>

          {/* Stats Grid */}
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Ticket Statistics
          </Typography>

          <Grid container spacing={3}>
            {statCards.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-8px)' },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: stat.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        mb: 2,
                      }}
                    >
                      {React.cloneElement(stat.icon, { sx: { color: stat.color } })}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: 700, color: stat.color, mb: 1 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Quick Actions */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Quick Actions
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Create New Ticket
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Report a new issue or request support
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate('/tickets')}
                    >
                      Create Ticket
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      View All Tickets
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Browse and manage all your tickets
                    </Typography>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => navigate('/tickets')}
                    >
                      View Tickets
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Dashboard;