import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PetList from '../components/PetList';
import FilterBar from '../components/FilterBar';
import AddPetForm from '../components/AddPetForm';
import EditPetModal from '../components/EditPetModal';
import { initialPets } from '../utils/helpers';

const HomePage = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [animatingPetId, setAnimatingPetId] = useState(null);
  const [editingPet, setEditingPet] = useState(null);
  const [showAddPetModal, setShowAddPetModal] = useState(false);
  const [selectedMood, setSelectedMood] = useState('All');
  const [pets, setPets] = useState(initialPets);

  const [editForm, setEditForm] = useState({
    name: "",
    personality: "",
    mood: "",
  });

  const [newPetForm, setNewPetForm] = useState({
    name: "",
    type: "Cat",
    age: "",
    mood: "Happy",
    personality: "",
    images: [""],
  });

  const resetNewPetForm = () => {
    setNewPetForm({
      name: "",
      type: "Cat",
      age: "",
      mood: "Happy",
      personality: "",
      images: [""],
    });
  };

  const addNewPet = () => {
    const newPet = {
      ...newPetForm,
      id: pets.length + 1,
      adopted: false,
    };
    setPets([...pets, newPet]);
    setShowAddPetModal(false);
    resetNewPetForm();
  };

  const nextImage = (petId) => {
    const currentIndex = currentImageIndexes[petId] || 0;
    const pet = pets.find((p) => p.id === petId);
    if (pet && Array.isArray(pet.images)) {
      setCurrentImageIndexes({
        ...currentImageIndexes,
        [petId]: (currentIndex + 1) % pet.images.length
      });
    }
  };

  const prevImage = (petId) => {
    const currentIndex = currentImageIndexes[petId] || 0;
    const pet = pets.find((p) => p.id === petId);
    if (pet && Array.isArray(pet.images)) {
      setCurrentImageIndexes({
        ...currentImageIndexes,
        [petId]: (currentIndex - 1 + pet.images.length) % pet.images.length
      });
    }
  };

  const editPet = (id) => {
    const pet = pets.find((p) => p.id === id);
    if (pet) {
      setEditingPet({
        ...pet,
      });
      setEditForm({
        name: pet.name,
        personality: pet.personality,
        mood: pet.mood,
      });
    }
  };

  const saveEditedPet = () => {
    if (editingPet) {
      const updatedPet = {
        ...editingPet,
        name: editForm.name,
        personality: editForm.personality,
        mood: editForm.mood,
      };
      setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
      setEditingPet(null);
    }
  };

  const cancelEdit = () => {
    setEditingPet(null);
  };

  const deletePet = (id) => {
    setAnimatingPetId(id);
    setTimeout(() => {
      setPets(pets.filter((pet) => pet.id !== id));
      setAnimatingPetId(null);
    }, 500);
  };

  const adoptPet = (id) => {
    setPets(
      pets.map((pet) =>
        pet.id === id
          ? {
              ...pet,
              adopted: true,
            }
          : pet
      )
    );
  };

  const handleEditFormChange = (field, value) => {
    setEditForm({
      ...editForm,
      [field]: value
    });
  };

  const handleNewPetFormChange = (field, value) => {
    if (field === 'images') {
      setNewPetForm({
        ...newPetForm,
        images: [value]
      });
    } else {
      setNewPetForm({
        ...newPetForm,
        [field]: value
      });
    }
  };

  const filteredPets = pets.filter(
    (pet) => selectedMood === 'All' || pet.mood === selectedMood
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.logoCircle} />
          <Text style={styles.title}>Virtual Pet Adoption Center</Text>
        </View>
        <Text style={styles.subtitle}>Find your perfect companion today!</Text>
      </View>

      <FilterBar
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
        setShowAddPetModal={setShowAddPetModal}
      />

      <PetList
        pets={filteredPets}
        currentImageIndexes={currentImageIndexes}
        animatingPetId={animatingPetId}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onEdit={editPet}
        onDelete={deletePet}
        onAdopt={adoptPet}
      />

      {editingPet && (
        <EditPetModal
          editingPet={editingPet}
          editForm={editForm}
          onChangeField={handleEditFormChange}
          onSave={saveEditedPet}
          onCancel={cancelEdit}
        />
      )}

      {showAddPetModal && (
        <AddPetForm
          newPetForm={newPetForm}
          onChangeField={handleNewPetFormChange}
          onAdd={addNewPet}
          onCancel={() => {
            setShowAddPetModal(false);
            resetNewPetForm();
          }}
          visible={showAddPetModal}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#AC7EF4',
    marginRight: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4a154b',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Inter-Medium',
    opacity: 0.9,
  },
});

export default HomePage;