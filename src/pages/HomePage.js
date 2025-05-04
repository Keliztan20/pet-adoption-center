"use client";
import React, { useState, useEffect } from "react";
import PetList from "../components/PetList";
import FilterBar from "../components/FilterBar";
import AddPetForm from "../components/AddPetForm";
import { fetchPets } from "../services/api";
import { formatPetData } from "../utils/helpers";
import styles from "../styles/InputDesign.module.css";

function HomePage() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedMood, setSelectedMood] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingPet, setEditingPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPets = async () => {
      try {
        const petsData = await fetchPets();
        const formattedPets = formatPetData(petsData);
        setPets(formattedPets);
        setFilteredPets(formattedPets);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading pets:", error);
        setIsLoading(false);
      }
    };

    loadPets();
  }, []);

  useEffect(() => {
    if (selectedMood === "All") {
      setFilteredPets(pets);
    } else {
      setFilteredPets(pets.filter((pet) => pet.mood === selectedMood));
    }
  }, [selectedMood, pets]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleAddPet = (newPet) => {
    const petWithId = {
      ...newPet,
      id: pets.length > 0 ? Math.max(...pets.map((p) => p.id)) + 1 : 1,
      adopted: false,
    };
    setPets([...pets, petWithId]);
    setIsAddModalOpen(false);
  };

  const handleEditPet = (id) => {
    const pet = pets.find((p) => p.id === id);
    if (pet) {
      setEditingPet(pet);
    }
  };

  const handleSaveEdit = (updatedPet) => {
    setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
    setEditingPet(null);
  };

  const handleDeletePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const handleAdoptPet = (id) => {
    setPets(
      pets.map((pet) => (pet.id === id ? { ...pet, adopted: true } : pet)),
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <header>
          <h1 className={styles.title}>          
            <span className={styles.titleText}>
              Virtual Pet Adoption Center
            </span>
          </h1>
          <p className={styles.subtitle}>Find your perfect companion today!</p>
        </header>

        <div className={styles.controlsContainer}>
          <FilterBar
            selectedMood={selectedMood}
            onMoodSelect={handleMoodSelect}
          />

          <button
            className={styles.addPetButton}
            onClick={() => setIsAddModalOpen(true)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add New Pet</span>
          </button>
        </div>

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <p>Loading pets...</p>
          </div>
        ) : (
          <PetList
            pets={filteredPets}
            onEdit={handleEditPet}
            onDelete={handleDeletePet}
            onAdopt={handleAdoptPet}
          />
        )}
      </div>

      {isAddModalOpen && (
        <AddPetForm
          onSave={handleAddPet}
          onCancel={() => setIsAddModalOpen(false)}
        />
      )}

      {editingPet && (
        <AddPetForm
          pet={editingPet}
          isEditing={true}
          onSave={handleSaveEdit}
          onCancel={() => setEditingPet(null)}
        />
      )}
    </main>
  );
}

export default HomePage;
