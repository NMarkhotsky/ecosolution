import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const Section = styled.section``;

export const Title = styled.h2`
  width: 320px;
  margin-bottom: 24px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 347px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const AccordionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 296px;
`;

export const AccordionItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;

    background-color: #97d28b;
  }
`;

export const AccordionQuestion = styled.h3`
  text-align: justify;

  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  cursor: pointer;

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;

    & > use {
      stroke: #173d33;
    }
  }
`;

export const AccordionAnswer = styled.p`
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
`;
