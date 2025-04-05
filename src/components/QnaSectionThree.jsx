import { useState } from 'react';

function QnaSectionThree() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: 'How does a Keratin or Hair Botox treatment work?',
      answer:
        'Both Keratin and Hair Botox treatments aim to smooth and repair hair. Keratin uses protein to eliminate frizz and add shine, while Hair Botox deeply conditions and restores damaged strands without chemicals like formaldehyde.',
    },
    {
      question: 'Is Hair Botox better than Keratin?',
      answer:
        'Hair Botox is a gentler, chemical-free alternative to Keratin. It’s ideal for dry or damaged hair and focuses on deep hydration and repair, while Keratin also smooths and straightens. The right choice depends on your hair type and goals.',
    },
    {
      question: 'What is Nanoplastia and how does it help hair?',
      answer:
        'Nanoplastia is a revolutionary hair treatment that uses nanotechnology and amino acids to deeply nourish, smooth, and straighten hair without harsh chemicals. It improves hair health while giving a sleek, shiny finish.',
    },
    {
      question: 'Is Nanoplastia safe for all hair types?',
      answer:
        'Yes, Nanoplastia is safe for most hair types including chemically treated or colored hair. It’s formaldehyde-free and provides both straightening and deep hydration, making it a preferred option for healthy hair transformations.',
    },
    {
      question: 'What does a Hair Spa treatment do?',
      answer:
        'A Hair Spa is a deep conditioning treatment that hydrates, nourishes, and strengthens the hair. It improves scalp health, reduces dryness, and gives your hair a natural shine and bounce.',
    },
    {
      question: 'How often should I get a Hair Spa?',
      answer:
        'It’s recommended to get a Hair Spa treatment once every 2 to 4 weeks, depending on your hair condition and exposure to heat or chemical treatments. Regular spa treatments help maintain healthy, soft, and frizz-free hair.',
    },
    {
      question: 'Do highlights damage hair?',
      answer:
        'Highlights involve lightening the hair, which can cause dryness if not cared for. However, when done professionally with quality products and followed by deep conditioning, the damage is minimal and manageable.',
    },
    {
      question: 'Can I get highlights on dark hair?',
      answer:
        'Absolutely! Highlights can be tailored to any hair color. On dark hair, caramel, honey, or golden tones work beautifully and add dimension. Pre-lightening may be needed for brighter shades.',
    },
    {
      question: 'How is Balayage different from regular highlights?',
      answer:
        'Balayage is a freehand coloring technique that gives a sun-kissed, natural look by blending lighter tones from mid-length to ends. Unlike traditional highlights, it doesn’t use foils and grows out more gracefully.',
    },
    {
      question: 'Is Balayage suitable for all hair lengths?',
      answer:
        'Yes, Balayage works well on medium to long hair, where the gradient effect is most visible. However, with a skilled stylist, even shorter hair can be beautifully balayaged for a subtle, modern look.',
    },
    {
      question: 'What is Global Hair Color and who is it for?',
      answer:
        'Global Hair Color means coloring the entire head with one shade. It’s ideal for those looking to refresh their natural color, cover grays, or experiment with bold new tones evenly.',
    },
    {
      question: 'Can I combine Global Hair Color with treatments like Keratin or Nanoplastia?',
      answer:
        'Yes, but the timing matters. It’s best to do the color either two weeks before or after treatments like Keratin or Nanoplastia to prevent interference with results and ensure hair health is maintained.',
    },
  ];
  

  return (
    <section className="qna">
      <h2 className="qna-heading">Frequently Asked Questions</h2>
      <p className="qna-subheading">
        Here are the top {accordionData.length} frequently asked questions (FAQs) about Tattoos!
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
