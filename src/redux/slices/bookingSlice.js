import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentEvent: null,
  ticketQuantities: {}, // e.g. { 'vip': 2, 'general': 1 }
  attendeeInfo: {
    name: 'Ajmal Khan',
    email: 'ajmal@example.com',
    phone: '+91 98765 43210',
    age: '28',
    city: 'Mumbai'
  },
  billingInfo: {
    address: '402, Sunset Heights, Linking Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400050'
  },
  paymentMethod: 'upi', // 'upi', 'card', 'netbanking', 'wallet'
  cardDetails: {
    cardNumber: '•••• •••• •••• 4242',
    cardHolder: 'Ajmal Khan',
    expiry: '12/28',
    cvv: '•••'
  },
  upiId: 'ajmal@okhdfcbank',
  selectedBank: 'HDFC Bank',
  selectedWallet: 'Paytm',
  lastConfirmedBooking: null
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    initBookingForEvent: (state, action) => {
      const event = action.payload;
      state.currentEvent = event;
      // Default to 1 ticket for the first tier if no ticket chosen yet
      if (event && event.ticketTiers && event.ticketTiers.length > 0) {
        state.ticketQuantities = {
          [event.ticketTiers[0].id]: 1
        };
      } else {
        state.ticketQuantities = {};
      }
    },
    setTicketQuantity: (state, action) => {
      const { tierId, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.ticketQuantities[tierId];
      } else {
        state.ticketQuantities[tierId] = quantity;
      }
    },
    updateAttendeeInfo: (state, action) => {
      state.attendeeInfo = { ...state.attendeeInfo, ...action.payload };
    },
    updateBillingInfo: (state, action) => {
      state.billingInfo = { ...state.billingInfo, ...action.payload };
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setPaymentDetails: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setLastConfirmedBooking: (state, action) => {
      state.lastConfirmedBooking = action.payload;
    },
    clearBookingState: (state) => {
      state.currentEvent = null;
      state.ticketQuantities = {};
    }
  }
});

export const {
  initBookingForEvent,
  setTicketQuantity,
  updateAttendeeInfo,
  updateBillingInfo,
  setPaymentMethod,
  setPaymentDetails,
  setLastConfirmedBooking,
  clearBookingState
} = bookingSlice.actions;

export default bookingSlice.reducer;
