import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import ArticleCard from '../common/ArticleCard';

const LatestNews = ({ articles }) => {
  // Bail out if no articles
  if (!articles || articles.length === 0) {
    return null;
  }

  // Take the first 6 articles for this section
  const latestArticles = articles.slice(0, 6);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Latest News" 
          subtitle="Stay updated with the most recent stories from Crewkerne and beyond"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/news" 
            className="vintage-button inline-flex items-center group"
          >
            View All News
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;