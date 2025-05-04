// This file would contain API calls to a backend service
// For now, it's just a stub with example functions

/**
 * Fetch all pets from the API
 * @returns {Promise<Array>} Promise that resolves to an array of pets
 */
export const fetchPets = async () => {
    // In a real app, this would be an API call
    // For now, we'll just return a mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 500);
    });
  };
  
  /**
   * Add a new pet to the API
   * @param {Object} pet The pet to add
   * @returns {Promise<Object>} Promise that resolves to the added pet
   */
  export const addPet = async (pet) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...pet,
          id: Math.floor(Math.random() * 1000),
        });
      }, 500);
    });
  };
  
  /**
   * Update a pet in the API
   * @param {Object} pet The pet to update
   * @returns {Promise<Object>} Promise that resolves to the updated pet
   */
  export const updatePet = async (pet) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pet);
      }, 500);
    });
  };
  
  /**
   * Delete a pet from the API
   * @param {number} id The ID of the pet to delete
   * @returns {Promise<boolean>} Promise that resolves to true if successful
   */
  export const deletePet = async (id) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  };