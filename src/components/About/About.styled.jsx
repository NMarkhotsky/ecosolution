import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const Section = styled.section`
  margin-bottom: 36px;

  @media ${selectTablet} {
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    margin-bottom: 120px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    margin-bottom: 124px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    width: 272px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;

  @media ${selectTablet} {
    gap: 11px;

    & > span {
      display: block;
      width: 1px;
      height: 100%;

      background-color: #97d28b;
    }
  }

  @media ${selectDesktop} {
    gap: 161px;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    width: 342px;
  }
  @media ${selectDesktop} {
    width: 459px;
  }
`;

export const GridList = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media ${selectTablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${selectDesktop} {
    gap: 48px;
  }
`;

export const GridItem = styled.li`
  padding: 12px;
  min-height: 197px;

  background-color: #eaedf1;

  @media ${selectDesktop} {
    padding: 48px 24px;
    height: 339px;
  }

  &.hasImg {
    display: none;
    padding: 0;
    grid-column: span 2;
    background-color: transparent;

    @media ${selectTablet} {
      display: block;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: 18px;
  }

  @media ${selectDesktop} {
    font-size: 32px;
    line-height: 48px;
  }

  & > svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;

    @media ${selectDesktop} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ItemLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;

  background-color: #97d28b;

  margin-top: 33px;
  margin-bottom: 12px;

  @media ${selectTablet} {
    margin-top: 51px;
  }

  @media ${selectDesktop} {
    margin-top: 94px;
    margin-bottom: 24px;
  }
`;

export const ItemText = styled.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;
  line-height: normal;

  @media ${selectDesktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
