import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterBar = ({ selectedMood, setSelectedMood, setShowAddPetModal }) => {
  const moodOptions = [
    { id: 'All', label: 'All Pets', emoji: null },
    { id: 'Happy', label: 'Happy', emoji: '😊' },
    { id: 'Excited', label: 'Excited', emoji: '🤩' },
    { id: 'Sad', label: 'Sad', emoji: '😢' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        {moodOptions.map((mood) => (
          <TouchableOpacity
            key={mood.id}
            style={[
              styles.filterButton,
              selectedMood === mood.id && styles.selectedFilterButton
            ]}
            onPress={() => setSelectedMood(mood.id)}
            accessible={true}
            accessibilityLabel={`Filter by ${mood.label}`}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedMood === mood.id }}
          >
            <Text style={[
              styles.filterButtonText,
              selectedMood === mood.id && styles.selectedFilterButtonText
            ]}>
              {mood.emoji ? `${mood.emoji} ${mood.label}` : mood.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowAddPetModal(true)}
        accessible={true}
        accessibilityLabel="Add a new pet"
        accessibilityRole="button"
      >
        <Text style={styles.addButtonText}>+ Add New Pet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginHorizontal: 2,
  },
  selectedFilterButton: {
    backgroundColor: 'rgba(172, 126, 244, 0.2)',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  selectedFilterButtonText: {
    color: '#AC7EF4',
  },
  addButton: {
    backgroundColor: '#4a154b',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default FilterBar;