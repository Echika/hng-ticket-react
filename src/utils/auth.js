// Authentication utility functions using localStorage

const SESSION_KEY = 'ticketapp_session';

// Save session to localStorage
export const saveSession = (userData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

// Get current session
export const getSession = () => {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return getSession() !== null;
};

// Logout - clear session
export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
};

// Get current user
export const getCurrentUser = () => {
  return getSession();
};

// Mock login function
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Test credentials
      if (email === 'test@example.com' && password === 'password123') {
        const userData = {
          id: 1,
          email: email,
          name: 'Test User',
          token: 'mock-jwt-token-' + Date.now()
        };
        saveSession(userData);
        resolve(userData);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 800);
  });
};

// Mock signup function
export const signup = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password && password.length >= 6) {
        const userData = {
          id: Date.now(),
          email: email,
          name: name,
          token: 'mock-jwt-token-' + Date.now()
        };
        saveSession(userData);
        resolve(userData);
      } else {
        reject(new Error('Invalid signup data'));
      }
    }, 800);
  });
};