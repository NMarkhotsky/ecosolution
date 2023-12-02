import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  @media ${selectTablet} {
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    gap: 16px;
    margin-bottom: 120px;
  }

  & > span {
    display: block;
    width: 1px;
    height: 48px;

    background-color: #97d28b;

    @media ${selectTablet} {
      height: 87px;
    }
  }
`;

export const Title = styled.h2`
  width: 286px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;

  color: #97d28b;

  @media ${selectTablet} {
    gap: 24px;

    font-size: 100px;
    line-height: 100px;
  }

  @media ${selectDesktop} {
    font-size: 164px;
    line-height: 164px;
  }

  & > span {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;

    color: #173d33;
  }
`;
