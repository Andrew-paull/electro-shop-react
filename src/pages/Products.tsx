import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products, categories, brands } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    priceRange: searchParams.get('price') || '',
    search: searchParams.get('search') || '',
    sort: searchParams.get('sort') || 'featured',
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filters]);

  const priceRanges = [
    { label: 'Under $100', value: '0-100' },
    { label: '$100 - $500', value: '100-500' },
    { label: '$500 - $1000', value: '500-1000' },
    { label: '$1000 - $2000', value: '1000-2000' },
    { label: 'Over $2000', value: '2000-999999' },
  ];

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' },
    { label: 'Newest', value: 'newest' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.brand.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower)
      );
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.brand) {
      result = result.filter((p) => p.brand === filters.brand);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      priceRange: '',
      search: '',
      sort: 'featured',
    });
    setSearchParams({});
  };

  const activeFilterCount = [filters.category, filters.brand, filters.priceRange, filters.search].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            {filters.category || 'All Products'}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden btn-secondary flex items-center justify-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="badge">{activeFilterCount}</span>
            )}
          </button>

          {/* Filter Sidebar */}
          <aside
            className={`
              fixed lg:relative inset-0 lg:inset-auto z-50 lg:z-auto
              w-full lg:w-64 flex-shrink-0
              ${isFilterOpen ? 'block' : 'hidden lg:block'}
            `}
          >
            {isFilterOpen && (
              <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
            )}

            <div className="relative lg:static h-full lg:h-auto max-h-screen lg:max-h-none overflow-y-auto bg-card lg:bg-transparent p-6 lg:p-0 ml-auto lg:ml-0 w-80 lg:w-full border-l lg:border-none border-border">
              <div className="flex items-center justify-between mb-6 lg:mb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <div className="flex items-center gap-2">
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="lg:hidden p-2 hover:bg-secondary rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', '')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      !filters.category
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        filters.category === cat.name
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => updateFilter('brand', '')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      !filters.brand
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    All Brands
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => updateFilter('brand', brand)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        filters.brand === brand
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('priceRange', '')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      !filters.priceRange
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('priceRange', range.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        filters.priceRange === range.value
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 p-4 glass-card">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} results
              </p>
              <div className="relative">
                <select
                  value={filters.sort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="input-field pr-10 appearance-none cursor-pointer bg-transparent border-0 py-2"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category && (
                  <span className="badge flex items-center gap-2">
                    {filters.category}
                    <button onClick={() => updateFilter('category', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.brand && (
                  <span className="badge flex items-center gap-2">
                    {filters.brand}
                    <button onClick={() => updateFilter('brand', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.priceRange && (
                  <span className="badge flex items-center gap-2">
                    {priceRanges.find((r) => r.value === filters.priceRange)?.label}
                    <button onClick={() => updateFilter('priceRange', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {filters.search && (
                  <span className="badge flex items-center gap-2">
                    "{filters.search}"
                    <button onClick={() => updateFilter('search', '')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            <ProductGrid products={filteredProducts} loading={loading} columns={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;