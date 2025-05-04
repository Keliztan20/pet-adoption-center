import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import ImageCarousel from './ImageCarousel';
import MoodBadge from './MoodBadge';
import IconButton from './IconButton';

const PetCard = ({
  pet,
  currentImageIndex,
  isAnimating,
  onNextImage,
  onPrevImage,
  onEdit,
  onDelete,
  onAdopt
}) => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const animatedScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isAnimating) {
      Animated.parallel([
        Animated.timing(animatedOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animatedScale, {
          toValue: 0.95,
          duration: 500,
          useNativeDriver: true,
        })
      ]).start();
    } else {
      animatedOpacity.setValue(1);
      animatedScale.setValue(1);
    }
  }, [isAnimating, animatedOpacity, animatedScale]);

  const handleAdoptPress = () => {
    if (!pet.adopted) {
      const animateButton = Animated.sequence([
        Animated.timing(animatedScale, {
          toValue: 0.95,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(animatedScale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        })
      ]);

      animateButton.start(() => onAdopt());
    }
  };

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: animatedOpacity,
          transform: [{ scale: animatedScale }]
        }
      ]}
      accessible={true}
      accessibilityLabel={`Pet card for ${pet.name}, a ${pet.age} ${pet.type} who is ${pet.mood} and ${pet.personality}`}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.petName}>{pet.name}</Text>
        <MoodBadge mood={pet.mood} />
      </View>

      <ImageCarousel
        images={pet.images}
        currentIndex={currentImageIndex}
        onNext={onNextImage}
        onPrev={onPrevImage}
      />

      <View style={styles.petInfo}>
        <Text style={styles.petType}>{pet.type}</Text>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.petAge}>{pet.age}</Text>
      </View>

      <View style={styles.personalityContainer}>
        <Text style={styles.quoteStart}>"</Text>
        <Text style={styles.personality}>{pet.personality}</Text>
        <Text style={styles.quoteEnd}>"</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[
            styles.adoptButton,
            pet.adopted && styles.adoptedButton
          ]}
          onPress={handleAdoptPress}
          disabled={pet.adopted}
          accessible={true}
          accessibilityLabel={pet.adopted ? "Already adopted" : "Adopt this pet"}
          accessibilityRole="button"
          accessibilityState={{ disabled: pet.adopted }}
        >
          <Text style={styles.adoptButtonText}>
            {pet.adopted ? "Adopted" : "Adopt"}
          </Text>
        </TouchableOpacity>

        <View style={styles.managementButtons}>
          <IconButton
            iconName="edit"
            color="#0EA5E9"
            borderColor="rgba(14, 165, 233, 0.2)"
            onPress={onEdit}
            accessibilityLabel={`Edit ${pet.name}'s information`}
          />
          <IconButton
            iconName="trash"
            color="#DC2626"
            borderColor="rgba(220, 38, 38, 0.2)"
            onPress={onDelete}
            accessibilityLabel={`Delete ${pet.name} from the list`}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  petName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a154b',
    fontFamily: 'Poppins-SemiBold',
  },
  petInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  petType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4a154b',
  },
  bullet: {
    color: '#AC7EF4',
    fontSize: 16,
    marginHorizontal: 6,
  },
  petAge: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4a154b',
  },
  personalityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.1)',
  },
  quoteStart: {
    fontSize: 16,
    color: '#AC7EF4',
    opacity: 0.7,
  },
  personality: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#AC7EF4',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  quoteEnd: {
    fontSize: 16,
    color: '#AC7EF4',
    opacity: 0.7,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  adoptButton: {
    flex: 1,
    backgroundColor: '#4a154b',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  adoptedButton: {
    backgroundColor: '#9CA3AF',
  },
  adoptButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  managementButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PetCard;