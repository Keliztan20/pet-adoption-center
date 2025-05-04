"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";

function FilterBar({ selectedMood, onMoodSelect }) {
  const moods = [
    { id: "All", label: "All Pets", emoji: null },
    { id: "Happy", label: "Happy", emoji: "😊" },
    { id: "Excited", label: "Excited", emoji: "🤩" },
    { id: "Sad", label: "Sad", emoji: "😢" },
  ];

  return (
    <div
      className={styles.filterContainer}
      role="group"
      aria-label="Filter pets by mood"
    >
      {moods.map((mood) => (
        <button
          key={mood.id}
          className={styles.filterButton}
          onClick={() => onMoodSelect(mood.id)}
          style={{
            background:
              selectedMood === mood.id
                ? "rgba(172, 126, 244, 0.2)"
                : "transparent",
            color: selectedMood === mood.id ? "#AC7EF4" : "#000000",
          }}
          aria-pressed={selectedMood === mood.id}
        >
          {mood.emoji && (
            <span className={styles.moodEmoji}>{mood.emoji} </span>
          )}
          {mood.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
