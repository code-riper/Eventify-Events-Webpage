import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EventCard from '../../components/common/EventCard';
import FilterSidebar from '../../components/common/FilterSidebar';
import FilterChips from '../../components/common/FilterChips';
import SortDropdown from '../../components/common/SortDropdown';
import EmptyState from '../../components/common/EmptyState';
import { setSelectedCategory, setSelectedCity } from '../../redux/slices/eventsSlice';

export default function EventsPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const {
    events,
    searchQuery,
    selectedCategory,
    selectedCity,
    selectedPriceRange,
    selectedDateFilter,
    sortBy
  } = useSelector((state) => state.events);

  // Sync URL query params with redux if navigated with ?category=... or ?city=...
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      dispatch(setSelectedCategory(categoryParam));
    }
    const cityParam = searchParams.get('city');
    if (cityParam) {
      dispatch(setSelectedCity(cityParam));
    }
  }, [searchParams, dispatch]);

  // Comprehensive Filter & Sort Logic
  const filteredEvents = useMemo(() => {
    return events.filter((evt) => {
      // 1. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = evt.title.toLowerCase().includes(q);
        const matchVenue = evt.venue.toLowerCase().includes(q);
        const matchCity = evt.city.toLowerCase().includes(q);
        const matchCat = evt.categoryName.toLowerCase().includes(q);
        if (!matchTitle && !matchVenue && !matchCity && !matchCat) return false;
      }

      // 2. Category
      if (selectedCategory !== 'all' && evt.category !== selectedCategory) {
        return false;
      }

      // 3. City
      if (selectedCity !== 'All Cities' && evt.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }

      // 4. Price range
      if (selectedPriceRange === 'free' && evt.price > 0) return false;
      if (selectedPriceRange === 'under-500' && evt.price >= 500) return false;
      if (selectedPriceRange === '500-1000' && (evt.price < 500 || evt.price > 1000)) return false;
      if (selectedPriceRange === '1000-2500' && (evt.price < 1000 || evt.price > 2500)) return false;
      if (selectedPriceRange === '2500-plus' && evt.price < 2500) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
      // default: featured/trending first
      return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
    });
  }, [
    events,
    searchQuery,
    selectedCategory,
    selectedCity,
    selectedPriceRange,
    selectedDateFilter,
    sortBy
  ]);

  const displayedEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  return (
    <div className="explore-events-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '80vh' }}>
      <div className="container-xl">
        {/* Page Heading & Breadcrumb */}
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small text-muted mb-2">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Explore Events</li>
            </ol>
          </nav>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <h1 className="font-heading fw-extrabold text-dark mb-1 fs-2">
                Explore All Events
              </h1>
              <p className="text-muted small mb-0">
                Discover {filteredEvents.length} live experiences happening in India
              </p>
            </div>

            {/* Mobile Filter Toggle Button */}
            <div className="d-flex d-lg-none align-items-center gap-2">
              <button
                type="button"
                className="btn btn-secondary-custom btn-sm px-3 py-2"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <i className="bi bi-funnel-fill text-primary"></i>
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Layout Row: Sidebar + Main Event Grid */}
        <div className="row g-4">
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="col-lg-3 d-none d-lg-block">
            <FilterSidebar />
          </div>

          {/* Main Events Area (9 cols) */}
          <div className="col-12 col-lg-9">
            {/* Top Toolbar: Active Chips & Sort Dropdown */}
            <div className="bg-white rounded-4 border p-3 mb-4 shadow-xs d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="text-muted small fw-semibold">
                Showing <strong className="text-dark">{displayedEvents.length}</strong> of{' '}
                <strong className="text-dark">{filteredEvents.length}</strong> events
              </div>
              <SortDropdown />
            </div>

            {/* Active Filter Badges */}
            <FilterChips />

            {/* Event Grid or Empty State */}
            {displayedEvents.length > 0 ? (
              <>
                <div className="row g-4 mb-4">
                  {displayedEvents.map((evt) => (
                    <div key={evt.id} className="col-12 col-md-6 col-xl-4">
                      <EventCard event={evt} />
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-secondary-custom px-5 py-3 rounded-pill font-heading fw-semibold shadow-xs"
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                    >
                      <i className="bi bi-arrow-clockwise me-1"></i>
                      Load More Events
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState
                icon="bi-funnel"
                title="No events match your active filters"
                description="Try loosening your price range or selecting another category or city to see more options."
                actionText="Reset All Filters"
                actionLink={null}
                onActionClick={() => window.location.reload()}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer / Modal */}
      {isMobileFilterOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 animate-fade-in"
          style={{ zIndex: 1060 }}
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="bg-white h-100 p-4 overflow-y-auto shadow-xl"
            style={{ maxWidth: '340px', width: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
              <h5 className="font-heading fw-bold mb-0">Filter Events</h5>
              <button
                type="button"
                className="btn btn-sm btn-light rounded-circle"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <FilterSidebar
              isMobileModal={true}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
