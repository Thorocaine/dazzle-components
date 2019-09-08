import React from 'react';
import { createGlobalStyle, ThemeProvider, ThemeProps } from 'styled-components';
import ThemeConfig from './ThemeConfig';

type Props = {
  children: JSX.Element | JSX.Element[];
  theme: ThemeConfig;
}

// background: ${({ theme }) => theme.background};
const GlobalStyle = createGlobalStyle<ThemeProps<ThemeConfig>>`
  body, html {	  
    margin: 0;
	  padding: 0;
	  width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;




function Theme({ children, theme }: Props): JSX.Element
{
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle />
        {children}
        </>
    </ThemeProvider>
  );
}

export default Theme;
