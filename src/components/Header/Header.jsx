import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../shared/Icon/Icon';
import {
  HeaderContainer,
  Logo,
  MenuWrapper,
  ButtonMenu,
  ButtonGetInTouch,
} from './Header.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { scrollToElement } from '../../utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsScrolling(true);

    if (scrollTimeoutRef.current !== null) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  return (
    <HeaderContainer $isScrolling={isScrolling}>
      <Logo href="/">
        <Icon
          iconName="icon-favicon_logo"
          width={'31px'}
          height={'18px'}
          fill={'inherit'}
        />
        <Icon
          iconName="icon-ecosolution"
          width={'170px'}
          height={'40px'}
          fill={'inherit'}
        />
        <Icon
          iconName="icon-greenergy"
          width={'60px'}
          height={'18px'}
          fill={'inherit'}
        />
      </Logo>

      <MenuWrapper>
        <ButtonMenu type="button" onClick={handleToggleMenu}>
          <Icon
            iconName="icon-menu"
            width={'16px'}
            height={'16px'}
            stroke={'#000'}
          />
        </ButtonMenu>
        {isOpen && <BurgerMenu onClose={handleToggleMenu} />}
        <ButtonGetInTouch
          href="#contact-us"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement('contact-us');
          }}
        >
          Get in touch
          <span>
            <Icon iconName="icon-arrow-down" width={14} height={14} />
          </span>
        </ButtonGetInTouch>
      </MenuWrapper>
    </HeaderContainer>
  );
};
