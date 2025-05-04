/**
 * Format a date to a readable string
 * @param {Date} date The date to format
 * @returns {string} The formatted date string
 */
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  /**
   * Get emoji for a mood
   * @param {string} mood The mood
   * @returns {string} The emoji for the mood
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
   * Get color for a mood
   * @param {string} mood The mood
   * @returns {Object} The color styles for the mood
   */
  export const getMoodColor = (mood) => {
    switch (mood) {
      case 'Happy':
        return {
          bg: 'rgba(74, 222, 128, 0.1)',
          border: 'rgba(74, 222, 128, 0.4)',
          text: 'rgb(74, 222, 128)',
        };
      case 'Excited':
        return {
          bg: 'rgba(251, 191, 36, 0.1)',
          border: 'rgba(251, 191, 36, 0.4)',
          text: 'rgb(251, 191, 36)',
        };
      case 'Sad':
        return {
          bg: 'rgba(248, 113, 113, 0.1)',
          border: 'rgba(248, 113, 113, 0.4)',
          text: 'rgb(248, 113, 113)',
        };
      default:
        return {
          bg: 'rgba(156, 163, 175, 0.1)',
          border: 'rgba(156, 163, 175, 0.4)',
          text: 'rgb(156, 163, 175)',
        };
    }
  };
  
  /**
   * Initial pets data
   */
  export const initialPets = [
    {
      id: 1,
      name: "Luna",
      type: "Cat",
      age: "2 years old",
      mood: "Happy",
      personality: "Affectionate",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg",
        "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg",
        "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg",
      ],
    },
    {
      id: 2,
      name: "Max",
      type: "Dog",
      age: "4 years old",
      mood: "Excited",
      personality: "Playful",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
        "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      ],
    },
    {
      id: 3,
      name: "Oliver",
      type: "Cat",
      age: "1 year old",
      mood: "Happy",
      personality: "Curious",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/6864663/pexels-photo-6864663.jpeg",
        "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      ],
    },
    {
      id: 4,
      name: "Bella",
      type: "Dog",
      age: "3 years old",
      mood: "Excited",
      personality: "Friendly",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/4555468/pexels-photo-4555468.jpeg",
        "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      ],
    },
    {
      id: 5,
      name: "Charlie",
      type: "Dog",
      age: "5 years old",
      mood: "Happy",
      personality: "Gentle",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/998254/pexels-photo-998254.jpeg",
        "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      ],
    },
    {
      id: 6,
      name: "Milo",
      type: "Cat",
      age: "2 years old",
      mood: "Sad",
      personality: "Independent",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/31868598/pexels-photo-31868598.jpeg",
        "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      ],
    },
    {
      id: 7,
      name: "Lucy",
      type: "Dog",
      age: "1 year old",
      mood: "Excited",
      personality: "Energetic",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/26202787/pexels-photo-26202787.jpeg",
        "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      ],
    },
    {
      id: 8,
      name: "Leo",
      type: "Cat",
      age: "4 years old",
      mood: "Happy",
      personality: "Calm",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/762986/pexels-photo-762986.jpeg",
        "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      ],
    },
    {
      id: 9,
      name: "Rocky",
      type: "Dog",
      age: "6 years old",
      mood: "Happy",
      personality: "Loyal",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/30480074/pexels-photo-30480074.jpeg",
        "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      ],
    },
    {
      id: 10,
      name: "Simba",
      type: "Cat",
      age: "3 years old",
      mood: "Excited",
      personality: "Adventurous",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/736530/pexels-photo-736530.jpeg",
        "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      ],
    },
    {
      id: 11,
      name: "Bailey",
      type: "Dog",
      age: "2 years old",
      mood: "Happy",
      personality: "Sweet",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/31805606/pexels-photo-31805606.jpeg",
        "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg",
        "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg",
      ],
    },
    {
      id: 12,
      name: "Nala",
      type: "Cat",
      age: "1 year old",
      mood: "Sad",
      personality: "Shy",
      adopted: false,
      images: [
        "https://images.pexels.com/photos/86243/pexels-photo-86243.jpeg",
        "https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      ],
    },
  ];