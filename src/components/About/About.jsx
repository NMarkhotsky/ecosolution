import {
  Description,
  DescriptionBox,
  GridItem,
  GridList,
  ItemLine,
  ItemText,
  ItemTitle,
  Section,
  Title,
  TitleBox,
} from './About.styled';
import { Icon } from '../../shared/Icon/Icon';
import { aboutData } from '../../data';
import { AboutImage } from './AboutImage';

export const About = () => {
  return (
    <Section>
      <TitleBox>
        <Title>Main values of our company</Title>
        <DescriptionBox>
          <span></span>
          <Description>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world&apos;s energy needs.
          </Description>
        </DescriptionBox>
      </TitleBox>
      <GridList>
        {aboutData.map(
          ({ iconName, title, description, type, alt, img, img2x }) =>
            type === 'image' ? (
              <GridItem key={alt}>
                <AboutImage alt={alt} img={img} img2x={img2x} />
              </GridItem>
            ) : (
              <GridItem key={title}>
                <ItemTitle>
                  <Icon
                    iconName={`${iconName}`}
                    stroke={'#173D33'}
                    style={{ marginRight: '8px' }}
                  />
                  {title}
                </ItemTitle>
                <ItemLine></ItemLine>
                <ItemText>{description}</ItemText>
              </GridItem>
            )
        )}
      </GridList>
    </Section>
  );
};
