/* eslint-disable react/prop-types */
import { Icon } from '../../shared/Icon/Icon';
import {
  CaseButton,
  CaseCard,
  CaseCardBox,
  CaseDate,
  CaseDescription,
  CaseImg,
  CaseInfo,
  CaseTitle,
  CaseTitleBox,
} from './Cases.styled';

export const CasesCard = ({ img, img2x, alt, title, description, date }) => {
  return (
    <CaseCard>
      <CaseImg src={img} alt={`${alt}`} srcSet={`${img} 1x, ${img2x} 2x`} />
      <CaseCardBox>
        <CaseTitleBox>
          <CaseTitle>{title}</CaseTitle>
          <CaseButton>
            <Icon iconName="icon-arrow-top-right" />
          </CaseButton>
        </CaseTitleBox>
        <span></span>
        <CaseInfo>
          <CaseDescription>{description}</CaseDescription>
          <CaseDate>{date}</CaseDate>
        </CaseInfo>
      </CaseCardBox>
    </CaseCard>
  );
};
