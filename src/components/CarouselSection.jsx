import { useState } from 'react';
import imageOne from '../assets/1.jpg';
import imageTwo from '../assets/2.jpg';
import imageThree from '../assets/3.jpg';
import imageFour from '../assets/4.jpg';
import imageFive from '../assets/5.jpg';
import imageSix from '../assets/6.jpg';
import imageSeven from '../assets/7.jpg';
import imageEight from '../assets/8.jpg';
import imageNine from '../assets/9.jpg';

function CarouselSection() {
  // Array of images and current index
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="carousel">
      {/* Displaying the current image */}
      <div className="carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-img"
        />
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-button prev" onClick={prevImage}>
        &#8249; {/* Left arrow */}
      </button>
      <button className="carousel-button next" onClick={nextImage}>
        &#8250; {/* Right arrow */}
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .carousel {
          position: relative;
          width: 100%;
          height: 100vh; /* Full height viewport */
          overflow: hidden;
        }

        .carousel-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Ensures the entire image is visible */
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 24px;
          z-index: 10;
        }

        .carousel-button.prev {
          left: 20px;
        }

        .carousel-button.next {
          right: 20px;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          background-color: gray;
          border-radius: 50%;
          cursor: pointer;
        }

        .indicator.active {
          background-color: white;
        }
      `}</style>
    </section>
  );
}

export default CarouselSection;
