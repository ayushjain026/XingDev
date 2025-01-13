import React, { useState } from 'react';

function QnaSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: 'How does a keratin treatment work, and what does it do for my hair?',
      answer:
        'A keratin treatment involves applying a keratin solution to your hair, which is then sealed in using heat. The treatment smooths the hair, eliminates frizz, adds shine, and helps to straighten it. It works by filling in the gaps in the hair cuticle with keratin, strengthening the hair and making it look healthier.',
    },
    {
      question: 'Can I get a keratin treatment if I have colored or chemically treated hair?',
      answer:
        'Yes, you can get a keratin treatment on colored or chemically treated hair. In fact, it can help restore moisture and add shine to damaged hair. However, it’s recommended to wait at least two weeks after coloring your hair before getting a keratin treatment to ensure the best results and avoid any potential chemical reactions.',
    },
    {
      question: 'What is Nanoplastia, and how does it work?',
      answer:
        "Nanoplastia is a hair treatment that uses nanotechnology to deeply nourish and repair hair. It works by infusing the hair fibers with essential nutrients and amino acids, helping to smooth and straighten the hair while restoring its health and shine. Unlike traditional treatments, nanoplastia doesn't contain formaldehyde, making it a gentler alternative.",
    },
    {
      question: 'How is Nanoplastia different from a regular hair straightening treatment?',
      answer:
        'Nanoplastia not only straightens hair but also provides intensive nourishment. While traditional straightening treatments often use harsh chemicals (such as formaldehyde) to achieve a smooth result, nanoplastia uses nanotechnology to repair and hydrate hair at a molecular level, leaving it healthier and shinier.',
    },
  ];

  return (
    <section className="qna section">
      <h2 className="qna-heading">Frequently Asked Questions</h2>
      <p className="qna-subheading">
        Here are the top 4 frequently asked questions (FAQs) about hair keratin treatments and nanoplastia:
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

export default QnaSection;
