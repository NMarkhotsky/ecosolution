import { useState } from 'react';
import { Icon } from '../../shared/Icon/Icon';
import {
  HeaderContainer,
  Logo,
  MenuWrapper,
  ButtonMenu,
  ButtonGetInTouch,
} from './Header.styled';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
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
        <ButtonGetInTouch href="#">Get in touch</ButtonGetInTouch>
      </MenuWrapper>
    </HeaderContainer>
  );
};
