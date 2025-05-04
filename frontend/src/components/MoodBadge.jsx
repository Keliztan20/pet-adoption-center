import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodBadge = ({ mood }) => {
  const getMoodStyles = () => {
    switch (mood) {
      case 'Happy':
        return {
          container: {
            backgroundColor: 'rgba(74, 222, 128, 0.1)',
            borderColor: 'rgba(74, 222, 128, 0.4)',
          },
          text: {
            color: 'rgb(74, 222, 128)',
          },
          emoji: '😊'
        };
      case 'Excited':
        return {
          container: {
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            borderColor: 'rgba(251, 191, 36, 0.4)',
          },
          text: {
            color: 'rgb(251, 191, 36)',
          },
          emoji: '🤩'
        };
      case 'Sad':
        return {
          container: {
            backgroundColor: 'rgba(248, 113, 113, 0.1)',
            borderColor: 'rgba(248, 113, 113, 0.4)',
          },
          text: {
            color: 'rgb(248, 113, 113)',
          },
          emoji: '😢'
        };
      default:
        return {
          container: {
            backgroundColor: 'rgba(156, 163, 175, 0.1)',
            borderColor: 'rgba(156, 163, 175, 0.4)',
          },
          text: {
            color: 'rgb(156, 163, 175)',
          },
          emoji: '😐'
        };
    }
  };

  const moodStyles = getMoodStyles();

  return (
    <View
      style={[styles.container, moodStyles.container]}
      accessible={true}
      accessibilityLabel={`Mood: ${mood}`}
    >
      <Text style={styles.emoji}>{moodStyles.emoji}</Text>
      <Text style={[styles.text, moodStyles.text]}>{mood}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  emoji: {
    fontSize: 14,
    marginRight: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default MoodBadge;