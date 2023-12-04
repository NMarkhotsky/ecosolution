import { Icon } from '../../shared/Icon/Icon';
import {
  ContactContainer,
  ContactLabel,
  ContactText,
  Link,
  SocialWrapper,
} from './ContactUs.styled';

export const ContactUsAddress = () => {
  return (
    <ContactContainer>
      <div>
        <ContactLabel>Phone:</ContactLabel>
        <ContactText>
          <Icon iconName="icon-phone" />
          38 (098) 12 34 567
        </ContactText>
        <ContactText style={{ marginTop: '12px' }}>
          <Icon iconName="icon-phone" />
          38 (093) 12 34 567
        </ContactText>
      </div>
      <div>
        <ContactLabel>E-mail:</ContactLabel>
        <ContactText>
          <Icon iconName="icon-email" />
          office@ecosolution.com
        </ContactText>
      </div>
      <div>
        <ContactLabel>Address:</ContactLabel>
        <ContactText>
          <Icon iconName="icon-map" width={24} height={24} stroke={'#173D33'} />
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactText>
      </div>
      <SocialWrapper>
        <ContactLabel>Social Networks:</ContactLabel>
        <div>
          <Link href="#">
            <Icon iconName="icon-facebook" />
          </Link>
          <Link href="#">
            <Icon iconName="icon-instagram" />
          </Link>
        </div>
      </SocialWrapper>
    </ContactContainer>
  );
};
