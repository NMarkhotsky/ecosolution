import { useState } from 'react';
import {
  CasesCardList,
  Container,
  Section,
  SliderButton,
  SliderButtonBox,
  SliderControl,
  SliderCount,
  Title,
} from './Cases.styled';
import { Icon } from '../../shared/Icon/Icon';
import { caseData } from '../../data/case';
import { CasesCard } from './CasesCard';

export const Cases = () => {
  const [visibleSlides, setVisibleSlides] = useState([0, 1]);

  const handlePrev = () => {
    setVisibleSlides((prev) => {
      const first = prev[0] === 0 ? caseData.length - 1 : prev[0] - 1;
      const second = prev[1] === 0 ? caseData.length - 1 : prev[1] - 1;
      return [first, second];
    });
  };

  const handleNext = () => {
    setVisibleSlides((prev) => {
      const first = prev[0] === caseData.length - 1 ? 0 : prev[0] + 1;
      const second = prev[1] === caseData.length - 1 ? 0 : prev[1] + 1;
      return [first, second];
    });
  };

  return (
    <Section>
      <Container>
        <Title>Successful cases of our company</Title>
        <SliderControl>
          <span></span>
          <SliderCount>
            {`${(visibleSlides[0] + 1).toString().padStart(2, '0')}`}
            <span> /05</span>
          </SliderCount>
          <SliderButtonBox>
            <SliderButton onClick={handlePrev}>
              <Icon iconName="icon-arrow-left-slider" stroke={'#000'} />
            </SliderButton>
            <SliderButton onClick={handleNext}>
              <Icon iconName="icon-arrow-right-slider" stroke={'#000'} />
            </SliderButton>
          </SliderButtonBox>
        </SliderControl>
      </Container>
      <CasesCardList>
        {visibleSlides.map((index) => (
          <CasesCard key={index} {...caseData[index]} />
        ))}
      </CasesCardList>
    </Section>
  );
};
