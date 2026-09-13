import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import favoritesReducer from './slices/favoritesSlice';
import bookingReducer from './slices/bookingSlice';
import ticketsReducer from './slices/ticketsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    favorites: favoritesReducer,
    booking: bookingReducer,
    tickets: ticketsReducer,
    auth: authReducer
  }
});

export default store;
