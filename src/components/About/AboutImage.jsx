/* eslint-disable react/prop-types */

import { Image } from './About.styled';

export const AboutImage = ({ alt, img, img2x }) => {
  return <Image src={img} alt={`${alt}`} srcSet={`${img} 1x, ${img2x} 2x`} />;
};
