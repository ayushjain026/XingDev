import { useState } from 'react';

function QnaSectionThree() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: 'Do tattoos hurt?',
      answer:
        'Tattoo pain varies depending on placement, size, and your pain tolerance. Areas with more bone or nerve endings, like ribs and wrists, tend to be more painful, while fleshier areas like thighs and upper arms are usually less painful.',
    },
    {
      question: 'How long does a tattoo take to heal?',
      answer:
        'Most tattoos take about 2-3 weeks to heal on the surface, but full healing can take up to a month or more. Proper aftercare, like moisturizing and avoiding sun exposure, is crucial for the best results.',
    },
    {
      question: 'Do color tattoos fade faster than black and grey tattoos?',
      answer:
        'Yes, color tattoos tend to fade faster than black and grey tattoos, especially lighter shades like yellow and pink. Proper aftercare, sun protection, and touch-ups can help maintain vibrancy.',
    },
    {
      question: 'Can I get a color tattoo on dark skin?',
      answer:
        'Absolutely! While certain colors may appear differently on darker skin tones, skilled tattoo artists can use bolder pigments and shading techniques to ensure a vibrant, long-lasting result.',
    },
    {
      question: 'What is the best way to care for a new tattoo?',
      answer:
        'Keep your tattoo clean, moisturized, and avoid direct sunlight. Avoid swimming and excessive sweating for at least two weeks to prevent infections and fading. Follow your artist’s specific aftercare instructions for the best healing process.',
    },
    {
      question: 'Do tattoos fade over time?',
      answer:
        'Yes, all tattoos fade over time due to skin regeneration, sun exposure, and lifestyle factors. Regular moisturizing and sunscreen application can slow down the fading process.',
    },
    {
      question: 'Can I get a tattoo if I have sensitive skin?',
      answer:
        'Yes, but it’s recommended to consult with a tattoo artist beforehand. Patch tests can help determine if your skin reacts to tattoo ink. Using high-quality ink and proper aftercare reduces irritation risks.',
    },
    {
      question: 'What is the difference between black ink and color ink tattoos?',
      answer:
        'Black ink tattoos often age better and require fewer touch-ups, while color tattoos offer more vibrancy and artistic expression but may fade faster, especially in sun-exposed areas.',
    },
    {
      question: 'Can I cover up an old tattoo with a color tattoo?',
      answer:
        'Yes, cover-up tattoos can be done with both black and color ink. Darker, bolder colors work best for covering old tattoos, and your artist can design a new piece to effectively mask the previous tattoo.',
    },
    {
      question: 'How often do color tattoos need touch-ups?',
      answer:
        'Color tattoos may need touch-ups every few years, especially for bright or pastel shades. Proper aftercare and avoiding excessive sun exposure can help prolong their vibrancy.',
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

export default QnaSectionThree;
