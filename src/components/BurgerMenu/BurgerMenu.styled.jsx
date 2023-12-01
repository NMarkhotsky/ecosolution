import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

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

  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: absolute;
  top: 36px;
  width: 320px;
  height: 90vh;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 24px;

  border-radius: 25px;

  background-color: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);

  @media ${selectTablet} {
    right: 30px;
    height: 700px;
  }

  @media ${selectDesktop} {
    top: 24px;
    right: 100px;
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
  color: #fff;
  stroke: #fff;

  font-size: 24px;
  letter-spacing: -0.96px;

  &:hover,
  :active,
  :focus {
    color: #97d28b;
    stroke: #97d28b;
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const NavSocial = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

export const NavSocialLink = styled.li`
  & > svg > use {
    stroke: #ffffff;
  }

  & :hover,
  :active,
  :focus {
    stroke: #97d28b;
    /* fill: #97d28b; */
  }
`;
