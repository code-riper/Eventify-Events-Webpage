import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Pages
import HomePage from '../pages/Home/HomePage';
import EventsPage from '../pages/Events/EventsPage';
import SearchPage from '../pages/Search/SearchPage';
import EventDetailsPage from '../pages/EventDetails/EventDetailsPage';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import ConfirmationPage from '../pages/Confirmation/ConfirmationPage';
import TicketsPage from '../pages/Tickets/TicketsPage';
import TicketDetailsPage from '../pages/TicketDetails/TicketDetailsPage';
import FavoritesPage from '../pages/Favorites/FavoritesPage';
import CategoriesPage from '../pages/Categories/CategoriesPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import AboutPage from '../pages/About/AboutPage';
import ContactPage from '../pages/Contact/ContactPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main Journey */}
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/:id" element={<EventDetailsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:category" element={<EventsPage />} />

        {/* Booking Journey */}
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="booking-confirmation/:id" element={<ConfirmationPage />} />

        {/* User Account Journey */}
        <Route path="tickets" element={<TicketsPage />} />
        <Route path="tickets/:id" element={<TicketDetailsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="profile" element={<ProfilePage />} />

        {/* Auth Pages */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Informational Pages */}
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
