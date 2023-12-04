import { Icon } from '../../shared/Icon/Icon';
import { scrollToElement } from '../../utils';
import {
  ContactUsButton,
  ContactUsContainer,
  ContactUsText,
} from './FAQ,styled';

export const FAQContactUs = () => {
  return (
    <ContactUsContainer>
      <ContactUsText>
        Didn&apos;t find the answer to your question?
      </ContactUsText>
      <ContactUsButton
        href="#contact-us"
        onClick={(e) => {
          e.preventDefault();
          scrollToElement('contact-us');
        }}
      >
        Contact us
        <span>
          <Icon iconName="icon-arrow-down" width={14} height={14} />
        </span>
      </ContactUsButton>
    </ContactUsContainer>
  );
};
