import { About } from '../About/About';
import { Hero } from '../Hero/Hero';
import { MainContainer } from './Main.styled';

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <About />
    </MainContainer>
  );
};
