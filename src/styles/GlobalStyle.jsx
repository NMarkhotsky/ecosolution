import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { selectDesktop, selectPhone, selectTablet } from '../utils';

export const GlobalStyle = createGlobalStyle`

#root {
   width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${selectPhone} {
    width: 480px;
  }

  @media ${selectTablet} {
    width: 768px;
    padding: 0 30px;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding: 0 100px;
  }
}

body {
  font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;

  background-color: ${({ theme }) => theme.colors.backgroundMain};
  ${'' /* color: ${({ theme }) => theme.colors.text}; */}

  ${'' /* transition: ${({ theme }) => theme.transitionHover}; */}
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;
