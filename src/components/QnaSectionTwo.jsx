import { useState } from 'react';

function QnaSectionTwo() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: 'Do highlights damage hair?',
      answer:
        'Highlights involve lightening the hair, which can cause some dryness. However, using quality products and deep conditioning treatments can help maintain hair health.',
    },
    {
      question: 'How is Balayage different from traditional highlights?',
      answer:
        'Balayage is a freehand painting technique that creates a soft, natural gradient from darker roots to lighter ends. Unlike traditional highlights, which use foils for precise placement, balayage results in a more blended and low-maintenance look that grows out beautifully.',
    },
    {
      question: 'What is a Global Hair Color treatment?',
      answer:
        'Global hair color is the process of coloring the entire head of hair with a single shade. It offers a uniform and polished look, covering grays or enhancing your natural hair color. You can choose from natural shades or vibrant tones depending on your preference.',
    },
    {
      question: 'What is Crazy Color, and how long does it last?',
      answer:
        'Crazy Color refers to bold and vibrant hair shades like pink, blue, purple, and green. These semi-permanent colors typically last between 4 to 8 weeks, depending on hair porosity, maintenance, and washing frequency. Using color-safe products can help extend the vibrancy.',
    },
    {
      question: 'Does Balayage require frequent touch-ups?',
      answer:
        'No, one of the biggest advantages of balayage is its low maintenance. Since the color blends seamlessly with your natural hair, you don’t need frequent touch-ups. A refresh every 3-4 months is usually sufficient to maintain its beauty.',
    },
    {
      question: 'Will Crazy Color work on dark hair without bleaching?',
      answer:
        'Crazy Color is most vibrant on pre-lightened or blonde hair. On dark hair, the results will be subtle or may not show at all. For bold and bright results, bleaching is usually required before applying the color.',
    },
    {
      question: 'How should I take care of my colored hair?',
      answer:
        'To maintain your colored hair, use sulfate-free shampoos, condition regularly, and minimize heat styling. For vivid shades like Crazy Color, cold water rinses and color-safe products can help retain the vibrancy for a longer time.',
    },
  ];


  return (
    <section className="qna">
      <h2 className="qna-heading">Frequently Asked Questions</h2>
      <p className="qna-subheading">
        Here are the top {accordionData.length} frequently asked questions (FAQs) about hair keratin
        treatments and nanoplastia:
      </p>

      {accordionData.map((item, index) => (
        <div
          className="qna-accordian"
          key={index}
          onClick={() => toggleAccordion(index)}
        >
          <h4 className="qna-accordian-question">{item.question}</h4>
          <p
            className={`qna-accordian-answer ${
              activeIndex === index ? 'toggle' : ''
            }`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </section>
  );
}

export default QnaSectionTwo;
