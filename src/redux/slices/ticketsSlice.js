import { createSlice } from '@reduxjs/toolkit';
import { initialBookings } from '../../data/mockReviews';

const loadTicketsFromStorage = () => {
  try {
    const stored = localStorage.getItem('eventify_user_tickets');
    if (stored) return JSON.parse(stored);
  } catch {
    // fallback
  }
  return initialBookings;
};

const initialState = {
  tickets: loadTicketsFromStorage(),
  selectedFilter: 'All' // 'All', 'Upcoming', 'Past', 'Cancelled'
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addNewBooking: (state, action) => {
      state.tickets.unshift(action.payload);
      try {
        localStorage.setItem('eventify_user_tickets', JSON.stringify(state.tickets));
      } catch {
        // error handling
      }
    },
    cancelBooking: (state, action) => {
      const bookingId = action.payload;
      const target = state.tickets.find(t => t.bookingId === bookingId);
      if (target) {
        target.status = 'Cancelled';
        target.cancelledAt = new Date().toISOString().split('T')[0];
        try {
          localStorage.setItem('eventify_user_tickets', JSON.stringify(state.tickets));
        } catch {
          // error handling
        }
      }
    },
    setTicketFilter: (state, action) => {
      state.selectedFilter = action.payload;
    }
  }
});

export const { addNewBooking, cancelBooking, setTicketFilter } = ticketsSlice.actions;
export default ticketsSlice.reducer;
