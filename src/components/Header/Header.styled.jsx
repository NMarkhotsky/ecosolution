import styled from 'styled-components';
import { selectTablet } from '../../utils';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  fill: #173d33;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    fill: #97d28b;
    transition: ${({ theme }) => theme.transitionHover};
  }

  & > svg:first-child,
  svg:last-child {
    margin: 14px 0 8px 0;
  }
`;

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${selectTablet} {
    gap: 12px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  padding: 12px;

  border-radius: 50%;
  background-color: #dcefd8;

  & > svg {
    width: 20px;
    height: 20px;

    & > use {
      stroke: #292d32;
    }
  }

  transition: ${({ theme }) => theme.transitionHover};

  &:hover {
    background-color: #97d28b;
    transition: ${({ theme }) => theme.transitionHover};
  }
`;

export const ButtonGetInTouch = styled.a`
  display: none;

  @media ${selectTablet} {
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 500px;
    background-color: #97d28b;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #173d33;
      transition: ${({ theme }) => theme.transitionHover};
    }

    transition: ${({ theme }) => theme.transitionHover};

    &:hover {
      color: #97d28b;
      background-color: #173d33;

      transition: ${({ theme }) => theme.transitionHover};

      & > span {
        background-color: #97d28b;
      }
    }
  }
`;
