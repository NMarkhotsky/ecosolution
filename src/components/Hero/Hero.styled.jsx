import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const Section = styled.section`
  margin-top: 146px;
  margin-bottom: 36px;

  @media ${selectTablet} {
    margin-top: 164px;
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    margin-top: 200px;
    margin-bottom: 120px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 400;

  margin-bottom: 24px;

  @media ${selectTablet} {
    width: 300px;
    margin: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media ${selectDesktop} {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`;

export const Container = styled.div`
  @media ${selectTablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    width: 342px;

    margin-bottom: 43px;
  }

  @media ${selectDesktop} {
    width: 363px;
    margin-right: 96px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 0 auto;
  margin-bottom: 24px; // Тимчасово
  padding: 4px 4px 4px 16px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  line-height: 18px;
  letter-spacing: -0.64px;

  @media ${selectTablet} {
    margin: 0;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #173d33;
    background-color: #173d33;
    color: #97d28b;
  }

  & > span {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    background-color: #97d28b;
  }
`;

export const Span = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 24px 0;

  background-color: #97d28b;

  @media ${selectTablet} {
    margin: 26px 0 16px;
  }

  @media ${selectDesktop} {
    margin: 28px 0 12px;
  }
`;

export const Address = styled.address`
  margin-bottom: 36px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  font-style: normal;

  @media ${selectTablet} {
    display: flex;
    gap: 50px;
  }

  @media ${selectDesktop} {
    gap: 167px;
  }

  & > span {
    display: none;

    @media ${selectTablet} {
      display: block;
    }
  }
`;

export const Link = styled.a``;

export const Image = styled.img`
  width: 320px;
  height: 200px;
  object-fit: cover;

  margin: 0 auto;

  @media ${selectTablet} {
    width: 710px;
    height: auto;
  }

  @media ${selectDesktop} {
    width: 100%;
    height: auto;
  }
`;
