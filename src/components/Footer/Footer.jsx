import { Icon } from '../../shared/Icon/Icon';
import { scrollToTopButton } from '../../utils';
import { Logo } from '../Header/Header.styled';
import {
  Address,
  ButtonScroll,
  Container,
  FooterContainer,
  Link,
  SocialBox,
  Wrapper,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
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
        <Wrapper>
          <SocialBox>
            <Link href="#">
              <Icon iconName="icon-facebook" />
            </Link>
            <Link href="#">
              <Icon iconName="icon-instagram" />
            </Link>
          </SocialBox>
          <ButtonScroll onClick={() => scrollToTopButton()}>
            <Icon iconName="icon-arrow-top" />
          </ButtonScroll>
        </Wrapper>
      </Container>
      <SocialBox>
        <Link href="#">
          <Icon iconName="icon-facebook" />
        </Link>
        <Link href="#">
          <Icon iconName="icon-instagram" />
        </Link>
      </SocialBox>
      <Address>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <div>
          <p>office@ecosolution.com</p>
          <p>ecosolution © 2023</p>
        </div>
      </Address>
    </FooterContainer>
  );
};
