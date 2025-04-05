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
import imagezero2 from '../assets/ShopImages1/0.jpg';
import imageOne2 from '../assets/ShopImages1/1.jpg';
import imageTwo2 from '../assets/ShopImages1/2.jpg';
import imageThree2 from '../assets/ShopImages1/3.jpg';
import imageFour2 from '../assets/ShopImages1/4.jpg';
import imageFive2 from '../assets/ShopImages1/5.jpg';
import imageSix2 from '../assets/ShopImages1/6.jpg';
import imageSeven2 from '../assets/ShopImages1/7.jpg';
import imageEight2 from '../assets/ShopImages1/8.jpg';
import imageNine2 from '../assets/ShopImages1/9.jpg';

function CarouselSection3() {
  const images = [
    imageOne2,
    imageTwo,
    imageTwo2,
    imageThree,
    imageFive,
    imageFive2,
    imageSix, 
    imageSix2,
    imageSeven, 
    imageSeven2,
    imageEight, 
    imageSeven2,
    imageFour,
    imageEight2,
    imageFour2,
    imageNine,
    imageNine2,
    imageOne,
    imageThree2
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
