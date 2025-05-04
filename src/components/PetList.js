"use client";
import React, { useState } from "react";
import PetCard from "./PetCard";
import styles from "../styles/InputDesign.module.css";

function PetList({ pets, onEdit, onDelete, onAdopt }) {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [animatingPetId, setAnimatingPetId] = useState(null);

  const handleNextImage = (petId) => {
    const currentIndex = currentImageIndexes[petId] || 0;
    const pet = pets.find((p) => p.id === petId);
    if (pet && Array.isArray(pet.images)) {
      setCurrentImageIndexes({
        ...currentImageIndexes,
        [petId]: (currentIndex + 1) % pet.images.length,
      });
    }
  };

  const handlePrevImage = (petId) => {
    const currentIndex = currentImageIndexes[petId] || 0;
    const pet = pets.find((p) => p.id === petId);
    if (pet && Array.isArray(pet.images)) {
      setCurrentImageIndexes({
        ...currentImageIndexes,
        [petId]: (currentIndex - 1 + pet.images.length) % pet.images.length,
      });
    }
  };

  const handleDelete = (id) => {
    setAnimatingPetId(id);
    setTimeout(() => {
      onDelete(id);
      setAnimatingPetId(null);
    }, 500);
  };

  return (
    <section
      className={styles.petsGrid}
      aria-label="Pets available for adoption"
    >
      {pets.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No pets found matching your filter criteria.</p>
        </div>
      ) : (
        pets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            currentImageIndex={currentImageIndexes[pet.id] || 0}
            isAnimating={animatingPetId === pet.id}
            onNextImage={() => handleNextImage(pet.id)}
            onPrevImage={() => handlePrevImage(pet.id)}
            onAdopt={() => onAdopt(pet.id)}
            onEdit={() => onEdit(pet.id)}
            onDelete={() => handleDelete(pet.id)}
          />
        ))
      )}
    </section>
  );
}

export default PetList;
