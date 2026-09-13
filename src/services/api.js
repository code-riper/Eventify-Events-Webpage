import axios from 'axios';
import { mockEvents } from '../data/mockEvents';
import { categories } from '../data/mockCategories';

// Pre-configured Axios instance ready for live REST API connection
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.eventify.internal/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('eventify_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn('[Eventify API] Request error, falling back to local state:', error.message);
    return Promise.reject(error);
  }
);

// Modular service functions (can be switched from mock to remote API via flag)
export const eventService = {
  getEvents: async (params = {}) => {
    // In production: return apiClient.get('/events', { params });
    return Promise.resolve({ data: mockEvents });
  },
  getEventById: async (id) => {
    // In production: return apiClient.get(`/events/${id}`);
    const event = mockEvents.find(e => e.id === id);
    return Promise.resolve({ data: event });
  },
  getCategories: async () => {
    // In production: return apiClient.get('/categories');
    return Promise.resolve({ data: categories });
  },
  createBooking: async (bookingPayload) => {
    // In production: return apiClient.post('/bookings', bookingPayload);
    return Promise.resolve({ data: { success: true, booking: bookingPayload } });
  }
};

export default apiClient;
