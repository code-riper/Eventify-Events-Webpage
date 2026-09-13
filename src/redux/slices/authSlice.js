import { createSlice } from '@reduxjs/toolkit';

const loadUserFromStorage = () => {
  try {
    const saved = localStorage.getItem('eventify_user');
    if (saved) return JSON.parse(saved);
  } catch {
    // fallback
  }
  return {
    id: 'usr-901',
    name: 'Ajmal Khan',
    email: 'ajmal@example.com',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    bio: 'Tech enthusiast, indie music fan, and marathon runner exploring live events across India.',
    preferences: {
      favoriteCategories: ['music', 'technology', 'sports'],
      notifyEmail: true,
      notifyWhatsapp: true,
      newsletter: true
    }
  };
};

const initialState = {
  isAuthenticated: true,
  user: loadUserFromStorage()
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = {
        ...state.user,
        ...action.payload
      };
      try {
        localStorage.setItem('eventify_user', JSON.stringify(state.user));
      } catch {
        // error handling
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      };
      try {
        localStorage.setItem('eventify_user', JSON.stringify(state.user));
      } catch {
        // error handling
      }
    },
    updatePreferences: (state, action) => {
      state.user.preferences = {
        ...state.user.preferences,
        ...action.payload
      };
      try {
        localStorage.setItem('eventify_user', JSON.stringify(state.user));
      } catch {
        // error handling
      }
    }
  }
});

export const { login, logout, updateProfile, updatePreferences } = authSlice.actions;
export default authSlice.reducer;
