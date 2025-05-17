import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPlay, FaYoutube } from 'react-icons/fa';

const VideoCard = ({ video, index }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <motion.div 
      className="vintage-card rounded-lg overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-gazette-navy">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 opacity-50' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/80 to-transparent"></div>
        
        {/* Play Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0.7, scale: 0.9 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.7, 
            scale: isHovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 rounded-full bg-gazette-red flex items-center justify-center">
            <FaPlay className="text-gazette-cream ml-1" size={20} />
          </div>
        </motion.div>
        
        {/* Video Duration */}
        <div className="absolute bottom-3 right-3 bg-gazette-navy/80 text-gazette-cream px-2 py-1 text-xs font-bold rounded flex items-center">
          <FaClock className="mr-1" size={10} />
          {video.duration}
        </div>
        
        {/* YouTube Badge */}
        {video.platform === 'youtube' && (
          <div className="absolute top-3 left-3 text-gazette-cream/90 flex items-center">
            <FaYoutube className="text-red-500" size={20} />
            <span className="ml-1 text-xs font-bold">YouTube</span>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gazette-light">
        <h3 className="font-display font-bold text-lg text-gazette-navy line-clamp-2">
          {video.title}
        </h3>
        <div className="flex items-center mt-2 text-gazette-navy/70 text-xs">
          <span className="flex items-center">
            <FaClock className="mr-1" size={10} />
            {video.publishedAt}
          </span>
        </div>
        <p className="mt-2 text-gazette-navy text-sm leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;