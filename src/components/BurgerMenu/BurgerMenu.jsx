/* eslint-disable react/prop-types */
import { navLink } from '../../constants/navLink';
import { Icon } from '../../shared/Icon/Icon';
import {
  BackDrop,
  ButtonClose,
  Container,
  Nav,
  NavList,
  NavListItem,
  NavSocial,
  NavSocialLink,
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
            {navLink.map(({ id, name }) => (
              <NavListItem key={id}>
                <a href="#">
                  {name}
                  <Icon
                    iconName="icon-arrow-top-right"
                    width={'16px'}
                    height={'16px'}
                    stroke={'inherit'}
                  />
                </a>
              </NavListItem>
            ))}
          </NavList>
        </Nav>
        <NavSocial>
          <NavSocialLink>
            <Icon iconName="icon-facebook" width={24} height={24} />
          </NavSocialLink>
          <NavSocialLink>
            <Icon iconName="icon-instagram" width={24} height={24} />
          </NavSocialLink>
        </NavSocial>
      </Container>
    </BackDrop>
  );
};
