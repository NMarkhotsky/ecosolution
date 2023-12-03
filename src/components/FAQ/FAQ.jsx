import { useState } from 'react';
import { AccordionList, Section, Title } from './FAQ,styled';
import { faqData } from '../../data/faq';
import { FAQItem } from './FAQItem';

export const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(faqData[0].id);

  const toggleAccordion = (id) => {
    setOpenAccordion(id === openAccordion ? null : id);
  };

  return (
    <Section>
      <Title>Frequently Asked Questions</Title>
      <AccordionList>
        {faqData.map(({ id, question, answer }) => (
          <FAQItem
            key={id}
            question={question}
            answer={answer}
            toggleAccordion={() => toggleAccordion(id)}
            isOpen={id === openAccordion}
          />
        ))}
      </AccordionList>

      {/* <div>
        <p>Didn&apos;t find the answer to your question? </p>
        <button>Contact us</button>
      </div> */}
    </Section>
  );
};
