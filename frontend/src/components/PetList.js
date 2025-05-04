import React from 'react';
import { View, StyleSheet } from 'react-native';
import PetCard from './PetCard';

const PetList = ({
  pets,
  currentImageIndexes,
  animatingPetId,
  onNextImage,
  onPrevImage,
  onEdit,
  onDelete,
  onAdopt
}) => {
  return (
    <View style={styles.petGrid}>
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          currentImageIndex={currentImageIndexes[pet.id] || 0}
          isAnimating={animatingPetId === pet.id}
          onNextImage={() => onNextImage(pet.id)}
          onPrevImage={() => onPrevImage(pet.id)}
          onEdit={() => onEdit(pet.id)}
          onDelete={() => onDelete(pet.id)}
          onAdopt={() => onAdopt(pet.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  petGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});

export default PetList;