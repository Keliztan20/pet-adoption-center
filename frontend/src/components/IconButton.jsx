import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButton = ({ iconName, color, borderColor, onPress, accessibilityLabel }) => {
  // Simple icon mapping for demonstration
  // In a real app, you would use a proper icon library like react-native-vector-icons
  const getIconText = () => {
    switch (iconName) {
      case 'edit':
        return '✏️';
      case 'trash':
        return '🗑️';
      case 'heart':
        return '❤️';
      default:
        return '•';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderColor: borderColor || 'transparent',
        }
      ]}
      onPress={onPress}
      accessible={true}
      accessibilityLabel={accessibilityLabel || iconName}
      accessibilityRole="button"
    >
      <Text style={[styles.icon, { color }]}>{getIconText()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  icon: {
    fontSize: 16,
  },
});

export default IconButton;