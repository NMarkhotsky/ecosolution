/* eslint-disable react/prop-types */
import { Icon } from '../../shared/Icon/Icon';
import {
  AccordionAnswer,
  AccordionItem,
  AccordionQuestion,
} from './FAQ,styled';

export const FAQItem = ({ question, answer, toggleAccordion, isOpen }) => {
  return (
    <AccordionItem>
      <AccordionQuestion onClick={toggleAccordion}>
        <Icon iconName={isOpen ? 'icon-minus' : 'icon-plus'} />
        {question}
      </AccordionQuestion>
      {isOpen && <AccordionAnswer>{answer}</AccordionAnswer>}
    </AccordionItem>
  );
};
