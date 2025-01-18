import stars from "../assets/star.svg";

function ReviewsSection() {
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
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              reviewText={review.reviewText}
              userName={review.user.name}
              userImage={review.user.imgSrc}
              userReviewUrl={review?.user?.reviewUrl}
            />
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

function ReviewCard({reviewText, userName, userImage, userReviewUrl}) {
  const navigateToUserReview = (googleReviewUrl) => {
    if (googleReviewUrl?.userReviewUrl) {
      window.open(googleReviewUrl.userReviewUrl, "_blank");
    } else {
      console.error("Invalid URL");
    }
  };
  return (
    <div className="reviews-cards-card">
      <div>
        <div className="reviews-cards-card-user">
          <div
            className="reviews-cards-card-user-img"
            style={{
              backgroundImage: `url(${userImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={userImage}
              alt="User"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div>
            <p className="reviews-cards-card-user-name">{userName}</p>
            <p className="reviews-cards-card-user-from">Google Reviews</p>
          </div>
        </div>
        <img src={stars} alt="star" className="reviews-cards-card-rating" />
        <p className="reviews-cards-card-review">{reviewText}</p>
      </div>
      <div>
        <p className="read-reviews" onClick={() => navigateToUserReview({userReviewUrl})}>Read Full Review {">"}</p>
      </div>
    </div>
  );
}

export default ReviewsSection;

const reviews = [
  {
    reviewText:
      "Went for a hair color and cut. Sarvan did an excellent job. He was extremely professional and the outcome was exactly what I showed him as reference. The people there are also very friendly and helpful. Thank you for the service!",
    user: {
      name: "Annanya Misra",
      source: "Google Reviews",
      imgSrc:
        "https://lh3.googleusercontent.com/a-/ALV-UjVlPRhvrIiHwxjqSS96cGemDIRvtklOEbJBzkcPags63HyACGyK=s40-c-rp-mo-ba2-br100",
      reviewUrl: "https://g.co/kgs/HJgvTuz",
    },
  },
  {
    reviewText:
      "I'm so impressed with Xing Saloon! Not only did I receive an amazing haircut, but the service was also exceptional. The staff were friendly, attentive, and made sure I felt at ease throughout my visit. And with prices this low, I've never had a salon experience this good at such an affordable price. I'll be back for sure, and I highly recommend Xing Saloon to anyone looking for a great haircut without the hefty price tag.",
    user: {
      name: "Drishya P R",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVRQjw9jZipiIzkM-mNd2KBaO09N0EB2Rp4ki-RGSeSYb0Y67fg=s40-c-rp-mo-br100",
      reviewUrl: "https://g.co/kgs/8JtF3Vq"
    },
  },
  {
    reviewText:
      "I had a great experience at this saloon. Sanjana did amazing job with my facial. I felt so relaxed and rejuvenated. Please reach out to her if you want to have a wonderful experience with facial. Highly recommended.",
    user: {
      name: "Sadhana Menon",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjV27yMQAaeV1tU9SpzOQJz9xtznr7W8XDZ4DTP9ygJTKLInASVG=s40-c-rp-mo-br100",
      reviewUrl: "https://g.co/kgs/DuawmuU"
    },
  },
  {
    reviewText:
      "I have got inked twice in this place, by Peace. I must say he is an extremely talented artist, which clearly gives you an idea how much experience and knowledge he has in this domain. He is a very polite guy, and his artistic skills are top notch. This guy deserves more recognition and credit. Do check him out on Instagram, you will have a good idea. Thanks @Peace",
    user: {
      name: "God Punk",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWWBO2tPenbL8yC3xMfUMj6YwuNrCEu0CPZJF8dExtOw8pFf0g8=s40-c-rp-mo-br100",
      reviewUrl: "https://g.co/kgs/e8yts4A"
    },
  },
  {
    reviewText:
      "Visited xing salon for hair botox and i am loving my hairs.My stylist Sarvan listened to my queries and explained everything in detail. The results  are too good.The prices are  reasonable and courteous staff was cherry on top. Go ahead and get your makeover done from xing salon, you would love it.",
    user: {
      name: "Renu saini",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXiRz2-57jfgxU2UuQ187HbcpzRtY1Ky_aWKFOr2lxaMtQ-nxW0sA=s40-c-rp-mo-br100",
      reviewUrl: 'https://g.co/kgs/cyii9rS'
    },
  },
  {
    reviewText:
      "I recently had the best haircut  at Xing Salon AECS Layout. Thanks to the Hairdresser Nima! He truly listened to what I wanted, expertly executed the cut with incredible precision, and left me feeling completely confident with my new look. Not only was the haircut flawless, but the whole experience was incredibly relaxing and professional - I'll definitely be back for my next trim! Review for facial and eyebrows! Fantastic experience of my facial and eyebrow treatment with Sonu as it was exceptional. My skin feels refreshed and my eyebrow shaping was precise and perfect - exactly what I wanted. Highly recommend!",
    user: {
      name: "YES WE CAN Champa Singha",
      source: "Google Reviews",
      imgSrc: 'https://lh3.googleusercontent.com/a-/ALV-UjVlyXnOn81DDevC8zSW2sWcBvf0_0yHutwWrzVQomDHI4CXgNLcYw=s40-c-rp-mo-br100',
      reviewUrl: 'https://g.co/kgs/c11ZuwR'
    },
  },
  {
    reviewText:
      "Had a good experience at xing overall, lovely ambience in a medium-sized salon. Went on a Sunday afternoon and didn't have to wait to get service. Tried a mens hair cut here, and it cost 399 inclusive of a hair wash. The service was decent. Was offered tea coffee water during the cut, which i appreciated. I felt it the cooling wasn't evenly spread out, and it was a bit stuffy. It looked like the owner/partner was at the main desk, and he asked for feedback on the place, which is amazing They also have a tattoo studio in the premises and we saw someone walk in there as well while we visited",
    user: {
      name: "Mark D'Souza",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXAyziJnYvr_nhNV1T-p6mDfnvcbs7HOmo33zTYRHnb5k8HqZSlTQ=s40-c-rp-mo-ba5-br100",
      reviewUrl: 'https://g.co/kgs/skRDeZ3'
    },
  },
  {
    reviewText:
      "I had my hair cut done. Asif has done a great job. Listened to my requirements and suggested that suits well. Definitely recommend this salon. Thank you Asif.",
    user: {
      name: "palavalli yaswanthi",
      source: "Google Reviews",
      imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocJV06A1SA_09XJ9tcVUu2uggRx0LJ1sEMIpiSS3hco403hF-Q=s40-c-rp-mo-br100",
      reviewUrl: 'https://g.co/kgs/YBf7pQb'
    },
  },
];
