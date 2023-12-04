import { MainContainer } from './Main.styled';
import { About } from '../About/About';
import { Hero } from '../Hero/Hero';
import { Electricity } from '../Electricity/Electricity';
import { Cases } from '../Cases/Cases';
import { Faq } from '../FAQ/FAQ';
import { ContactUs } from '../ContactUs/ContactUs';

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
    </MainContainer>
  );
};
