import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import VideoCard from '../components/common/VideoCard';
import TrueCrimeSection from '../components/videos/TrueCrimeSection';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { featuredVideos, trueCrimeVideos } from '../utils/mockData';

const VideosPage = () => {
  useEffect(() => {
    document.title = 'Videos - The Crewkerne Gazette';
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gazette-navy py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-gazette-cream text-4xl md:text-5xl font-display font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Video Stories
          </motion.h1>
          <motion.p 
            className="text-gazette-cream/80 text-center mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Watch our latest video reports, documentaries, and exclusive content from The Crewkerne Gazette.
          </motion.p>
        </div>
      </div>
      
      {/* All Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Recent Videos" 
            subtitle="Our latest video stories and reports from Crewkerne and beyond"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredVideos.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video}
                index={index}
              />
            ))}
            {/* Duplicate some videos for demonstration */}
            {featuredVideos.slice(0, 3).map((video, index) => (
              <VideoCard 
                key={`duplicate-${video.id}`} 
                video={{...video, id: `duplicate-${video.id}`}}
                index={index + featuredVideos.length}
              />
            ))}
          </div>
          
          {/* Load More Button - In a real app, this would implement pagination */}
          <div className="text-center mt-8">
            <button className="vintage-button">
              Load More Videos
            </button>
          </div>
        </div>
      </section>
      
      {/* True Crime Section */}
      <TrueCrimeSection videos={trueCrimeVideos} />
      
      <NewsletterSignup />
    </div>
  );
};

export default VideosPage;