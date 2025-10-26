import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { ConfirmationNumber, Logout } from '@mui/icons-material';
import { logout, getCurrentUser } from '../utils/auth';

const Navbar = ({ showAuth = false }) => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ConfirmationNumber sx={{ mr: 1, color: 'primary.main' }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              cursor: 'pointer',
            }}
            onClick={() => navigate(showAuth ? '/dashboard' : '/')}
          >
            TicketMaster
          </Typography>

          {showAuth ? (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Typography variant="body2" sx={{ display: { xs: 'none', md: 'block' } }}>
                {user?.name || user?.email}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Logout />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="contained" onClick={() => navigate('/signup')}>
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;