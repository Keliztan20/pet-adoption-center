/*
  Global Styles for Pet Adoption Center

  This file contains global style constants that can be imported
  and used throughout the application for consistent styling.

  For React Native, we use these constants with StyleSheet in components.
*/

// Color palette
export const colors = {
  primary: '#4a154b',
  primaryLight: '#AC7EF4',
  background: '#f8f5ff',
  text: '#333333',
  textLight: '#666666',
  success: '#4ADE80',
  warning: '#FBBF24',
  danger: '#F87171',
  white: '#FFFFFF',
  border: 'rgba(172, 126, 244, 0.1)',
  borderDark: 'rgba(172, 126, 244, 0.2)',
  overlay: 'rgba(0, 0, 0, 0.5)',
  transparent: 'transparent',

  // Mood-specific colors
  moodHappy: {
    bg: 'rgba(74, 222, 128, 0.1)',
    border: 'rgba(74, 222, 128, 0.4)',
    text: 'rgb(74, 222, 128)',
  },
  moodExcited: {
    bg: 'rgba(251, 191, 36, 0.1)',
    border: 'rgba(251, 191, 36, 0.4)',
    text: 'rgb(251, 191, 36)',
  },
  moodSad: {
    bg: 'rgba(248, 113, 113, 0.1)',
    border: 'rgba(248, 113, 113, 0.4)',
    text: 'rgb(248, 113, 113)',
  },
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Font sizes
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
  title: 28,
  subtitle: 18,
};

// Font weights
export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};

// Shadow styles
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
};

// Common button styles
export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  secondary: {
    backgroundColor: colors.transparent,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.borderDark,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semiBold,
  },
};

// Layout constants
export const layout = {
  maxContentWidth: 1200,
  cardMinWidth: 280,
};