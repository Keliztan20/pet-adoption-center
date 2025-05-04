/**
 * Style Utility Functions
 *
 * This file provides utility functions to help bridge between
 * CSS styles and React Native styles, and to make styling more consistent.
 */

import { StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius, shadows } from '../styles/global.js';

/**
 * Creates a StyleSheet with theme variables applied
 * @param {Object} styles - Style object to create
 * @returns {Object} - StyleSheet with processed styles
 */
export const createThemedStyles = (styles) => {
  return StyleSheet.create(styles);
};

/**
 * Get mood-specific styling based on the mood
 * @param {string} mood - The pet's mood (Happy, Excited, Sad)
 * @returns {Object} - Object containing styling for the specified mood
 */
export const getMoodStyling = (mood) => {
  switch (mood) {
    case 'Happy':
      return {
        backgroundColor: colors.moodHappy.bg,
        borderColor: colors.moodHappy.border,
        color: colors.moodHappy.text,
      };
    case 'Excited':
      return {
        backgroundColor: colors.moodExcited.bg,
        borderColor: colors.moodExcited.border,
        color: colors.moodExcited.text,
      };
    case 'Sad':
      return {
        backgroundColor: colors.moodSad.bg,
        borderColor: colors.moodSad.border,
        color: colors.moodSad.text,
      };
    default:
      return {
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderColor: 'rgba(156, 163, 175, 0.4)',
        color: 'rgb(156, 163, 175)',
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
 * Combines multiple style objects, handling arrays and conditional styles
 * @param {...Object|Array|Boolean} styles - Style objects to combine
 * @returns {Array} - Array of combined styles
 */
export const combineStyles = (...styles) => {
  return styles.filter(Boolean).flat();
};

/**
 * Creates responsive styles based on screen dimensions
 * @param {Object} options - Style options for different screen sizes
 * @returns {Object} - Styles for the current screen size
 */
export const responsiveStyles = (options) => {
  // This would be implemented with Dimensions API in a real app
  // For now, just return the base styles
  return options.base || {};
};

/**
 * Common text styles that can be reused across the app
 */
export const textStyles = StyleSheet.create({
  title: {
    fontSize: fontSizes.title,
    fontWeight: fontWeights.bold,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: fontSizes.subtitle,
    fontWeight: fontWeights.medium,
    color: colors.textLight,
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: fontSizes.md,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
});

/**
 * Common layout styles that can be reused across the app
 */
export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.medium,
  },
});