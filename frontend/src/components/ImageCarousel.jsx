import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ImageCarousel = ({ images, currentIndex, onNext, onPrev }) => {
  if (!images || images.length === 0) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x200?text=No+Image' }}
          style={styles.image}
          accessible={true}
          accessibilityLabel="No image available"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[currentIndex] }}
        style={styles.image}
        accessible={true}
        accessibilityLabel={`Pet image ${currentIndex + 1} of ${images.length}`}
      />

      {images.length > 1 && (
        <>
          <TouchableOpacity
            style={[styles.navButton, styles.prevButton]}
            onPress={onPrev}
            accessible={true}
            accessibilityLabel="Previous image"
            accessibilityRole="button"
          >
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, styles.nextButton]}
            onPress={onNext}
            accessible={true}
            accessibilityLabel="Next image"
            accessibilityRole="button"
          >
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>

          <View style={styles.pagination}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentIndex && styles.activePaginationDot
                ]}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -16 }],
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  navButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 3,
  },
  activePaginationDot: {
    backgroundColor: '#FFFFFF',
  },
});

export default ImageCarousel;