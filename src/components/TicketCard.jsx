import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'success';
      case 'in_progress':
        return 'warning';
      case 'closed':
        return 'default';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'default';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            {ticket.title}
          </Typography>
          <Box>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                color="primary"
                onClick={() => onEdit(ticket)}
              >
                <Edit fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                size="small"
                color="error"
                onClick={() => onDelete(ticket)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {ticket.description || 'No description provided'}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={ticket.status.replace('_', ' ').toUpperCase()}
            color={getStatusColor(ticket.status)}
            size="small"
          />
          {ticket.priority && (
            <Chip
              label={`${ticket.priority.toUpperCase()} Priority`}
              color={getPriorityColor(ticket.priority)}
              size="small"
              variant="outlined"
            />
          )}
        </Box>

        <Typography variant="caption" color="text.secondary">
          Created: {formatDate(ticket.createdAt)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;