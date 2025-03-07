import stars from "../assets/star.svg";
import r1 from "../assets/reviews/PageThree/1.png";
import r2 from "../assets/reviews/PageThree/2.png";
import r3 from "../assets/reviews/PageThree/3.png";
import r4 from "../assets/reviews/PageThree/4.png";
import r5 from "../assets/reviews/PageThree/5.png";
import r6 from "../assets/reviews/PageThree/6.png";
import r7 from "../assets/reviews/PageThree/7.png";
import r8 from "../assets/reviews/PageThree/8.png";
import r9 from "../assets/reviews/PageThree/9.png";
import r10 from "../assets/reviews/PageThree/10.png";

const images = [r1, r2, r8, r9, r10, r5, r6, r7, r4, r3]; 
  
const ReviewsSectionTwo = () => {
  return (
    <section id="review-section" className="reviews">
      <div className="reviews-stats">
        <div className="reviews-rating">
          <p className="reviews-rating-num">4.9</p>
          <img src={stars} alt="star" className="reviews-rating-stars" />
        </div>
      </div>
      <div className="reviews-google">
        <h4>
          <span style={{ color: "#3169f6" }}>G</span>
          <span style={{ color: "#f63831" }}>o</span>
          <span style={{ color: "#f68a31" }}>o</span>
          <span style={{ color: "#3169f6" }}>g</span>
          <span style={{ color: "#05a813" }}>l</span>
          <span style={{ color: "#f63831" }}>e</span> Rating
        </h4>
        <p className="reviews-google-num">1089 Reviews</p>
      </div>
      <div className="reviews-cards-container">
        <div className="reviews-cards">
        {images.map((image, index) => (
          <ReviewImageCard key={index} index={index} image={image} />
        ))}

        </div>
      </div>
      <div className="help">
        <a
          href="https://www.google.com/search?q=hrs+xing+saloon+banglore&rlz=1C1RXQR_enIN978IN978&oq=hrs+xing+saloon+banglore&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAjGCcyBggCEEUYQDIGCAMQIxgnMgoIBBAAGLEDGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAE0gEINzE1NGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3bae1309406c2c01:0x2eb6dc1b4d71e4b3,3,,,,"
          className="reviews-cta"
        >
          Write A Review
        </a>
      </div>
    </section>
  );
}

const ReviewImageCard = (image) => {
  return (
    <div
    className="reviews-cards-card"
    style={{
      width: "350px",
      height: "270px",
      overflow: "hidden",
      borderRadius: "8px",
      border: "1px solid #ddd",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={image.image}
          alt="Review"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // Ensures the image covers the div
          }}
        />
      </div>
    </div>
  );
}

export default ReviewsSectionTwo;
