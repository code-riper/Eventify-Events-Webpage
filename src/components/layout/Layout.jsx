import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollToTop from '../../hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ paddingTop: '76px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
