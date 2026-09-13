import React, { useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EventCard from '../../components/common/EventCard';
import FilterChips from '../../components/common/FilterChips';
import SortDropdown from '../../components/common/SortDropdown';
import EmptyState from '../../components/common/EmptyState';
import SearchBar from '../../components/common/SearchBar';
import { setSearchQuery, setSelectedCity } from '../../redux/slices/eventsSlice';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const queryParam = searchParams.get('q') || '';
  const cityParam = searchParams.get('city') || 'All Cities';

  useEffect(() => {
    if (queryParam) dispatch(setSearchQuery(queryParam));
    if (cityParam && cityParam !== 'All Cities') dispatch(setSelectedCity(cityParam));
  }, [queryParam, cityParam, dispatch]);

  const {
    events,
    searchQuery,
    selectedCategory,
    selectedCity,
    selectedPriceRange,
    sortBy
  } = useSelector((state) => state.events);

  const activeQuery = queryParam || searchQuery;

  const results = useMemo(() => {
    return events.filter((evt) => {
      if (activeQuery.trim()) {
        const q = activeQuery.toLowerCase();
        const matchTitle = evt.title.toLowerCase().includes(q);
        const matchVenue = evt.venue.toLowerCase().includes(q);
        const matchCity = evt.city.toLowerCase().includes(q);
        const matchCat = evt.categoryName.toLowerCase().includes(q);
        const matchDesc = evt.description.toLowerCase().includes(q);
        if (!matchTitle && !matchVenue && !matchCity && !matchCat && !matchDesc) return false;
      }

      if (selectedCategory !== 'all' && evt.category !== selectedCategory) return false;
      if (selectedCity !== 'All Cities' && evt.city.toLowerCase() !== selectedCity.toLowerCase()) return false;
      if (selectedPriceRange === 'free' && evt.price > 0) return false;
      if (selectedPriceRange === 'under-500' && evt.price >= 500) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [events, activeQuery, selectedCategory, selectedCity, selectedPriceRange, sortBy]);

  return (
    <div className="search-results-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '80vh' }}>
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small text-muted mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/events">Events</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Search Results</li>
          </ol>
        </nav>

        {/* Search Header Banner */}
        <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-1 font-heading fw-bold small mb-2 d-inline-block">
                Query Match
              </span>
              <h1 className="font-heading fw-extrabold text-dark mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                {activeQuery ? (
                  <>
                    Search results for <span className="text-primary">"{activeQuery}"</span>
                  </>
                ) : (
                  'All Search Results'
                )}
              </h1>
              <p className="text-muted small mb-0">
                Found <strong className="text-dark">{results.length}</strong> matching experiences across Indian cities.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <SearchBar initialQuery={activeQuery} />
            </div>
          </div>
        </div>

        {/* Toolbar & Active Filter Tags */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <FilterChips />
          <div className="ms-auto">
            <SortDropdown />
          </div>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="row g-4">
            {results.map((evt) => (
              <div key={evt.id} className="col-12 col-md-6 col-lg-4">
                <EventCard event={evt} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="bi-search"
            title="No events found"
            description={`We couldn't find any events matching "${activeQuery}". Try searching for popular tags like "Concert", "Tech", "Marathon", or explore all upcoming events.`}
            actionText="Explore All Events"
            actionLink="/events"
          />
        )}
      </div>
    </div>
  );
}
