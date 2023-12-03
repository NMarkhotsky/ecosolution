/* eslint-disable react/prop-types */
import { Icon } from '../../shared/Icon/Icon';
import {
  AccordionAnswer,
  AccordionItem,
  AccordionQuestion,
  Box,
} from './FAQ,styled';

export const FAQItem = ({ question, answer, toggleAccordion, isOpen }) => {
  return (
    <AccordionItem>
      <Box onClick={toggleAccordion}>
        <Icon iconName={isOpen ? 'icon-minus' : 'icon-plus'} />
        <AccordionQuestion open={isOpen}>{question}</AccordionQuestion>
      </Box>
      {isOpen && <AccordionAnswer>{answer}</AccordionAnswer>}
    </AccordionItem>
  );
};
