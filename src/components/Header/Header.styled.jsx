import styled from 'styled-components';
import { selectDesktop, selectPhone, selectTablet } from '../../utils';

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

  :hover {
    fill: #97d28b;
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

  @media ${selectPhone} {
  }

  @media ${selectTablet} {
    gap: 12px;
  }

  @media ${selectDesktop} {
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  padding: 12px;

  border-radius: 50%;
  background-color: #dcefd8;
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

    &::after {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #173d33;
    }
  }
`;
