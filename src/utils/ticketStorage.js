// Ticket management using localStorage

const TICKETS_KEY = 'ticketapp_tickets';

// Get all tickets
export const getTickets = () => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  return tickets ? JSON.parse(tickets) : [];
};

// Save tickets
const saveTickets = (tickets) => {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};

// Create new ticket
export const createTicket = (ticketData) => {
  const tickets = getTickets();
  const newTicket = {
    id: Date.now(),
    ...ticketData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tickets.push(newTicket);
  saveTickets(tickets);
  return newTicket;
};

// Get single ticket by ID
export const getTicketById = (id) => {
  const tickets = getTickets();
  return tickets.find(ticket => ticket.id === id);
};

// Update ticket
export const updateTicket = (id, updates) => {
  const tickets = getTickets();
  const index = tickets.findIndex(ticket => ticket.id === id);
  
  if (index !== -1) {
    tickets[index] = {
      ...tickets[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    saveTickets(tickets);
    return tickets[index];
  }
  return null;
};

// Delete ticket
export const deleteTicket = (id) => {
  const tickets = getTickets();
  const filtered = tickets.filter(ticket => ticket.id !== id);
  saveTickets(filtered);
  return true;
};

// Get ticket statistics
export const getTicketStats = () => {
  const tickets = getTickets();
  return {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    in_progress: tickets.filter(t => t.status === 'in_progress').length,
    closed: tickets.filter(t => t.status === 'closed').length,
  };
};

// Initialize with sample data if empty
export const initializeSampleData = () => {
  const tickets = getTickets();
  if (tickets.length === 0) {
    const sampleTickets = [
      {
        id: 1,
        title: 'Website not loading',
        description: 'The main website is showing a 500 error',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Login button not working',
        description: 'Users cannot click the login button on mobile',
        status: 'in_progress',
        priority: 'medium',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 3,
        title: 'Payment gateway integration',
        description: 'Need to integrate Stripe payment gateway',
        status: 'closed',
        priority: 'low',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    saveTickets(sampleTickets);
  }
};