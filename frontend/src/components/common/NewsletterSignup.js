import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    
    // Simulate API call
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-gazette-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gazette-red via-gazette-gold to-gazette-red"></div>
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 rounded-full bg-gazette-red/10"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gazette-gold/10"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-gazette-cream font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stay Informed with Our Newsletter
          </motion.h2>
          
          <motion.p 
            className="text-gazette-cream/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get the latest news, exclusive stories, and special features delivered straight to your inbox. 
            Join our community of informed readers.
          </motion.p>
          
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-600/20 text-green-300 p-4 rounded-md border border-green-500/30 flex items-center justify-center mb-8"
            >
              <FaCheckCircle className="mr-2" size={24} />
              <div>
                <p className="font-bold">Thank you for subscribing!</p>
                <p className="text-sm">We've sent a confirmation email to your inbox.</p>
              </div>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`w-full bg-gazette-light/10 border-2 ${
                    status === 'error' ? 'border-red-500' : 'border-gazette-gold/30'
                  } rounded-md px-4 py-3 focus:outline-none focus:border-gazette-gold text-gazette-cream`}
                  disabled={status === 'loading' || status === 'success'}
                />
                <button
                  type="submit"
                  className={`absolute right-0 top-0 h-full px-4 rounded-r-md flex items-center justify-center ${
                    status === 'loading' ? 'bg-gazette-navy' :
                    status === 'success' ? 'bg-green-600' :
                    status === 'error' ? 'bg-red-600' : 'bg-gazette-red'
                  } text-gazette-cream transition-colors duration-300`}
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-gazette-cream border-t-transparent rounded-full animate-spin"></div>
                  ) : status === 'success' ? (
                    <span className="text-sm font-bold">THANK YOU!</span>
                  ) : (
                    <span className="flex items-center">
                      <FaPaperPlane className="mr-2" size={14} />
                      <span className="font-bold">SUBSCRIBE</span>
                    </span>
                  )}
                </button>
              </div>
              
              {status === 'error' && (
                <p className="text-red-400 text-sm mt-2 text-left">
                  Please enter a valid email address.
                </p>
              )}
              
              <p className="text-gazette-cream/60 text-xs mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive news from The Crewkerne Gazette.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;