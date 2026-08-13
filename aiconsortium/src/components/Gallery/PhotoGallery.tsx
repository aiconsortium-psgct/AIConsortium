import { useState, useEffect, useCallback } from 'react';
import './PhotoGallery.css';
import { Gallery } from '../../data/gallery.ts';
import { gallery } from '../../data/gallery.ts';

interface PhotoGalleryProps {
  photos?: Gallery[];
}

const PhotoGallery = ({ photos = gallery }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="photo-gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="photo-gallery-container">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`gallery-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={photo.image} alt={`Gallery slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className="gallery-nav-button prev"
        onClick={prevSlide}
        aria-label="Previous photo"
      >
        &lt;
      </button>
      <button
        className="gallery-nav-button next"
        onClick={nextSlide}
        aria-label="Next photo"
      >
        &gt;
      </button>

      <div className="gallery-counter">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PhotoGallery;