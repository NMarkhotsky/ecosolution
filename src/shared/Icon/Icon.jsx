/* eslint-disable react/prop-types */
import icons from '../../assets/icons/sprite.svg';

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>
      <use
        href={`${icons}#${iconName}`}
        stroke={stroke || 'transparent'}
        fill={fill || 'transparent'}
      />
    </svg>
  );
};
