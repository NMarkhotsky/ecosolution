import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media ${selectTablet} {
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    margin-bottom: 120px;
  }
`;

export const Container = styled.div`
  margin-bottom: 20px;

  @media ${selectTablet} {
    display: flex;
    gap: 90px;

    margin-bottom: 32px;
  }

  @media ${selectDesktop} {
    gap: 205px;
    margin-bottom: 120px;
  }
`;

export const Title = styled.h2`
  width: 264px;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

export const SliderControl = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > span {
    display: none;

    @media ${selectTablet} {
      display: block;
      width: 1px;
      height: 65px;

      background-color: #97d28b;
    }

    @media ${selectTablet} {
      width: 1px;
      height: 96px;

      background-color: #97d28b;
    }
  }
`;

export const SliderCount = styled.p`
  display: block;
  font-size: 28px;
  letter-spacing: -1.12px;

  @media ${selectTablet} {
    display: flex;
    margin-left: 10px;
  }

  @media ${selectDesktop} {
    margin-left: 161px;
  }

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const SliderButtonBox = styled.div`
  display: flex;
  gap: 12px;

  @media ${selectTablet} {
    margin-left: 126px;
  }

  @media ${selectDesktop} {
    margin-left: 193px;
  }
`;

export const SliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border: 1px solid #173d33;
  border-radius: 50%;

  @media ${selectDesktop} {
    padding: 24px;
  }

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    border-color: #97d28b;

    transition: ${({ theme }) => theme.transitionHover};

    & > svg {
      & > use {
        stroke: #97d28b;
      }
    }
  }

  & > svg {
    width: 36px;
    height: 36px;

    & > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #173d33;
    }
  }
`;

export const CasesCardList = styled.ul`
  overflow: hidden;

  @media ${selectTablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  @media ${selectDesktop} {
    gap: 48px;
  }

  & > li:nth-child(2) {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const CaseCard = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: auto;

  background-color: #eaedf1;

  @media ${selectTablet} {
  }

  @media ${selectDesktop} {
    max-width: 596px;
  }
`;

export const CaseImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const CaseCardBox = styled.div`
  padding: 24px 12px 12px;

  @media ${selectDesktop} {
    padding: 36px 48px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 21px 0 12px 0;

    background-color: #97d28b;
  }
`;

export const CaseTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaseTitle = styled.p`
  width: 175px;

  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${selectTablet} {
    width: 195px;
    height: 66px;

    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media ${selectDesktop} {
    width: 357px;
    height: auto;

    font-size: 24px;
    letter-spacing: -0.64px;
  }
`;

export const CaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #97d28b;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: #173d33;

    & > svg {
      & > use {
        stroke: #97d28b;
      }
    }
  }

  & > svg {
    width: 28px;
    height: 28px;

    & > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #173d33;
    }
  }
`;

export const CaseInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaseDescription = styled.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${selectTablet} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${selectDesktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const CaseDate = styled.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${selectTablet} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${selectDesktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
