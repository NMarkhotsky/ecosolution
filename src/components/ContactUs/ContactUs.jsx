import { Section, Title, Wrapper } from './ContactUs.styled';
import { ContactUsAddress } from './ContactUsAddress';
import { ContactUsForm } from './ContactUsForm';

export const ContactUs = () => {
  return (
    <Section>
      <Title>Contact us</Title>
      <Wrapper>
        <ContactUsAddress />
        <ContactUsForm />
      </Wrapper>
    </Section>
  );
};
