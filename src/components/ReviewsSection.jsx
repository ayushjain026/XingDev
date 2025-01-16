import stars from '../assets/star.svg';

function ReviewsSection() {
  return (
    <section className="reviews">
      <div className="reviews-stats">
        <div className="reviews-rating">
          <p className="reviews-rating-num">4.9</p>
          <img src={stars} alt="star" className="reviews-rating-stars" />
        </div>
      </div>
      <div className="reviews-google">
        <h4>
          <span style={{ color: '#3169f6' }}>G</span>
          <span style={{ color: '#f63831' }}>o</span>
          <span style={{ color: '#f68a31' }}>o</span>
          <span style={{ color: '#3169f6' }}>g</span>
          <span style={{ color: '#05a813' }}>l</span>
          <span style={{ color: '#f63831' }}>e</span> Rating
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

function ReviewCard({ reviewText, userName, userImage }) {
  return (
    <div className="reviews-cards-card">
      <div>
        <div className="reviews-cards-card-user">
          <div
            className="reviews-cards-card-user-img"
            style={{ backgroundImage: `url(${userImage})` }}
          ></div>
          <div>
            <p className="reviews-cards-card-user-name">{userName}</p>
            <p className="reviews-cards-card-user-from">Google Reviews</p>
          </div>
        </div>
        <img src={stars} alt="star" className="reviews-cards-card-rating" />
        <p className="reviews-cards-card-review">{reviewText}</p>
      </div>
      <div>
        <p className="read-reviews">Read Full Review {'>'}</p>
      </div>
    </div>
  );
}

export default ReviewsSection;

const reviews = [
  {
    reviewText:
      'I went to Xing Salon for the first time for nail art, and it was such an amazing experience. The ambience, staff behavior, and their proficiency in their work were really impressive. Ashmita did my nail extension and nail art and I am in awe of her work as a nail artist. I just had to mention the occasion and there she was ready with designs and the final art. ❤️❤️',
    user: {
      name: 'Shibangi Mukherjee',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'Had a fantastic experience with a layered cut and balayage. The staffs were friendly and the results were amazing. Highly recommend!.',
    user: {
      name: 'Saroopa G',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'First time I came here to do my nail extension & I am very much satisfied 😊with asmita work👍 & I will surely join next time also 💖 I loved her work💞',
    user: {
      name: 'Richa Tamang',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'I have got inked twice in this place, by Peace. I must say he is an extremely talented artist, which clearly gives you an idea how much experience and knowledge he has in this domain. He is a very polite guy, and his artistic skills are top notch. This guy deserves more recognition and credit. Do check him out on Instagram, you will have a good idea. Thanks @Peace',
    user: {
      name: 'God Punk',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'I had a great experience at this saloon. Sanjana did amazing job with my facial. I felt so relaxed and rejuvenated. Please reach out to her if you want to have a wonderful experience with facial.  Highly recommended.',
    user: {
      name: 'Sadhana Menon',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      "I had a very good experience, it was my first time getting nail extensions and Ashmita did a very good job. I'm very happy with my nails",
    user: {
      name: 'Niva Tamang',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'Visited xing salon for hair botox and i am loving my hairs.My stylist Sarvan listened to my queries and explained everything in detail. The results are too good.The prices are reasonable and courteous staff was cherry on top. Go ahead and get your makeover done from xing salon, you would love it.',
    user: {
      name: 'Renu saini',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
  {
    reviewText:
      'Went for a hair color and cut. Sarvan did an excellent job. He was extremely professional and the outcome was exactly what I showed him as reference. The people there are also very friendly and helpful. Thank you for the service!.',
    user: {
      name: 'Annanya Misra',
      source: 'Google Reviews',
      imgSrc: './Assets/star.svg',
    },
  },
];
