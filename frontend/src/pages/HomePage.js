import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/news/HeroSection';
import LatestNews from '../components/news/LatestNews';
import FeaturedVideos from '../components/videos/FeaturedVideos';
import TrueCrimeSection from '../components/videos/TrueCrimeSection';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { featuredArticles, latestArticles, featuredVideos, trueCrimeVideos } from '../utils/mockData';

const HomePage = () => {
  useEffect(() => {
    document.title = 'The Crewkerne Gazette - Your Trusted Local News Source';
  }, []);

  return (
    <div>
      {/* Hero Section with Featured Articles */}
      <HeroSection featuredArticles={featuredArticles} />
      
      {/* Latest News Section */}
      <LatestNews articles={latestArticles} />
      
      {/* Featured Videos Section */}
      <FeaturedVideos videos={featuredVideos} />
      
      {/* True Crime Section */}
      <TrueCrimeSection videos={trueCrimeVideos} />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Breaking News Ticker */}
      <motion.div 
        className="fixed bottom-0 left-0 w-full bg-gazette-red text-gazette-cream py-3 z-40"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="whitespace-nowrap font-bold uppercase tracking-wider mr-4">
              Breaking News:
            </div>
            <div className="overflow-hidden whitespace-nowrap">
              <motion.div
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
                className="inline-block"
              >
                Town Hall renovation project receives £2.1 million grant • Local football team advances to regional finals • Weather warning: Heavy rain expected this weekend • New community garden project seeks volunteers • County Council announces road improvement scheme
              </motion.div>
              <motion.div
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                  delay: 10
                }}
                className="inline-block ml-20"
              >
                Town Hall renovation project receives £2.1 million grant • Local football team advances to regional finals • Weather warning: Heavy rain expected this weekend • New community garden project seeks volunteers • County Council announces road improvement scheme
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;