import { useState } from 'react';
import {
  AccordionList,
  Section,
  Title,
  WrapperMobContactUs,
  WrapperTitle,
} from './FAQ,styled';
import { faqData } from '../../data/faq';
import { FAQItem } from './FAQItem';
import { FAQContactUs } from './FAQContactUs';

export const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(faqData[0].id);

  const toggleAccordion = (id) => {
    setOpenAccordion(id === openAccordion ? null : id);
  };

  return (
    <Section id="faq">
      <WrapperTitle>
        <Title>Frequently Asked Questions</Title>
        <FAQContactUs />
      </WrapperTitle>
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
      <WrapperMobContactUs>
        <FAQContactUs />
      </WrapperMobContactUs>
    </Section>
  );
};
