"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";

function PetCard({
  pet,
  currentImageIndex,
  isAnimating,
  onNextImage,
  onPrevImage,
  onAdopt,
  onEdit,
  onDelete,
}) {
  const getMoodStyles = () => {
    const moodStyles = {
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

    return moodStyles[pet.mood] || moodStyles.Happy;
  };

  const getMoodEmoji = () => {
    const emojis = {
      Happy: "😊",
      Excited: "🤩",
      Sad: "😢",
    };

    return emojis[pet.mood] || "";
  };

  const handleAdoptClick = (event) => {
    const btn = event.currentTarget;
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      onAdopt();
    }, 150);
  };

  const handleDeleteClick = (event) => {
    const btn = event.currentTarget;
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      onDelete();
    }, 150);
  };

  return (
    <article
      className={styles.petCard}
      style={{
        opacity: isAnimating ? "0" : "1",
        transform: isAnimating
          ? "scale(0.95) translateY(10px)"
          : "scale(1) translateY(0)",
      }}
    >
      <div className={styles.petCardHeader}>
        <h3 className={styles.petName}>{pet.name}</h3>
        <div className={styles.moodBadge} style={getMoodStyles()}>
          <span className={styles.moodEmoji}>{getMoodEmoji()}</span>
          <span className={styles.moodText}>{pet.mood}</span>
        </div>
      </div>

      <div className={styles.imageCarousel}>
        <div className={styles.imageContainer}>
          <img
            className={styles.petImage}
            src={pet.images?.[currentImageIndex] || pet.image}
            alt={`${pet.name} - ${pet.type}`}
          />

          {pet.images && pet.images.length > 1 && (
            <>
              <button
                className={styles.prevButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevImage();
                }}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className={styles.nextButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onNextImage();
                }}
                aria-label="Next image"
              >
                →
              </button>

              <div className={styles.carouselDots}>
                {pet.images.map((_, index) => (
                  <div
                    key={index}
                    className={styles.carouselDot}
                    style={{
                      background:
                        index === currentImageIndex
                          ? "white"
                          : "rgba(255,255,255,0.5)",
                    }}
                    aria-label={
                      index === currentImageIndex
                        ? "Current image"
                        : `Image ${index + 1}`
                    }
                    role="button"
                    tabIndex={0}
                    onClick={() => onNextImage()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        onNextImage();
                      }
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.petDetails}>
        <span className={styles.petType}>{pet.type}</span>
        <span className={styles.detailsDot}>•</span>
        <span className={styles.petAge}>{pet.age}</span>
      </div>

      <blockquote className={styles.personalityQuote}>
        <span className={styles.quoteStart}>&quot;</span>
        <span className={styles.personalityText}>{pet.personality}</span>
        <span className={styles.quoteEnd}>&quot;</span>
      </blockquote>

      <div className={styles.actionButtons}>
        <button
          className={styles.adoptButton}
          disabled={pet.adopted}
          onClick={handleAdoptClick}
          aria-label={pet.adopted ? "Already adopted" : `Adopt ${pet.name}`}
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
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          {pet.adopted ? <span>Adopted</span> : <span>Adopt</span>}
        </button>

        <div className={styles.secondaryActions}>
          <button
            className={styles.editButton}
            aria-label={`Edit ${pet.name}`}
            onClick={onEdit}
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
              aria-hidden="true"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            className={styles.deleteButton}
            aria-label={`Delete ${pet.name}`}
            onClick={handleDeleteClick}
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
              aria-hidden="true"
            >
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default PetCard;
