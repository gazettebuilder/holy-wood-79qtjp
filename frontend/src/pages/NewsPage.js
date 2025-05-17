import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import ArticleCard from '../components/common/ArticleCard';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { latestArticles, categories } from '../utils/mockData';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    document.title = 'Latest News - The Crewkerne Gazette';
    
    // In a real application, you would fetch articles from an API
    setArticles(latestArticles);
    setFilteredArticles(latestArticles);
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => article.category === activeCategory);
      setFilteredArticles(filtered);
    }
  }, [activeCategory, articles]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsFilterOpen(false);
  };
  
  return (
    <div>
      <div className="bg-gazette-navy py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-gazette-cream text-4xl md:text-5xl font-display font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest News
          </motion.h1>
          <motion.p 
            className="text-gazette-cream/80 text-center mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay informed with the most recent stories and updates from Crewkerne and the surrounding areas.
          </motion.p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="mb-10 sticky top-24 z-30 bg-gazette-light py-4 border-b border-gazette-gold/20">
          <div className="flex flex-wrap justify-between items-center">
            <h2 className="text-xl font-display font-bold text-gazette-navy">
              {activeCategory === 'All' ? 'All Articles' : activeCategory}
            </h2>
            
            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden vintage-button px-3 py-1 text-xs flex items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? (
                <>
                  <FaTimes size={12} className="mr-2" />
                  Close Filters
                </>
              ) : (
                <>
                  <FaFilter size={12} className="mr-2" />
                  Filter By Category
                </>
              )}
            </button>
            
            {/* Desktop Category Filters */}
            <div className="hidden md:flex flex-wrap items-center space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-gazette-navy text-gazette-cream'
                    : 'bg-gazette-light text-gazette-navy hover:bg-gazette-navy/10'
                }`}
                onClick={() => handleCategoryChange('All')}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-gazette-navy text-gazette-cream'
                      : 'bg-gazette-light text-gazette-navy hover:bg-gazette-navy/10'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Category Filters */}
          {isFilterOpen && (
            <motion.div 
              className="md:hidden mt-4 grid grid-cols-2 gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-gazette-navy text-gazette-cream'
                    : 'bg-gazette-light text-gazette-navy border border-gazette-navy/20'
                }`}
                onClick={() => handleCategoryChange('All')}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-gazette-navy text-gazette-cream'
                      : 'bg-gazette-light text-gazette-navy border border-gazette-navy/20'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gazette-navy text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
        
        {/* Load More Button - In a real app, this would implement pagination */}
        <div className="text-center mt-12">
          <button className="vintage-button">
            Load More Articles
          </button>
        </div>
      </div>
      
      <NewsletterSignup />
    </div>
  );
};

export default NewsPage;