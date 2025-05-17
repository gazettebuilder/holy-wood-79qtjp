import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaYoutube } from 'react-icons/fa';
import VideoCard from '../components/common/VideoCard';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { trueCrimeVideos } from '../utils/mockData';

const TrueCrimePage = () => {
  useEffect(() => {
    document.title = 'True Crime - The Crewkerne Gazette';
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gazette-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1605806616949-1e87b487fc2f"
            alt="True Crime Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gazette-navy via-gazette-navy/95 to-gazette-navy"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center mb-6">
            <motion.div 
              className="inline-flex items-center justify-center bg-gazette-red/20 p-2 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaExclamationTriangle className="text-gazette-red mr-2" size={24} />
              <span className="text-gazette-cream font-bold uppercase text-lg tracking-wider">True Crime</span>
            </motion.div>
            
            <motion.h1 
              className="text-gazette-cream text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mysteries, Investigations & Unsolved Cases
            </motion.h1>
            
            <motion.p 
              className="text-gazette-cream/80 text-center mt-6 max-w-2xl text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Dive deep into our true crime documentaries, investigative reports, and the most fascinating 
              criminal cases from Crewkerne and beyond.
            </motion.p>
            
            <motion.a 
              href="https://m.youtube.com/@TheCrewkerneGazette" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaYoutube size={24} className="mr-2" />
              Subscribe to Our YouTube Channel
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Featured Series */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Series</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="vintage-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578593139775-971441c3c518" 
                  alt="Cold Cases" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-gazette-cream font-display text-2xl font-bold">Cold Case Files</h3>
                  <p className="text-gazette-cream/80 mt-2">Revisiting unsolved mysteries from our archives</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gazette-navy">
                  Our investigative team reopens forgotten cases, bringing new technology and fresh eyes to mysteries that have remained unsolved for decades.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gazette-red font-bold">12 Episodes</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="vintage-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605806616949-1e87b487fc2f" 
                  alt="Criminal Minds" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-gazette-cream font-display text-2xl font-bold">Criminal Minds</h3>
                  <p className="text-gazette-cream/80 mt-2">The psychology behind notorious crimes</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gazette-navy">
                  Experts analyze the psychological factors and social conditions that lead to criminal behavior, providing insight into some of history's most notorious cases.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gazette-red font-bold">8 Episodes</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="vintage-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578593139775-971441c3c518" 
                  alt="Local Legends" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-gazette-cream font-display text-2xl font-bold">Local Legends</h3>
                  <p className="text-gazette-cream/80 mt-2">Urban myths with criminal connections</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gazette-navy">
                  Exploring the thin line between folklore and fact in Crewkerne's most enduring urban legends and the true crimes that may have inspired them.
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gazette-red font-bold">5 Episodes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest Episodes */}
      <section className="py-16 bg-gazette-light/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Latest Episodes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {trueCrimeVideos.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video}
                index={index}
              />
            ))}
            {/* Duplicate videos for demonstration */}
            {trueCrimeVideos.map((video, index) => (
              <VideoCard 
                key={`duplicate-${video.id}`} 
                video={{...video, id: `duplicate-${video.id}`}}
                index={index + trueCrimeVideos.length}
              />
            ))}
          </div>
          
          {/* Load More Button - In a real app, this would implement pagination */}
          <div className="text-center mt-8">
            <button className="vintage-button">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
};

export default TrueCrimePage;