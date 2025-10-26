# TicketMaster - React Ticket Management App

A modern, full-featured ticket management web application built with React, Vite, and Material UI for HNG Internship Stage 2.

## 🚀 Live Demo

**Live URL:** 'https://echika.github.io/react-ticket-app'

## 📋 Overview

TicketMaster is a comprehensive ticket management system that allows users to create, view, edit, and delete support tickets with an intuitive and beautiful interface. The application features secure authentication, real-time statistics, and a fully responsive design.

## ✨ Features

### Core Functionality
- ✅ **Landing Page** - Hero section with wavy SVG background, decorative circles, and feature cards
- ✅ **Authentication** - Secure login and signup with form validation
- ✅ **Dashboard** - Real-time ticket statistics and quick actions
- ✅ **Ticket Management** - Full CRUD operations (Create, Read, Update, Delete)
- ✅ **Protected Routes** - Session-based authentication using localStorage
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### Design Elements (As Per Requirements)
- ✅ **Max Width 1440px** - Centered layout on large screens
- ✅ **Wavy Hero Background** - SVG wave at bottom of hero section
- ✅ **Decorative Circles** - Multiple circular elements across the site
- ✅ **Box-shaped Sections** - Card-style components with shadows and rounded corners
- ✅ **Status Color Coding**:
  - Open → Green
  - In Progress → Amber
  - Closed → Gray

### Validation & Error Handling
- ✅ **Form Validation** - Real-time validation with inline error messages
- ✅ **Toast Notifications** - Success and error feedback for all actions
- ✅ **Required Fields** - Title and status are mandatory
- ✅ **Status Validation** - Only accepts "open", "in_progress", "closed"
- ✅ **Session Management** - Unauthorized redirect to login page

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **UI Library:** Material UI (MUI) v5
- **Routing:** React Router v6
- **State Management:** React Hooks (useState, useEffect)
- **Storage:** localStorage (for auth and tickets)
- **Icons:** Material UI Icons
- **Styling:** Emotion (CSS-in-JS)

## 📂 Project Structure

```
hng-ticket-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── TicketCard.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Tickets.jsx
│   ├── utils/
│   │   ├── auth.js
│   │   └── ticketStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── theme.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hng-ticket-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing the Application

### Test Credentials

**Login:**
- Email: `test@example.com`
- Password: `password123`

**Or create a new account:**
- Any valid email and password (min 6 characters)

### Testing Full CRUD

1. **Create Ticket**
   - Click "Create Ticket" button
   - Fill in title (required), description, status, and priority
   - Click "Create"
   - ✅ Success toast appears

2. **Read Tickets**
   - View all tickets on the Tickets page
   - See ticket cards with status badges

3. **Update Ticket**
   - Click the edit icon on any ticket card
   - Modify any field
   - Click "Update"
   - ✅ Changes reflected immediately

4. **Delete Ticket**
   - Click the delete icon on any ticket card
   - Confirm deletion in the dialog
   - ✅ Ticket removed from list

### Testing Validation

1. **Empty Title**
   - Try creating a ticket without a title
   - ❌ Error: "Title is required"

2. **Invalid Status**
   - Status field only accepts: "open", "in_progress", "closed"
   - ❌ Invalid values rejected

3. **Invalid Email (Login/Signup)**
   - Enter "notanemail"
   - ❌ Error: "Please enter a valid email"

4. **Short Password**
   - Enter password less than 6 characters
   - ❌ Error: "Password must be at least 6 characters"

### Testing Protected Routes

1. **Without Login**
   - Try accessing `/dashboard` or `/tickets` directly
   - ✅ Automatically redirected to `/login`

2. **After Login**
   - Login successfully
   - ✅ Access to dashboard and tickets granted

3. **Logout**
   - Click logout button
   - ✅ Session cleared, redirected to landing page

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

Tested on:
- iPhone (Portrait & Landscape)
- iPad (Portrait & Landscape)
- Desktop (1440px and above)

## ♿ Accessibility Features

- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states on all buttons and inputs
- ✅ Sufficient color contrast (WCAG AA compliant)
- ✅ Alt text for icons (via MUI)
- ✅ Form labels properly associated with inputs

## 🔒 Security & Authentication

### Session Management
- Session stored in `localStorage` with key: `ticketapp_session`
- Contains user data and mock JWT token
- Cleared on logout

### Protected Routes
- Dashboard and Tickets pages require authentication
- Unauthorized users redirected to login
- Session validated on each protected route access

### Mock Authentication
This is a frontend-only implementation using simulated API calls:
- Login validates against test credentials
- Signup creates new user data
- No real backend or API integration

## 📊 Data Management

### Tickets Storage
- Stored in `localStorage` with key: `ticketapp_tickets`
- Each ticket has:
  - `id` (unique timestamp)
  - `title` (required)
  - `description` (optional)
  - `status` (required: "open" | "in_progress" | "closed")
  - `priority` (optional: "low" | "medium" | "high")
  - `createdAt` (ISO timestamp)
  - `updatedAt` (ISO timestamp)

### Sample Data
On first load, 3 sample tickets are created for demonstration purposes.

## 🎨 Design System

### Colors
- **Primary:** #667eea (Purple)
- **Secondary:** #764ba2 (Darker Purple)
- **Success:** #4caf50 (Green)
- **Warning:** #ff9800 (Amber)
- **Error:** #f44336 (Red)
- **Background:** #f5f5f5 (Light Gray)

### Typography
- **Font Family:** Roboto
- **Headings:** 600-700 weight
- **Body:** 400 weight

### Components
- **Border Radius:** 12px (cards), 8px (buttons)
- **Shadows:** Elevation-based (MUI)
- **Transitions:** 0.2s ease

## 🚧 Known Limitations

- No real backend integration (uses localStorage)
- No user authentication persistence across devices
- No real-time updates (refresh required after external changes)
- Limited to browser storage capacity
- Data cleared if localStorage is cleared

## 📝 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time updates with WebSockets
- [ ] File attachments for tickets
- [ ] Comments/notes on tickets
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Export tickets to CSV/PDF
- [ ] Dark mode toggle

## 👤 Author

**Echika Raphael**
- GitHub: [@Echika](https://github.com/Echika)
- HNG Internship Stage 2 Submission

## 📄 License

This project is part of the HNG Internship program.

## 🙏 Acknowledgments

- HNG Internship Team
- Material UI Documentation
- React Community
- Vite Team

---

**Built with ❤️ for HNG Internship Stage 2**

*Submission Date: 28/10/2025