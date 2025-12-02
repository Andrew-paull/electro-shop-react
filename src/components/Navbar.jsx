import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import CartSidebar from './CartSidebar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, toggleCart, isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-glow transition-all">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-bold font-display hidden sm:block">
                <span className="gradient-text">Tech</span>hy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link font-medium ${
                    isActive(link.path) ? 'text-foreground' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleCart}
                className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-border animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
