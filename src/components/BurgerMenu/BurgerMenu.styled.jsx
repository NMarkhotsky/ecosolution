import styled from 'styled-components';
import { selectDesktop } from '../../utils';

export const BackDrop = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: absolute;
  top: 24px;
  right: 100px;

  padding: 24px;

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);

  @media ${selectDesktop} {
    width: 375px;
    height: 873px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 5px;

    background-color: #fff;
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;

  color: #fff;
`;

export const Nav = styled.nav`
  margin-top: 16px;
`;

export const NavList = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const NavListItem = styled.li`
  color: #97d28b40;
  stroke: #97d28b40;

  font-size: 24px;
  letter-spacing: -0.96px;

  &:hover,
  :active,
  :focus {
    color: #fff;
    stroke: #fff;
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
