import { useState, useRef, useEffect } from 'react';
import c1 from '../assets/ShopImages3/c1.jpeg';
import c2 from '../assets/ShopImages3/c2.jpeg';
import c3 from '../assets/ShopImages3/c3.jpeg';
import c4 from '../assets/ShopImages3/c4.jpeg';
import c5 from '../assets/ShopImages3/c5.jpeg';
import c6 from '../assets/ShopImages3/c6.jpeg';
import c7 from '../assets/ShopImages3/c7.jpeg';
import c8 from '../assets/ShopImages3/c8.jpeg';
import c9 from '../assets/ShopImages3/c9.jpeg';
import c10 from '../assets/ShopImages3/c10.jpeg';
import c11 from '../assets/ShopImages3/c9.jpeg';
import c12 from '../assets/ShopImages3/c10.jpeg';

function CarouselSection3() {
  const images = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (diff < -50) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="unique-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="unique-carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="unique-carousel-img"
        />
      </div>

      <div className="unique-carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`unique-indicator ${index === currentIndex ? 'unique-active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <style>{`
        .unique-carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .unique-carousel-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .unique-carousel-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .unique-carousel-indicators {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .unique-indicator {
          width: 12px;
          height: 12px;
          background-color: gray;
          border-radius: 50%;
          cursor: pointer;
        }

        .unique-indicator.unique-active {
          background-color: white;
        }
      `}</style>
    </section>
  );
}

export default CarouselSection3;
