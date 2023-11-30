/* eslint-disable react/prop-types */
import { Icon } from '../../shared/Icon/Icon';
import {
  BackDrop,
  ButtonClose,
  Container,
  Nav,
  NavList,
  NavListItem,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose }) => {
  return (
    <BackDrop>
      <Container>
        <ButtonClose onClick={() => onClose()}>
          <Icon
            iconName="icon-close"
            width={'20px'}
            height={'20px'}
            stroke={'#fff'}
          />
          close
        </ButtonClose>
        <span></span>
        <Nav>
          <NavList>
            <NavListItem>
              <a href="#">
                Main
                <Icon
                  iconName="icon-arrow-top-right"
                  width={'16px'}
                  height={'16px'}
                  stroke={'inherit'}
                />
              </a>
            </NavListItem>
            <NavListItem>
              <a href="#">
                About
                <Icon
                  iconName="icon-arrow-top-right"
                  width={'16px'}
                  height={'16px'}
                  stroke={'inherit'}
                />
              </a>
            </NavListItem>
            <NavListItem>
              <a href="#">
                Cases
                <Icon
                  iconName="icon-arrow-top-right"
                  width={'16px'}
                  height={'16px'}
                  stroke={'inherit'}
                />
              </a>
            </NavListItem>
            <NavListItem>
              <a href="#">
                FAQ
                <Icon
                  iconName="icon-arrow-top-right"
                  width={'16px'}
                  height={'16px'}
                  stroke={'inherit'}
                />
              </a>
            </NavListItem>
            <NavListItem>
              <a href="#">
                Contact Us
                <Icon
                  iconName="icon-arrow-top-right"
                  width={'16px'}
                  height={'16px'}
                  stroke={'inherit'}
                />
              </a>
            </NavListItem>
          </NavList>
        </Nav>
      </Container>
    </BackDrop>
  );
};
