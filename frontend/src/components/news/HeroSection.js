import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const HeroSection = ({ featuredArticles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotate featured articles
  useEffect(() => {
    if (!featuredArticles || featuredArticles.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, [featuredArticles]);
  
  // Bail out if no articles
  if (!featuredArticles || featuredArticles.length === 0) {
    return null;
  }
  
  const activeArticle = featuredArticles[activeIndex];
  
  return (
    <section className="relative overflow-hidden bg-gazette-navy">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${activeArticle.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gazette-navy/95 via-gazette-navy/80 to-gazette-navy/95"></div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              key={`hero-content-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-gazette-red text-gazette-cream px-3 py-1 text-sm uppercase tracking-wide font-bold mb-4">
                {activeArticle.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gazette-cream leading-tight mb-6">
                {activeArticle.title}
              </h1>
              
              <p className="text-gazette-cream/80 text-lg mb-8 max-w-2xl">
                {activeArticle.excerpt}
              </p>
              
              <Link 
                to={`/article/${activeArticle.id}`}
                className="vintage-button inline-flex items-center group"
              >
                Read Full Story
                <FaLongArrowAltRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-gazette-navy/50 backdrop-blur-md p-6 rounded-lg border border-gazette-gold/20">
              <h3 className="text-gazette-gold font-display text-xl mb-4 pb-2 border-b border-gazette-red/50">
                More Top Stories
              </h3>
              
              <div className="space-y-4">
                {featuredArticles.map((article, index) => (
                  <div 
                    key={article.id}
                    className={`flex gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                      index === activeIndex 
                        ? 'bg-gazette-red/10 border-l-2 border-gazette-red' 
                        : 'hover:bg-gazette-navy/70'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="w-16 h-16 flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-gazette-cream font-bold leading-tight line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-gazette-cream/70 text-xs">
                        {article.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-gazette-red w-4' 
                  : 'bg-gazette-cream/50 hover:bg-gazette-cream/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;