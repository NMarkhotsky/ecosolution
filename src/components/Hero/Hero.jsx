import { Icon } from '../../shared/Icon/Icon';
import {
  Address,
  Button,
  Container,
  Image,
  Link,
  List,
  ListItem,
  Section,
  Span,
  SubTitle,
  Title,
} from './Hero.styled';
import heroImage from '../../assets/images/hero/hero.png';
import heroImage2x from '../../assets/images/hero/hero@2x.png';
import heroImage3x from '../../assets/images/hero/hero@3x.png';
import { scrollToElement } from '../../utils';

export const Hero = () => {
  return (
    <Section id="hero">
      <Container>
        <Title>RENEWABLE ENERGY For any task</Title>
        <div>
          <SubTitle>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </SubTitle>
          <Button
            href="#cases"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('cases');
            }}
          >
            Learn More
            <span>
              <Icon
                iconName="icon-arrow-right"
                width={'16px'}
                height={'16px'}
                stroke={'#173D33'}
              />
            </span>
          </Button>
        </div>
      </Container>
      <Span></Span>
      <div>
        <Address>
          <List>
            <ListItem>
              <Link
                href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7+%D0%AF,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000"
                target="_blank"
                rel="noopener noreferrer"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:office@ecosolution.com">
                office@ecosolution.com
              </Link>
              <span>ecosolution © 2023</span>
            </ListItem>
          </List>
        </Address>
        <Image
          src={heroImage}
          alt="Energy"
          srcSet={`${heroImage} 1x, ${heroImage2x} 2x, ${heroImage3x} 3x`}
        />
      </div>
    </Section>
  );
};
