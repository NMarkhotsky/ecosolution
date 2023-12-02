import { MainContainer } from './Main.styled';
import { About } from '../About/About';
import { Hero } from '../Hero/Hero';
import { Electricity } from '../Electricity/Electricity';

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Electricity />
    </MainContainer>
  );
};
