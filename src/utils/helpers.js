/**
 * Format pet data to ensure all required fields are present
 * @param {Array} pets - Array of pet objects
 * @returns {Array} - Formatted pet objects
 */
export const formatPetData = (pets) => {
  return pets.map((pet) => ({
    id: pet.id,
    name: pet.name || "Unknown",
    type: pet.type || "Unknown",
    age: pet.age || "Unknown",
    mood: pet.mood || "Happy",
    personality: pet.personality || "Friendly",
    adopted: pet.adopted || false,
    images:
      Array.isArray(pet.images) && pet.images.length > 0
        ? pet.images
        : [
            "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
          ],
  }));
};

/**
 * Get emoji based on pet mood
 * @param {string} mood - Pet mood
 * @returns {string} - Emoji representing the mood
 */
export const getMoodEmoji = (mood) => {
  const emojis = {
    Happy: "😊",
    Excited: "🤩",
    Sad: "😢",
  };

  return emojis[mood] || "😐";
};

/**
 * Get color styles based on pet mood
 * @param {string} mood - Pet mood
 * @returns {Object} - Style object with colors
 */
export const getMoodStyles = (mood) => {
  const styles = {
    Happy: {
      backgroundColor: "rgba(74, 222, 128, 0.1)",
      color: "rgb(74, 222, 128)",
      borderColor: "rgba(74, 222, 128, 0.4)",
    },
    Excited: {
      backgroundColor: "rgba(251, 191, 36, 0.1)",
      color: "rgb(251, 191, 36)",
      borderColor: "rgba(251, 191, 36, 0.4)",
    },
    Sad: {
      backgroundColor: "rgba(248, 113, 113, 0.1)",
      color: "rgb(248, 113, 113)",
      borderColor: "rgba(248, 113, 113, 0.4)",
    },
  };

  return styles[mood] || styles.Happy;
};

/**
 * Format a date to a readable string
 * @param {Date} date - Date object
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Generate a unique ID
 * @returns {string} - Unique ID
 */
export const generateId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

/**
 * Validate image URL
 * @param {string} url - Image URL to validate
 * @returns {boolean} - Whether URL is valid
 */
export const isValidImageUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:"].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};
