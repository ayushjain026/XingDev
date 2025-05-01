import { useState, useEffect } from 'react'; // Add useEffect import
import imagezero from '../assets/ShopImages1/0.jpg';
import imageOne from '../assets/ShopImages1/1.jpg';
import imageTwo from '../assets/ShopImages1/2.jpg';
import imageThree from '../assets/ShopImages1/3.jpg';
import imageFour from '../assets/ShopImages1/4.jpg';
import imageFive from '../assets/ShopImages1/5.jpg';
import imageSix from '../assets/ShopImages1/6.jpg';
import imageSeven from '../assets/ShopImages1/7.jpg';
import imageEight from '../assets/ShopImages1/8.jpg';
import imageNine from '../assets/ShopImages1/9.jpg';

function CarouselSection1() {
  // Array of images and current index
  const images = [
    imagezero,
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

  // Add useEffect for auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Changes image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="unique-carousel">
      {/* Displaying the current image */}
      <div className="unique-carousel-image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="unique-carousel-img"
        />
      </div>

      {/* Navigation Buttons */}
      <button className="unique-carousel-button unique-prev" onClick={prevImage}>
        &#8249; {/* Left arrow */}
      </button>
      <button className="unique-carousel-button unique-next" onClick={nextImage}>
        &#8250; {/* Right arrow */}
      </button>

      {/* Indicators */}
      <div className="unique-carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`unique-indicator ${index === currentIndex ? 'unique-active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .unique-carousel {
          position: relative;
          width: 100%;
          height: 100vh; /* Full height viewport */
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
          object-fit: contain; /* Ensures the entire image is visible */
        }

        .unique-carousel-button {
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

        .unique-carousel-button.unique-prev {
          left: 20px;
        }

        .unique-carousel-button.unique-next {
          right: 20px;
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

export default CarouselSection1;
