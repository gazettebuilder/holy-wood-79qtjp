import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaUser, FaComment } from 'react-icons/fa';

const ArticleCard = ({ article, index, featured = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  if (featured) {
    return (
      <motion.article 
        className="vintage-card rounded-lg overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="relative h-80 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="bg-gazette-red text-gazette-cream px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
              {article.category}
            </span>
            <h2 className="text-white text-2xl font-display font-bold mt-2 hover:text-gazette-gold transition-colors">
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </h2>
            <div className="flex items-center mt-3 text-white/80 text-sm">
              <span className="flex items-center">
                <FaUser className="mr-1" size={12} />
                {article.author}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <FaClock className="mr-1" size={12} />
                {article.date}
              </span>
              {article.comments && (
                <>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <FaComment className="mr-1" size={12} />
                    {article.comments}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 bg-gazette-light">
          <p className="text-gazette-navy text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          <Link 
            to={`/article/${article.id}`}
            className="inline-block mt-4 text-gazette-red font-bold hover:text-gazette-navy transition-colors"
          >
            Read Full Story
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article 
      className="vintage-card rounded-lg overflow-hidden flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-gazette-red text-gazette-cream px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-grow bg-gazette-light">
        <h3 className="font-display font-bold text-lg text-gazette-navy hover:text-gazette-red transition-colors">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h3>
        <div className="flex items-center mt-2 text-gazette-navy/70 text-xs">
          <span className="flex items-center">
            <FaUser className="mr-1" size={10} />
            {article.author}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <FaClock className="mr-1" size={10} />
            {article.date}
          </span>
        </div>
        <p className="mt-3 text-gazette-navy text-sm leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>
      <div className="p-4 pt-0 bg-gazette-light">
        <Link 
          to={`/article/${article.id}`}
          className="text-sm font-medium text-gazette-red hover:text-gazette-navy transition-colors"
        >
          Continue Reading →
        </Link>
      </div>
    </motion.article>
  );
};

export default ArticleCard;