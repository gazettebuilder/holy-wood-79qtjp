import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import VideoCard from '../common/VideoCard';

const TrueCrimeSection = ({ videos }) => {
  // Bail out if no videos
  if (!videos || videos.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-gazette-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gazette-red"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gazette-red/5"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gazette-red/5"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center bg-gazette-red/20 p-2 rounded-full mb-4">
            <FaExclamationTriangle className="text-gazette-red mr-2" size={18} />
            <span className="text-gazette-cream font-bold uppercase text-sm tracking-wider">True Crime</span>
          </div>
          <h2 className="text-gazette-cream font-display text-4xl md:text-5xl font-bold mb-4">
            Unsolved Mysteries & Criminal Investigations
          </h2>
          <p className="text-gazette-cream/70 max-w-2xl mx-auto">
            Explore our true crime documentaries, investigate unsolved mysteries, and dive deep 
            into the most fascinating criminal cases from Crewkerne and beyond.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {videos.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/true-crime" 
            className="px-6 py-3 bg-gazette-red text-gazette-cream font-bold uppercase tracking-wider text-sm rounded-md transition-all duration-300 hover:bg-gazette-red/80 inline-flex items-center group"
          >
            Explore True Crime Series
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrueCrimeSection;