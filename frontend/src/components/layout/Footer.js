import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gazette-navy text-gazette-cream pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-gazette-gold font-display text-xl mb-4 border-b border-gazette-red pb-2">About The Gazette</h3>
            <p className="mb-4 text-sm leading-relaxed">
              The Crewkerne Gazette has been the trusted source of local news and stories since 1897. We're dedicated to bringing you the most important stories from Crewkerne and beyond.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="text-gazette-cream hover:text-gazette-gold transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gazette-cream hover:text-gazette-gold transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://m.youtube.com/@TheCrewkerneGazette" className="text-gazette-cream hover:text-gazette-gold transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com" className="text-gazette-cream hover:text-gazette-gold transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gazette-gold font-display text-xl mb-4 border-b border-gazette-red pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/news" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Latest News</Link>
              </li>
              <li>
                <Link to="/videos" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Videos</Link>
              </li>
              <li>
                <Link to="/true-crime" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">True Crime</Link>
              </li>
              <li>
                <Link to="/about" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gazette-gold font-display text-xl mb-4 border-b border-gazette-red pb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/local" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Local News</Link>
              </li>
              <li>
                <Link to="/category/politics" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Politics</Link>
              </li>
              <li>
                <Link to="/category/business" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Business</Link>
              </li>
              <li>
                <Link to="/category/culture" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Culture</Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Sports</Link>
              </li>
              <li>
                <Link to="/category/opinion" className="text-gazette-cream hover:text-gazette-gold transition-colors text-sm">Opinion</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gazette-gold font-display text-xl mb-4 border-b border-gazette-red pb-2">Newsletter</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates and breaking news.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gazette-light/10 border border-gazette-gold/30 rounded-md px-4 py-2 focus:outline-none focus:border-gazette-gold text-gazette-cream"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gazette-gold hover:text-gazette-red transition-colors"
                aria-label="Subscribe"
              >
                <FaEnvelope size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gazette-gold/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-gazette-cream/70">
            © {currentYear} The Crewkerne Gazette. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gazette-cream/70">
            <Link to="/privacy" className="hover:text-gazette-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gazette-gold transition-colors">Terms of Use</Link>
            <Link to="/cookies" className="hover:text-gazette-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;