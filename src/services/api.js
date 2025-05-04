// This is a mock API service that simulates fetching data from a backend
// In a real application, this would make actual API calls to a server

// Mock data for pets
const petsData = [
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
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fetch all pets
export const fetchPets = async () => {
  // Simulate network delay
  await delay(800);
  return [...petsData];
};

// Add a new pet
export const addPet = async (petData) => {
  await delay(500);
  const newPet = {
    ...petData,
    id: Math.max(...petsData.map((p) => p.id)) + 1,
    adopted: false,
  };
  petsData.push(newPet);
  return newPet;
};

// Update an existing pet
export const updatePet = async (petData) => {
  await delay(500);
  const index = petsData.findIndex((p) => p.id === petData.id);
  if (index !== -1) {
    petsData[index] = petData;
    return petData;
  }
  throw new Error("Pet not found");
};

// Delete a pet
export const deletePet = async (id) => {
  await delay(500);
  const index = petsData.findIndex((p) => p.id === id);
  if (index !== -1) {
    const deletedPet = petsData[index];
    petsData.splice(index, 1);
    return deletedPet;
  }
  throw new Error("Pet not found");
};

// Adopt a pet
export const adoptPet = async (id) => {
  await delay(500);
  const index = petsData.findIndex((p) => p.id === id);
  if (index !== -1) {
    petsData[index].adopted = true;
    return petsData[index];
  }
  throw new Error("Pet not found");
};
