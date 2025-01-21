import imageOne from '../assets/11.jpg';
import imageTwo from '../assets/22.jpg';
import imageThree from '../assets/33.jpg';

function Carousel() {
  return (
    <section className="carousel">
      <div className="carousel-container">
        <img src={imageOne} alt="" srcset="" className="carousel-img" />
        <img src={imageTwo} alt="" srcset="" className="carousel-img" />
        <img src={imageThree} alt="" srcset="" className="carousel-img" />
        <img src={imageOne} alt="" srcset="" className="carousel-img" />
      </div>
    </section>
  );
}

export default Carousel;
