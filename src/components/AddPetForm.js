"use client";
import React, { useState } from "react";
import styles from "../styles/InputDesign.module.css";

function AddPetForm({ pet, isEditing = false, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: pet?.name || "",
    type: pet?.type || "Cat",
    age: pet?.age || "1 year old",
    mood: pet?.mood || "Happy",
    personality: pet?.personality || "",
    images: pet?.images || [
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
    ],
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.personality.trim()) {
      newErrors.personality = "Personality is required";
    }

    if (!form.age.trim()) {
      newErrors.age = "Age is required";
    }

    if (!form.images || form.images.length === 0) {
      newErrors.images = "At least one image URL is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    // Clear error when field is edited
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSave(isEditing ? { ...pet, ...form } : form);
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="pet-form-title"
    >
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle} id="pet-form-title">
          {isEditing ? `Edit ${pet.name}` : "Add New Pet"}
        </h2>

        <form className={styles.editForm} onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-name">
              Name
            </label>
            <input
              id="pet-name"
              className={`${styles.formInput} ${errors.name ? styles.inputError : ""}`}
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-type">
              Type
            </label>
            <select
              id="pet-type"
              className={styles.formSelect}
              value={form.type}
              onChange={(e) => handleChange("type", e.target.value)}
            >
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Hamster">Hamster</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-age">
              Age
            </label>
            <input
              id="pet-age"
              className={`${styles.formInput} ${errors.age ? styles.inputError : ""}`}
              value={form.age}
              onChange={(e) => handleChange("age", e.target.value)}
              placeholder="e.g. 2 years old"
              required
            />
            {errors.age && (
              <span className={styles.errorText}>{errors.age}</span>
            )}
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-mood">
              Mood
            </label>
            <select
              id="pet-mood"
              className={styles.formSelect}
              value={form.mood}
              onChange={(e) => handleChange("mood", e.target.value)}
            >
              <option value="Happy">Happy</option>
              <option value="Excited">Excited</option>
              <option value="Sad">Sad</option>
            </select>
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-personality">
              Personality
            </label>
            <input
              id="pet-personality"
              className={`${styles.formInput} ${errors.personality ? styles.inputError : ""}`}
              value={form.personality}
              onChange={(e) => handleChange("personality", e.target.value)}
              placeholder="e.g. Playful, Friendly, Calm"
              required
            />
            {errors.personality && (
              <span className={styles.errorText}>{errors.personality}</span>
            )}
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="pet-image-url">
              Image URLs (one per line)
            </label>
            <textarea
              id="pet-image-url"
              className={`${styles.formTextarea} ${errors.images ? styles.inputError : ""}`}
              value={form.images.join("\n")}
              onChange={(e) =>
                handleChange(
                  "images",
                  e.target.value.split("\n").filter((url) => url.trim()),
                )
              }
              rows={3}
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
            />
            {errors.images && (
              <span className={styles.errorText}>{errors.images}</span>
            )}
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              {isEditing ? "Save Changes" : "Add Pet"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPetForm;
