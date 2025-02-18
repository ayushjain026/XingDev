import { useState, useRef, useEffect } from 'react';
import imageOne from '../assets/ShopImages2/1.jpeg';
import imageTwo from '../assets/ShopImages2/2.jpeg';
import imageThree from '../assets/ShopImages2/3.jpeg';
import imageFour from '../assets/ShopImages2/4.jpeg';
import imageFive from '../assets/ShopImages2/5.jpeg';
import imageSix from '../assets/ShopImages2/6.jpeg';
import imageSeven from '../assets/ShopImages2/7.jpeg';
import imageEight from '../assets/ShopImages2/8.jpeg';
import imageNine from '../assets/ShopImages2/9.jpeg';

function CarouselSection2() {
  const images = [
    imageTwo,
    imageThree,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageFour,
    imageNine,
    imageOne,
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

export default CarouselSection2;
