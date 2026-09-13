import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromStorage = () => {
  try {
    const saved = localStorage.getItem('eventify_favorites');
    if (saved) return JSON.parse(saved);
  } catch {
    // fallback if error reading localStorage
  }
  // Default sample favorites
  return ['evt-101', 'evt-103'];
};

const initialState = {
  favoriteIds: loadFavoritesFromStorage()
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const eventId = action.payload;
      const index = state.favoriteIds.indexOf(eventId);
      if (index >= 0) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(eventId);
      }
      try {
        localStorage.setItem('eventify_favorites', JSON.stringify(state.favoriteIds));
      } catch {
        // storage error handling
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteIds = state.favoriteIds.filter(id => id !== action.payload);
      try {
        localStorage.setItem('eventify_favorites', JSON.stringify(state.favoriteIds));
      } catch {
        // storage error handling
      }
    }
  }
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
