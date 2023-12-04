import styled, { keyframes } from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  margin-bottom: 36px;

  @media ${selectTablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    justify-content: space-between;
    gap: 0;
    margin-bottom: 120px;
  }
`;

export const WrapperTitle = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${selectTablet} {
    display: flex;
  }
`;

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
  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;

    background-color: #97d28b;
  }

  @media ${selectTablet} {
    width: 342px;
  }

  @media ${selectDesktop} {
    width: 596px;
  }

  transition: ${({ theme }) => theme.transitionHover};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: ${({ theme }) => theme.transitionHover};

  @media ${selectTablet} {
    gap: 16px;
  }

  @media ${selectDesktop} {
    gap: 24px;
  }

  & > svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    @media ${selectTablet} {
      width: 28px;
      height: 28px;
    }

    & > use {
      stroke: #173d33;
    }
  }
`;

export const AccordionQuestion = styled.h3`
  margin-bottom: ${({ open }) => (open ? '16px' : '0')};

  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${selectDesktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  transition: ${({ theme }) => theme.transitionHover};
`;

export const AccordionAnswer = styled.p`
  opacity: 0;
  transform: translateY(-100%);
  animation: ${animation} 0.5s ease;

  ${(props) =>
    props.open &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  margin-left: 24px;

  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${selectTablet} {
    margin-left: 44px;
  }

  @media ${selectDesktop} {
    margin-left: 52px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }

  transition: ${({ theme }) => theme.transitionHover};
`;

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  transition: ${({ theme }) => theme.transitionHover};
`;

export const ContactUsText = styled.p`
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media ${selectDesktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const ContactUsButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;

  border-radius: 100px;

  background-color: #97d28b;

  transition: ${({ theme }) => theme.transitionHover};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #173d33;

    transition: ${({ theme }) => theme.transitionHover};
  }

  &:hover {
    color: #97d28b;
    background-color: #173d33;

    & > span {
      background-color: #97d28b;
    }
  }
`;

export const WrapperMobContactUs = styled.div`
  margin-top: 36px;

  transition: ${({ theme }) => theme.transitionHover};

  @media ${selectTablet} {
    display: none;
  }
`;
