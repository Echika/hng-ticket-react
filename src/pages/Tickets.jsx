import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Snackbar,
  Alert,
  Fab,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicketCard from '../components/TicketCard';
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from '../utils/ticketStorage';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [ticketToDelete, setTicketToDelete] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium',
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    const allTickets = getTickets();
    setTickets(allTickets);
  };

  const handleOpenDialog = (ticket = null) => {
    if (ticket) {
      setEditingTicket(ticket);
      setFormData({
        title: ticket.title,
        description: ticket.description || '',
        status: ticket.status,
        priority: ticket.priority || 'medium',
      });
    } else {
      setEditingTicket(null);
      setFormData({
        title: '',
        description: '',
        status: 'open',
        priority: 'medium',
      });
    }
    setErrors({});
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingTicket(null);
    setFormData({
      title: '',
      description: '',
      status: 'open',
      priority: 'medium',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    }

    if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
      newErrors.status = 'Invalid status value';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      setToast({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error',
      });
      return;
    }

    try {
      if (editingTicket) {
        // Update existing ticket
        updateTicket(editingTicket.id, formData);
        setToast({
          open: true,
          message: 'Ticket updated successfully!',
          severity: 'success',
        });
      } else {
        // Create new ticket
        createTicket(formData);
        setToast({
          open: true,
          message: 'Ticket created successfully!',
          severity: 'success',
        });
      }

      loadTickets();
      handleCloseDialog();
    } catch (error) {
      setToast({
        open: true,
        message: 'Failed to save ticket. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleDeleteClick = (ticket) => {
    setTicketToDelete(ticket);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    try {
      deleteTicket(ticketToDelete.id);
      setToast({
        open: true,
        message: 'Ticket deleted successfully!',
        severity: 'success',
      });
      loadTickets();
      setOpenDeleteDialog(false);
      setTicketToDelete(null);
    } catch (error) {
      setToast({
        open: true,
        message: 'Failed to delete ticket. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setTicketToDelete(null);
  };

  const handleCloseToast = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar showAuth />

      <Box sx={{ flexGrow: 1, bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
                My Tickets
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage all your support tickets in one place
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              startIcon={<Add />}
              onClick={() => handleOpenDialog()}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              Create Ticket
            </Button>
          </Box>

          {/* Tickets Grid */}
          {tickets.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                bgcolor: 'background.paper',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No tickets yet
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Create your first ticket to get started
              </Typography>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => handleOpenDialog()}
              >
                Create Ticket
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {tickets.map((ticket) => (
                <Grid item xs={12} sm={6} md={4} key={ticket.id}>
                  <TicketCard
                    ticket={ticket}
                    onEdit={handleOpenDialog}
                    onDelete={handleDeleteClick}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* Floating Action Button for Mobile */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: { xs: 'flex', md: 'none' },
        }}
        onClick={() => handleOpenDialog()}
      >
        <Add />
      </Fab>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              error={Boolean(errors.title)}
              helperText={errors.title || 'Required'}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              margin="normal"
              helperText="Optional"
            />

            <FormControl
              fullWidth
              margin="normal"
              required
              error={Boolean(errors.status)}
            >
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                label="Status"
              >
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="in_progress">In Progress</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
              </Select>
              <FormHelperText>
                {errors.status || 'Required: open, in_progress, or closed'}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Priority</InputLabel>
              <Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                label="Priority"
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
              <FormHelperText>Optional</FormHelperText>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editingTicket ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Delete Ticket?</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{ticketToDelete?.title}"? This action cannot
            be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification */}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>

      <Footer />
    </Box>
  );
};

export default Tickets;