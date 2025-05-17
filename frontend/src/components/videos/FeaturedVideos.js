import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';
import SectionTitle from '../common/SectionTitle';
import VideoCard from '../common/VideoCard';

const FeaturedVideos = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  
  // Bail out if no videos
  if (!videos || videos.length === 0) {
    return null;
  }

  // Take first video as featured and the rest for the grid
  const featuredVideo = videos[0];
  const remainingVideos = videos.slice(1, 5);
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  
  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId);
  };
  
  return (
    <section className="py-16 bg-gazette-light/50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Videos" 
          subtitle="Watch our latest video stories and exclusive reports"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Featured Video */}
          <div className="lg:col-span-8">
            <motion.div 
              className="relative vintage-card rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {activeVideo ? (
                <div className="aspect-video">
                  <YouTube 
                    videoId={activeVideo} 
                    opts={opts} 
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div 
                  className="aspect-video cursor-pointer relative overflow-hidden"
                  onClick={() => handleVideoClick(featuredVideo.videoId)}
                >
                  <img 
                    src={featuredVideo.thumbnail} 
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gazette-navy/80 to-transparent flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gazette-red/90 flex items-center justify-center"
                    >
                      <FaPlay className="text-gazette-cream ml-1" size={24} />
                    </motion.div>
                  </div>
                </div>
              )}
              
              <div className="p-6 bg-gazette-light">
                <h3 className="font-display font-bold text-2xl text-gazette-navy">
                  {featuredVideo.title}
                </h3>
                <p className="mt-2 text-gazette-navy/80">
                  {featuredVideo.description}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Video List */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {remainingVideos.map((video, index) => (
              <motion.div 
                key={video.id}
                className="vintage-card rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleVideoClick(video.videoId)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex">
                  <div className="w-1/3 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gazette-navy/50 flex items-center justify-center">
                      <FaPlay className="text-gazette-cream" size={16} />
                    </div>
                  </div>
                  <div className="w-2/3 p-3">
                    <h4 className="font-bold text-gazette-navy line-clamp-2 text-sm">
                      {video.title}
                    </h4>
                    <span className="text-xs text-gazette-navy/70">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/videos" 
            className="vintage-button inline-flex items-center group"
          >
            View All Videos
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideos;