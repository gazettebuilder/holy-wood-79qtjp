import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gazette-navy shadow-lg py-2' : 'bg-gazette-navy/90 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:flex-row"
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gazette-red flex items-center justify-center border-2 border-gazette-cream">
                <span className="font-display text-gazette-cream font-bold text-sm uppercase">Est. 1897</span>
              </div>
              <div className="ml-3 text-center md:text-left">
                <div className="text-gazette-cream font-display font-bold text-xl md:text-2xl tracking-wide">THE CREWKERNE</div>
                <div className="text-gazette-gold font-display font-bold text-2xl md:text-3xl -mt-1">GAZETTE</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gazette-cream hover:text-gazette-gold font-medium transition-colors">Home</Link>
            <Link to="/news" className="text-gazette-cream hover:text-gazette-gold font-medium transition-colors">Latest News</Link>
            <Link to="/videos" className="text-gazette-cream hover:text-gazette-gold font-medium transition-colors">Videos</Link>
            <Link to="/true-crime" className="text-gazette-cream hover:text-gazette-gold font-medium transition-colors">True Crime</Link>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gazette-cream hover:text-gazette-gold transition-colors"
            >
              <FaSearch size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gazette-cream"
            >
              <FaSearch size={18} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gazette-cream"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pb-4"
          >
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-md bg-gazette-light border-2 border-gazette-gold/50 focus:outline-none focus:border-gazette-gold"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gazette-navy">
                <FaSearch />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gazette-navy border-t border-gazette-gold/20 mt-4"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gazette-cream hover:text-gazette-gold font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/news" 
                className="text-gazette-cream hover:text-gazette-gold font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Latest News
              </Link>
              <Link 
                to="/videos" 
                className="text-gazette-cream hover:text-gazette-gold font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Videos
              </Link>
              <Link 
                to="/true-crime" 
                className="text-gazette-cream hover:text-gazette-gold font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                True Crime
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;