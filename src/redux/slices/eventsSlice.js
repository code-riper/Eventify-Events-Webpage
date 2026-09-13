import { createSlice } from '@reduxjs/toolkit';
import { mockEvents } from '../../data/mockEvents';
import { categories } from '../../data/mockCategories';

const initialState = {
  events: mockEvents,
  categories: categories,
  searchQuery: '',
  selectedCategory: 'all',
  selectedCity: 'All Cities',
  selectedPriceRange: 'all', // 'all', 'free', 'under-500', '500-1000', '1000-2500', '2500-plus'
  selectedDateFilter: 'all', // 'all', 'today', 'this-weekend', 'this-month'
  sortBy: 'featured', // 'featured', 'date-asc', 'price-low', 'price-high', 'rating'
  isLoading: false
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    setSelectedPriceRange: (state, action) => {
      state.selectedPriceRange = action.payload;
    },
    setSelectedDateFilter: (state, action) => {
      state.selectedDateFilter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.selectedCity = 'All Cities';
      state.selectedPriceRange = 'all';
      state.selectedDateFilter = 'all';
      state.sortBy = 'featured';
    }
  }
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedCity,
  setSelectedPriceRange,
  setSelectedDateFilter,
  setSortBy,
  resetFilters
} = eventsSlice.actions;

export default eventsSlice.reducer;
