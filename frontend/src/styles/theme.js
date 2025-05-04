/**
 * Theme configuration for the Pet Adoption Center app
 * This file centralizes all styling constants for consistent UI
 */

import { colors, spacing, fontSizes, fontWeights, borderRadius, shadows, buttonStyles, layout } from './global.js';

// Re-export all styling constants
export {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  borderRadius,
  shadows,
  buttonStyles,
  layout
};

// Helper functions for theme usage

/**
 * Get mood-specific styling based on the mood
 * @param {string} mood - The pet's mood (Happy, Excited, Sad)
 * @returns {Object} - Object containing styling for the specified mood
 */
export const getMoodStyling = (mood) => {
  switch (mood) {
    case 'Happy':
      return colors.moodHappy;
    case 'Excited':
      return colors.moodExcited;
    case 'Sad':
      return colors.moodSad;
    default:
      return {
        bg: 'rgba(156, 163, 175, 0.1)',
        border: 'rgba(156, 163, 175, 0.4)',
        text: 'rgb(156, 163, 175)',
      };
  }
};

/**
 * Get emoji for a specific mood
 * @param {string} mood - The pet's mood
 * @returns {string} - Emoji representing the mood
 */
export const getMoodEmoji = (mood) => {
  switch (mood) {
    case 'Happy':
      return '😊';
    case 'Excited':
      return '🤩';
    case 'Sad':
      return '😢';
    default:
      return '😐';
  }
};

/**
 * Create responsive styles based on screen width
 * @param {Object} options - Responsive style options
 * @param {Object} options.base - Base styles for all screen sizes
 * @param {Object} options.sm - Styles for small screens (>= 480px)
 * @param {Object} options.md - Styles for medium screens (>= 768px)
 * @param {Object} options.lg - Styles for large screens (>= 1024px)
 * @param {Object} options.xl - Styles for extra large screens (>= 1280px)
 * @returns {Object} - Combined styles based on current screen width
 */
export const responsive = (options) => {
  // This would be implemented with Dimensions API in a real app
  // For now, just return the base styles
  return options.base || {};
};