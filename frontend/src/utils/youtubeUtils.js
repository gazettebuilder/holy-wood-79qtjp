// YouTube utility functions

/**
 * Extract video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} - YouTube video ID or null if invalid
 */
export const extractYouTubeId = (url) => {
  if (!url) return null;
  
  // Match patterns like:
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  // https://www.youtube.com/embed/VIDEO_ID
  // https://m.youtube.com/watch?v=VIDEO_ID
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[1].length === 11) ? match[1] : null;
};

/**
 * Generate YouTube thumbnail URL from video ID
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality (default, mq, hq, sd, maxres)
 * @returns {string} - YouTube thumbnail URL
 */
export const getYouTubeThumbnail = (videoId, quality = 'hq') => {
  if (!videoId) return '';
  
  const qualityMap = {
    default: 'default',
    mq: 'mqdefault',
    hq: 'hqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault'
  };
  
  const thumbQuality = qualityMap[quality] || 'hqdefault';
  return `https://img.youtube.com/vi/${videoId}/${thumbQuality}.jpg`;
};

/**
 * Format YouTube API duration (ISO 8601) to readable format (MM:SS)
 * @param {string} duration - ISO 8601 duration from YouTube API
 * @returns {string} - Formatted duration (MM:SS or HH:MM:SS)
 */
export const formatYouTubeDuration = (duration) => {
  if (!duration) return '00:00';
  
  // Remove PT from the beginning
  let formattedDuration = duration.replace('PT', '');
  
  // Extract hours, minutes and seconds
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  
  // Hours
  if (formattedDuration.includes('H')) {
    hours = parseInt(formattedDuration.split('H')[0]);
    formattedDuration = formattedDuration.split('H')[1];
  }
  
  // Minutes
  if (formattedDuration.includes('M')) {
    minutes = parseInt(formattedDuration.split('M')[0]);
    formattedDuration = formattedDuration.split('M')[1];
  }
  
  // Seconds
  if (formattedDuration.includes('S')) {
    seconds = parseInt(formattedDuration.split('S')[0]);
  }
  
  // Format the output
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * Format view count to readable format (e.g. 1.2M, 456K)
 * @param {number} viewCount - Number of views
 * @returns {string} - Formatted view count
 */
export const formatViewCount = (viewCount) => {
  if (!viewCount) return '0 views';
  
  const views = parseInt(viewCount);
  
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1).replace(/\.0$/, '')}M views`;
  }
  
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1).replace(/\.0$/, '')}K views`;
  }
  
  return `${views} views`;
};