import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media ${selectTablet} {
    gap: 24px;
  }

  &::before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;

    background-color: #97d28b;

    margin-bottom: 24px;

    @media ${selectTablet} {
      margin-bottom: 40px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${selectTablet} {
    width: 342px;
  }

  @media ${selectDesktop} {
    width: 405px;
  }

  & > div {
    display: none;

    @media ${selectTablet} {
      display: flex;
    }
  }
`;

export const ButtonScroll = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 500px;

  line-height: 18px;
  letter-spacing: -0.64px;
  background-color: #97d28b;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: #173d33;

    & > svg > use {
      stroke: #97d28b;
      transition: ${({ theme }) => theme.transitionHover};
    }
  }

  & > svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    & > use {
      stroke: #173d33;
      transition: ${({ theme }) => theme.transitionHover};
    }
  }
`;

export const SocialBox = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    margin: 24px auto;
  }

  @media ${selectTablet} {
    display: none;
  }
`;

export const Link = styled.a`
  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      stroke: #173d33;
      transition: ${({ theme }) => theme.transitionHover};
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
      transition: ${({ theme }) => theme.transitionHover};
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media ${selectTablet} {
      flex-direction: row;
      justify-content: space-between;
      width: 342px;
      gap: 0;
    }

    @media ${selectDesktop} {
      width: 405px;
    }
  }
`;
