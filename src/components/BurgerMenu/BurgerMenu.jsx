/* eslint-disable react/prop-types */
import { useState } from 'react';
import { navLink } from '../../data/index';
import { Icon } from '../../shared/Icon/Icon';
import { scrollToElement } from '../../utils';
import {
  BackDrop,
  ButtonClose,
  Container,
  Link,
  Nav,
  NavList,
  NavListItem,
  NavSocial,
  NavSocialLink,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <BackDrop>
      <Container>
        <ButtonClose onClick={() => onClose()}>
          <Icon iconName="icon-close" />
          close
        </ButtonClose>
        <span></span>
        <Nav>
          <NavList>
            {navLink.map(({ id, name, href }) => (
              <NavListItem key={id} data-isactive={id === activeMenuItem}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement(href);
                    setActiveMenuItem(id);
                    onClose();
                  }}
                >
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
            <Link href="#">
              <Icon iconName="icon-facebook" width={24} height={24} />
            </Link>
          </NavSocialLink>
          <NavSocialLink>
            <Link href="#">
              <Icon iconName="icon-instagram" width={24} height={24} />
            </Link>
          </NavSocialLink>
        </NavSocial>
      </Container>
    </BackDrop>
  );
};
