import { useState } from "react";
import r1 from "../assets/reviews/r1.jpeg";
import r2 from "../assets/reviews/r2.jpeg";
import r3 from "../assets/reviews/r3.jpeg";
import r4 from "../assets/reviews/r4.jpeg";
import r5 from "../assets/reviews/r5.jpeg";
import r6 from "../assets/reviews/r6.jpeg";
import r7 from "../assets/reviews/r7.jpeg";

const images = [r1, r2, r3, r4, r5, r6, r7]; // Store images in an array

const ReviewImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Image Grid */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "200px",
              overflow: "hidden",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={() => setSelectedImage(image)} // Set the selected image on click
          >
            <img
              src={image}
              alt={`Review ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedImage(null)} // Close modal on background click
        >
          <img
            src={selectedImage}
            alt="Full view"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewImage;
