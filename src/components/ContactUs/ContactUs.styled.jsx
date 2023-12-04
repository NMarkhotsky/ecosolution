import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const Section = styled.section`
  margin-bottom: 36px;

  @media ${selectTablet} {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media ${selectDesktop} {
    margin-bottom: 120px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;

  @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${selectDesktop} {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${selectTablet} {
    width: 244px;
  }

  @media ${selectDesktop} {
    gap: 32px;
    width: 466px;
  }

  & > div {
    cursor: pointer;
  }
`;

export const ContactLabel = styled.p`
  margin-bottom: 8px;

  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${selectDesktop} {
    margin-bottom: 16px;
  }
`;

export const ContactText = styled.a`
  display: flex;
  gap: 8px;
  text-align: justify;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    & > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #97d28b;
    }
  }
`;

export const SocialWrapper = styled.div`
  & > div {
    display: flex;
    gap: 32px;

    @media ${selectDesktop} {
      gap: 8px;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      transition: ${({ theme }) => theme.transitionHover};
      stroke: #97d28b;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  padding: 36px 12px;
  background-color: #eaedf1;

  @media ${selectTablet} {
    width: 342px;
    padding: 36px 24px;
  }

  @media ${selectDesktop} {
    gap: 32px;
    width: 596px;
    padding: 48px;
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  width: 100%;

  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: #eaedf1;

  &::placeholder {
    color: #bdbdbd;
  }

  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  border-color: ${({ error }) => (error ? 'red' : '#97d28b')};

  @media ${selectDesktop} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 147px;

  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: #eaedf1;

  &::placeholder {
    color: #bdbdbd;
  }

  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${selectDesktop} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 0 0 0 auto;
  padding: 4px 4px 4px 16px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  line-height: 18px;
  letter-spacing: -0.64px;

  transition: ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus,
  &:active {
    transition: ${({ theme }) => theme.transitionHover};
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

export const Error = styled.span`
  position: absolute;
  bottom: -25px;
  right: 0;
  text-align: right;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  color: #d28b8b;
`;
